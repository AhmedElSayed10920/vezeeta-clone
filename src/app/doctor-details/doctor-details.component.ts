import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../doctor';
import { ImageService } from '../shared/image.service';
import { AppointmentReservationComponent } from '../appointment-reservation/appointment-reservation.component';

@Component({
  selector: 'app-doctor-details',
  imports: [CommonModule],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.css'
})
export class DoctorDetailsComponent implements OnInit {
  doctor: Doctor | null = null;

  constructor(
    private route: ActivatedRoute,
    private doctorsService: DoctorService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    const doctorId = this.route.snapshot.paramMap.get('id');
    if (doctorId) {
      this.doctorsService.getDoctorById(+doctorId).subscribe({
        next: (data) => {
          this.doctor = data;
        },
        error: (err) => {
          console.error('Error fetching doctor details:', err);
        }
      });
    }
  }

  getDoctorImage(): string {
    if (this.doctor && this.doctor.id) {
      return this.imageService.getImagePath(this.doctor.id.toString());
    }
    return 'images/doctorImg/default.png'; // Return a default image if the doctor ID is not available
  }
}

