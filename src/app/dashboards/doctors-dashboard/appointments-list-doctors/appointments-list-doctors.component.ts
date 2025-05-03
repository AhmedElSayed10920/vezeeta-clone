import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../../services/appointment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointments-list-doctors',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule],
  templateUrl: './appointments-list-doctors.component.html',
  styleUrl: './appointments-list-doctors.component.css'
})
export class AppointmentsListDoctorsComponent implements OnInit {

  appointments: any;
  doctorId!: number;

  constructor(private doctorAppService: AppointmentService) {}

  ngOnInit(): void {
    const id = localStorage.getItem('doctorId');
    if (id) {
      this.doctorId = +id;
      this.loadAppointments();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Missing ID',
        text: 'Doctor ID not found in local storage.',
        confirmButtonText: 'OK'
      });
    }
  }

  loadAppointments(): void {
    this.doctorAppService.getAppointmentsByDoctor(this.doctorId).subscribe({
      next: (data) => this.appointments = data,
      error: (err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error loading appointments',
          confirmButtonText: 'OK'
        });
      }
    });
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
          this.doctorAppService.deleteAppointment(id).subscribe({
            next: (response) => {
              console.log('Response:', response);
              Swal.fire({
                icon: 'success',
                title: 'Appointment Cancelled',
                text: response.message,
                confirmButtonColor: '#3085d6',
              });
              this.loadAppointments();
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
}
