import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-success-reservation-offer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './success-reservation-offer.component.html',
  styleUrls: ['./success-reservation-offer.component.css']
})
export class SuccessReservationOfferComponent {
  name: string = '';
  phone: string = '';
  offer: any = null;
  doctorName: string = 'Dr. Ahmed Rabea';
  waitingTime: string = '30 Minutes';
  clinicAddress: string = '';
  bookingDate: string = '';
  bookingTime: string = '';

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.name = state?.['name'] || '';
    this.phone = state?.['phone'] || '';
    this.offer = state?.['offer'] || null;
    this.bookingDate = state?.['bookingDate'] || 'Not specified';
    this.bookingTime = state?.['bookingTime'] || 'Not specified';

    this.clinicAddress = this.offer?.clinicName ? `${this.offer.clinicName} - Nasr City` : 'Cairo - Nasr City';
  }

  calculateEndTime(startTime: string): string {
    if (!startTime || startTime === 'Not specified') {
      return 'Not specified';
    }

    const [hours, minutes] = startTime.split(':').map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    date.setMinutes(date.getMinutes() + 30);

    let endHours = date.getHours();
    const endMinutes = date.getMinutes();
    const ampm = endHours >= 12 ? 'PM' : 'AM';
    endHours = endHours % 12 || 12;
    const formattedMinutes = endMinutes < 10 ? `0${endMinutes}` : endMinutes;

    return `${endHours}:${formattedMinutes} ${ampm}`;
  }

  goToMyAppointments() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/MyAppointments']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
