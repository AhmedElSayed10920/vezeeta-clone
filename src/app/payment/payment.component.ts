import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StripeService } from '../stripe.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-payment',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentStatus: string = '';
  isLoading: boolean = false;
  amount: number = 0;

  constructor(
    private http: HttpClient,
    private stripeService: StripeService
  ) {}

  ngOnInit() {
    this.stripeService.initializeCardElement('#card-element');
  }

  handlePayment() {

    if (this.amount <= 0) {
      this.paymentStatus = 'Please enter a valid amount 💵';
      return;
    }


    this.isLoading = true; // 👈 بدأ التحميل
    this.paymentStatus = '';

    this.http.post<any>('https://localhost:7167/api/payment/create-intent', { amount: this.amount })
      .subscribe({
        next: async (res) => {
          try {
            const success = await this.stripeService.redirectToCheckout(res.clientSecret);
            this.paymentStatus = success ? 'Payment successful  ' : 'Payment failed ❌';
          } catch (error) {
            this.paymentStatus = 'Unexpected error occurred ⚠️';
          } finally {
            this.isLoading = false;
          }
        },
        error: (err) => {
          console.error('Server error:', err);
          this.paymentStatus = 'Failed to connect to server ❌';
          this.isLoading = false;
        }
      });
  }
}
