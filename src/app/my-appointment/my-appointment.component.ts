import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-appointments',
  imports: [CommonModule],
  templateUrl: './my-appointment.component.html',
  styleUrls: ['./my-appointment.component.css'],
})
export class MyAppointmentComponent implements OnInit {
  appointments: any[] = [];
  patientId: number | null = null;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    console.log('appointments:', this.appointments);
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.patientId = parseInt(payload.patientId, 10);

      if (!isNaN(this.patientId)) {
        this.getAppointments(this.patientId);
      } else {
        console.error('Patient ID not found or invalid in token');
      }
    } else {
      console.error('No token found');
    }
  }

  getAppointments(patientId: number) {
    this.appointmentService.getAppointmentsByPatientId(patientId!).subscribe({
      next: (appointments) => {
        this.appointments = appointments;
      },
      error: (err) => {
        console.error('Error loading appointments', err);
        Swal.fire({
          icon: 'error',
          title: 'Failed to load appointments',
          text: 'There was an error loading your appointments. Please try again later.',
          confirmButtonColor: '#d33',
        });
      },
    });
  }

  getPatientIdFromToken(): number | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('Decoded Token Payload:', payload);
      return payload.PatientId || payload.pid || null;
    } catch (error) {
      console.error('Invalid token format:', error);
      return null;
    }
  }

  cancelAppointment(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to cancel this appointment?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.appointmentService.deleteAppointment(id).subscribe({
          next: (response) => {
            console.log('Response:', response);
            Swal.fire({
              icon: 'success',
              title: 'Appointment Cancelled',
              text: response.message,
              confirmButtonColor: '#3085d6',
            });
            this.getAppointments(this.patientId!);
          },
          error: (error) => {
            console.error('Error:', error);
            Swal.fire({
              icon: 'error',
              title: 'Failed to cancel appointment',
              text: 'There was an error canceling your appointment. Please try again later.',
              confirmButtonColor: '#d33',
            });
          },
        });
      }
    });
  }




  goToDoctorsPage() {
    this.router.navigate(['/allDoctors']);
  }

  convertTimeToDate(timeString: string): Date {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, seconds || 0, 0);
    return date;
  }

 ////////////////////////////////
//  refundAppointment(paymentIntentId: string): void {
//   Swal.fire({
//     title: 'Are you sure?',
//     text: 'Do you want to refund this payment?',
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, refund it!',
//   }).then((result) => {
//     if (result.isConfirmed) {
//       this.appointmentService.refundPayment(paymentIntentId).subscribe({
//         next: (res) => {
//           Swal.fire({
//             icon: 'success',
//             title: 'Refund Successful',
//             text: res.message,
//             confirmButtonColor: '#3085d6',
//           });
//           this.getAppointments(this.patientId!);
//         },
//         error: (err) => {
//           Swal.fire({
//             icon: 'error',
//             title: 'Refund Failed',
//             text: err.error?.message || 'An error occurred during refund.',
//             confirmButtonColor: '#d33',
//           });
//         },
//       });
//     }
//   });
// }

refundAppointment(paymentIntentId: string): void {
  console.log('🔁 Sending refund for:', paymentIntentId); // ✅ طباعة القيمة

  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to refund this payment?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, refund it!',
  }).then((result) => {
    if (result.isConfirmed) {
      this.appointmentService.refundPayment(paymentIntentId).subscribe({
        next: (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Refund Successful',
            text: res.message,
            confirmButtonColor: '#3085d6',
          });
          this.getAppointments(this.patientId!);
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Refund Failed',
            text: err.error?.message || 'An error occurred during refund.',
            confirmButtonColor: '#d33',
          });
        },
      });
    }
  });
}

//////////////////////////////////

}



