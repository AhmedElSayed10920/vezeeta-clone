import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-reservation',
  imports: [CommonModule],
  templateUrl: './success-reservation.component.html',
  styleUrl: './success-reservation.component.css'
})
export class SuccessReservationComponent {
  bookingData: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.bookingData = nav?.extras?.state;
  }
  goToMyAppointments() {
    const token = localStorage.getItem('token');

    if (token) {
      this.router.navigate(['/myAppointment']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  goToMyPayment() {
    this.router.navigate(['/payment'], { state: this.bookingData });
  }

  convertTimeToDate(timeString: string): Date {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, seconds || 0, 0);
    return date;
  }


}
