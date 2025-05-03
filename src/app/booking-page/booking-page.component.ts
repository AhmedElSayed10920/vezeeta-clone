import { Component, inject } from '@angular/core';
import { BookingFormComponent } from "../booking-form/booking-form.component";
import { ImageService } from '../shared/image.service';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor';

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
   getDoctorImage(doctorId: number, doctor: Doctor): string {
      if (doctor.image?.includes('ma7moudsayed-001-site1')) {
        return this.imageService.getImagePath(doctorId.toString());
      } else {
        return doctor.image!;
      }
    }
}
