import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  imports: [FormsModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {
  bookingData = {
    name: '',
    phone: '',
    email: ''
  };

  // ده الفانكشن اللي بيتنادى لما الفورم يتبعت
  bookAppointment() {
    // هنا تقدر تضيف logic للـ API أو عرض رسالة نجاح
    console.log('Booking submitted:', this.bookingData);

    alert(`تم الحجز بنجاح لـ ${this.bookingData.name}`);

    // تقدر هنا تمسح الداتا أو تنقل المستخدم لصفحة تانية
    this.bookingData = { name: '', phone: '', email: '' };
  }

}
