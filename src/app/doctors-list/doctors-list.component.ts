import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppointmentReservationComponent } from "../appointment-reservation/appointment-reservation.component";
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-doctors-list',
  standalone: true,
  imports: [CommonModule, AppointmentReservationComponent],
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.css',
})
export class DoctorsListComponent {
  route = inject(ActivatedRoute);
  imageService = inject(ImageService);
  doctors: any[] = [];

  getDoctorImage(doctorId: number): string {
    return this.imageService.getImagePath(doctorId.toString());
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.doctors = JSON.parse(params['doctors']);
    });
  }
}
