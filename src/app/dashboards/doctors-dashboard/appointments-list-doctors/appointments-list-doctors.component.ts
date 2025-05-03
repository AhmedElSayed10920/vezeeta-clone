import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../../services/appointment.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointments-list-doctors',
  imports: [CommonModule ],
  templateUrl: './appointments-list-doctors.component.html',
  styleUrl: './appointments-list-doctors.component.css'
})
export class AppointmentsListDoctorsComponent implements OnInit {

  appointments: any;
  doctorId!: number;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    console.log('appointments:', this.appointments);
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
  markAsDone(appointment: any): void {
    appointment.isDone = true;
  }
  

  loadAppointments(): void {
    this.appointmentService.getAppointmentsByDoctor(this.doctorId).subscribe({
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

  formatTimeTo12Hour(timeStr: string): string {
    const [hourStr, minuteStr] = timeStr.split(':');
    let hour = parseInt(hourStr, 10);
    const minute = minuteStr;
    const ampm = hour >= 12 ? 'PM' : 'AM';
  
    hour = hour % 12;
    if (hour === 0) hour = 12;
  
    return `${hour.toString().padStart(2, '0')}:${minute} ${ampm}`;
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
          console.log('Canceling appointment with ID:', id);
           this.appointmentService.deleteAppointment(id).subscribe({
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
