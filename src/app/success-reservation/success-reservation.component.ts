import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-reservation',
  imports: [],
  templateUrl: './success-reservation.component.html',
  styleUrl: './success-reservation.component.css'
})
export class SuccessReservationComponent {
  bookingData: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.bookingData = nav?.extras?.state;
  }
}
