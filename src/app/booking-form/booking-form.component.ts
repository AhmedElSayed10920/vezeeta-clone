import { Component, Input } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-booking-form',
  imports: [FormsModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {
  @Input() bookingInfo!: any;
  selectedDate: string = ''; //  "2025-4-15"
  selectedTime: string = ''; //  "14:00:00"
  constructor(private appointmentService: AppointmentService) {}

  bookingData = {
    name: '',
    phone: '',
    email: ''
  };
  
  bookAppointment() {
    const payload = {
      adate: this.selectedDate,
      atime: this.selectedTime,
      pid: 105, // ده رقم الـ patient – بدّله باللي عندك
      cid: this.bookingInfo?.doctor?.clinicId,
      did: this.bookingInfo?.doctor?.id
    };

    console.log("Booking payload:", payload);

    this.appointmentService.bookAppointment(payload).subscribe({
      next: (res) => {
        alert("Booking Successful🎉");
        console.log(res);
      },
      error: (err) => {
        alert("Failed to Book❌");
        console.error(err);
      }
    });
  }

}

