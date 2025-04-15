import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-appointments',
  imports: [CommonModule],
  templateUrl: './my-appointment.component.html',
  styleUrls: ['./my-appointment.component.css']
})
export class MyAppointmentComponent implements OnInit {

  appointments: any[] = [];
  patientId: number | null = null;

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
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
      }
    });
  }


  getPatientIdFromToken(): number | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('Decoded Token Payload:', payload);
      return payload.PatientId || payload.pid || null;
      // return 105;
    } catch (error) {
      console.error('Invalid token format:', error);
      return null;
    }
  }


  cancelAppointment(id: number): void {
    this.appointmentService.deleteAppointment(id).subscribe({
      next: (response) => {
        console.log('Response:', response);
        alert(response.message);
        this.getAppointments(this.patientId!); 
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Failed to cancel appointment');
      }
    });
  }


  goToDoctorsPage() {
    this.router.navigate(['/allDoctors']);
  }

}
