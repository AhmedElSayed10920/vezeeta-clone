import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Offer } from '../offer';

@Component({
  selector: 'app-booking-form-simple',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-form-simple.component.html',
  styleUrls: ['./booking-form-simple.component.css']
})
export class BookingFormSimpleComponent {
  name: string = '';
  phone: string = '';
  bookingDate: string = '';
  bookingTime: string = '';
  formSubmitted: boolean = false;
  today: string = new Date().toISOString().split('T')[0];

  @Input() offer: Partial<Offer> | null = null;

  constructor(private router: Router) {}

  submitForm() {
    this.formSubmitted = true;

    if (
      this.name &&
      this.phone &&
      this.isPhoneValid() &&
      this.bookingDate &&
      this.isDateValid() &&
      this.bookingTime &&
      this.isTimeValid()
    ) {
      const token = localStorage.getItem('token');
      if (!token) {
        this.router.navigate(['/login']);
        return;
      }

      const data = {
        name: this.name,
        phone: this.phone,
        offer: this.offer,
        bookingDate: this.bookingDate,
        bookingTime: this.bookingTime
      };

      this.router.navigate(['/offer-success'], { state: data });
    }
  }

  cancel() {
    this.name = '';
    this.phone = '';
    this.bookingDate = '';
    this.bookingTime = '';
    this.formSubmitted = false;
  }

  isPhoneValid(): boolean {
    return /^[0-9]{11}$/.test(this.phone);
  }

  isDateValid(): boolean {
    if (!this.bookingDate) return false;
    const selectedDate = new Date(this.bookingDate);
    const todayDate = new Date(this.today);
    return selectedDate >= todayDate;
  }

  isTimeValid(): boolean {
    if (!this.bookingTime) return false;
    const [hours, minutes] = this.bookingTime.split(':').map(Number);
    return hours >= 11 && hours <= 23;
  }
}
