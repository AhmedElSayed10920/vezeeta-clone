import { Component, inject } from '@angular/core';
import { BookingFormComponent } from "../booking-form/booking-form.component";
import { ImageService } from '../shared/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-page',
  imports: [BookingFormComponent],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css'
})
export class BookingPageComponent {
  bookingInfo: any;

  constructor(private router: Router) {
    this.bookingInfo = this.router.getCurrentNavigation()?.extras.state;

    if (this.bookingInfo) {
      console.log('Doctor:', this.bookingInfo.doctor);
      console.log('Time:', this.bookingInfo.time);
      console.log('Day:', this.bookingInfo.day);
    }
  }
  doctor: any[] = [];
  imageService = inject(ImageService);
  getDoctorImage(doctorId: number): string {
    return this.imageService.getImagePath(doctorId.toString());
  }
}
