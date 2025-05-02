// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { StripeService } from '../stripe.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { of } from 'rxjs';
// @Component({
//   selector: 'app-payment',
//   imports: [CommonModule, FormsModule],
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//   paymentStatus: string = '';
//   isLoading: boolean = false;
//   amount: number = 0;

//   bookingData: any;
//   offer: any;

//   constructor(
//     private http: HttpClient,
//     private stripeService: StripeService,
//     private router: Router
//   ) {
//     const nav = this.router.getCurrentNavigation();
//     this.bookingData = nav?.extras?.state;
//     this.offer = nav?.extras?.state;
//     if (this.bookingData?.doctor?.fees) {
//       this.amount = this.bookingData.doctor.fees;
//     }else{
//       this.amount = this.offer?.finalPrice;
//     }
//   }

//   ngOnInit() {
//     this.stripeService.initializeCardElement('#card-element');
//   }

//   handlePayment() {

//     if (this.amount <= 0) {
//       this.paymentStatus = 'Please enter a valid amount 💵';
//       return;
//     }


//     this.isLoading = true; // 👈 بدأ التحميل
//     this.paymentStatus = '';

//     this.http.post<any>('https://localhost:7167/api/payment/create-intent', { amount: this.amount })
//       .subscribe({
//         next: async (res) => {
//           try {
//             const success = await this.stripeService.redirectToCheckout(res.clientSecret);
//             this.paymentStatus = success ? 'Payment successful  ' : 'Payment failed ❌';
//           } catch (error) {
//             this.paymentStatus = 'Unexpected error occurred ⚠️';
//           } finally {
//             this.isLoading = false;
//           }
//         },
//         error: (err) => {
//           console.error('Server error:', err);
//           this.paymentStatus = 'Failed to connect to server ❌';
//           this.isLoading = false;
//         }
//       });
//   }
// }
/////////////////////////////////////////////////////////////////


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StripeService } from '../stripe.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentStatus: string = '';
  isLoading: boolean = false;
  amount: number = 0;

  bookingData: any;
  offer: any;
  paymentIntentId: string = ''; // لتخزين ID العملية

  constructor(
    private http: HttpClient,
    private stripeService: StripeService,
    private router: Router,

  ) {
    const nav = this.router.getCurrentNavigation();
    this.bookingData = nav?.extras?.state;
    this.offer = nav?.extras?.state;

    if (this.bookingData?.doctor?.fees) {
      this.amount = this.bookingData.doctor.fees;
    } else {
      this.amount = this.offer?.finalPrice ?? 0;
    }
  }

  ngOnInit() {
    this.stripeService.initializeCardElement('#card-element');
  }

  handlePayment() {
    if (this.amount <= 0) {
      this.paymentStatus = 'Please enter a valid amount 💵';
      return;
    }

    this.isLoading = true;
    this.paymentStatus = '';

    this.http.post<any>('https://localhost:7167/api/payment/create-intent', { amount: this.amount })
      .subscribe({
        next: async (res) => {
          try {
            const success = await this.stripeService.redirectToCheckout(res.clientSecret);
            if (success) {
              // استخراج الـ paymentIntentId من الـ response أو من الـ clientSecret نفسه
              this.paymentIntentId = res.paymentIntentId ?? res.clientSecret?.split('_secret')[0];
              this.paymentStatus = 'Payment successful ✅';
            } else {
              this.paymentStatus = 'Payment failed ❌';
            }
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

  handleRefund() {
    if (!this.paymentIntentId) {
      this.paymentStatus = 'No payment made yet to refund ❌';
      return;
    }

    this.isLoading = true;
    this.paymentStatus = '';

    this.http.post<any>('https://localhost:7167/api/payment/refund', {
      paymentIntentId: this.paymentIntentId
    }).subscribe({
      next: (res) => {
        this.paymentStatus = res.success ? 'Refund successful ✅' : 'Refund failed ❌';
      },
      error: (err) => {
        console.error('Refund error:', err);
        this.paymentStatus = 'Refund failed ❌';
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}












// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { StripeService } from '../stripe.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AppointmentService } from '../services/appointment.service';

// @Component({
//   selector: 'app-payment',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//   paymentStatus: string = '';
//   isLoading: boolean = false;
//   amount: number = 0;

//   bookingData: any;
//   offer: any;
//   paymentIntentId: string = '';
//   appointmentId: number | null = null;

//   constructor(
//     private http: HttpClient,
//     private stripeService: StripeService,
//     private router: Router,
//     private appointmentService: AppointmentService
//   ) {
//     const nav = this.router.getCurrentNavigation();
//     this.bookingData = nav?.extras?.state;
//     this.offer = nav?.extras?.state;

//     if (this.bookingData?.doctor?.fees) {
//       this.amount = this.bookingData.doctor.fees;
//     } else {
//       this.amount = this.offer?.finalPrice ?? 0;
//     }

//     // تأكد من وجود ID الموعد (appointmentId)
//     this.appointmentId = this.bookingData?.appointmentId ?? null;
//   }

//   ngOnInit() {
//     this.stripeService.initializeCardElement('#card-element');
//   }

//   handlePayment() {
//     if (this.amount <= 0) {
//       this.paymentStatus = 'Please enter a valid amount 💵';
//       return;
//     }

//     this.isLoading = true;
//     this.paymentStatus = '';

//     this.http.post<any>('https://localhost:7167/api/payment/create-intent', { amount: this.amount })
//       .subscribe({
//         next: async (res) => {
//           try {
//             const success = await this.stripeService.redirectToCheckout(res.clientSecret);
//             if (success) {
//               this.paymentIntentId = res.paymentIntentId ?? res.clientSecret?.split('_secret')[0];
//               this.paymentStatus = 'Payment successful ✅';
//             } else {
//               this.paymentStatus = 'Payment failed ❌';
//             }
//           } catch (error) {
//             this.paymentStatus = 'Unexpected error occurred ⚠️';
//           } finally {
//             this.isLoading = false;
//           }
//         },
//         error: (err) => {
//           console.error('Server error:', err);
//           this.paymentStatus = 'Failed to connect to server ❌';
//           this.isLoading = false;
//         }
//       });
//   }

//   handleRefund() {
//     if (!this.paymentIntentId) {
//       this.paymentStatus = 'No payment made yet to refund ❌';
//       return;
//     }

//     this.isLoading = true;
//     this.paymentStatus = '';

//     this.http.post<any>('https://localhost:7167/api/payment/refund', {
//       paymentIntentId: this.paymentIntentId
//     }).subscribe({
//       next: (res) => {
//         if (res.success) {
//           this.paymentStatus = 'Refund successful ✅';
//           this.cancelAppointmentAfterRefund(); // إلغاء الحجز بعد نجاح refund
//         } else {
//           this.paymentStatus = 'Refund failed ❌';
//         }
//       },
//       error: (err) => {
//         console.error('Refund error:', err);
//         this.paymentStatus = 'Refund failed ❌';
//         this.isLoading = false;
//       }
//     });
//   }

//   cancelAppointmentAfterRefund() {
//     if (!this.appointmentId) {
//       console.warn('No appointment ID found to cancel.');
//       this.isLoading = false;
//       return;
//     }

//     this.appointmentService.deleteAppointment(this.appointmentId).subscribe({
//       next: (response) => {
//         this.paymentStatus += ' | Appointment cancelled 🗓️';
//       },
//       error: (error) => {
//         console.error('Failed to cancel appointment:', error);
//         this.paymentStatus += ' | But failed to cancel appointment ❌';
//       },
//       complete: () => {
//         this.isLoading = false;
//       }
//     });
//   }
// }
