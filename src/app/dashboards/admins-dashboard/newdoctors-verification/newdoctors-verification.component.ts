import { Component } from '@angular/core';
import { DoctorVerificationService } from '../../../services/doctorverification.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newdoctors-verification',
  imports: [CommonModule],
  templateUrl: './newdoctors-verification.component.html',
  standalone: true,
  styleUrl: './newdoctors-verification.component.css'
})
export class NewdoctorsVerificationComponent {
  unverifiedDoctors: any[] = [];

  constructor(private doctorVerificationService: DoctorVerificationService) { }

  ngOnInit(): void {
    this.loadUnverifiedDoctors();
  }

  loadUnverifiedDoctors(): void {
    this.doctorVerificationService.getUnverifiedDoctors().subscribe({
      next: (response) => {
        this.unverifiedDoctors = response || [];
      },
      error: (error) => {
        console.error('Error fetching unverified doctors:', error);
      }
    });
  }
  approveDoctor(doctorId: number): void {
    this.doctorVerificationService.approveDoctor(doctorId).subscribe({
      next: () => {
        this.unverifiedDoctors = this.unverifiedDoctors.filter(d => d.doctorID !== doctorId);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Doctor verified successfully!',
          confirmButtonText: 'Ok'
        });
      },
      error: (error) => {
        console.error('Error approving doctor:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error occurred while verifying doctor.',
          confirmButtonText: 'Ok'
        });
      }
    });
  }
}
