import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-reservation',
  imports: [CommonModule],
  templateUrl: './appointment-reservation.component.html',
  styleUrl: './appointment-reservation.component.css'
})
export class AppointmentReservationComponent implements OnInit {
  @Input() doctor!: Doctor;

  // المتغيرات الخاصة بالمواعيد والحجز
  displayedDays: { dayName: string; date: string; displayText: string }[] = [];
  currentDayIndex: number = 0;
  bookedAppointments: { [day: string]: string[] } = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.generateDisplayedDays();
    // تهيئة المصوفة لكل يوم
    this.displayedDays.forEach(day => {
      this.bookedAppointments[day.date] = [];
    });
  }

  // دالة لتوليد الأيام المعروضة في جدول المواعيد (15 يوم)
  generateDisplayedDays(): void {
    const today = new Date();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.displayedDays = [];

    for (let i = 0; i < 15; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayName = daysOfWeek[date.getDay()];
      const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`;
      let displayText = '';

      if (i === 0) {
        displayText = 'Today';
      } else if (i === 1) {
        displayText = 'Tomorrow';
      } else {
        displayText = `${dayName} ${formattedDate}`;
      }

      this.displayedDays.push({ dayName, date: formattedDate, displayText });
    }
  }

  // عرض ثلاثة أيام في الوقت الحالي اعتماداً على المؤشر الحالي
  getDisplayedDays(): { dayName: string; date: string; displayText: string }[] {
    return this.displayedDays.slice(this.currentDayIndex, this.currentDayIndex + 3);
  }

  // التنقل بين الأيام
  prevDay(): void {
    if (this.currentDayIndex > 0) {
      this.currentDayIndex--;
    }
  }

  nextDay(): void {
    if (this.currentDayIndex < this.displayedDays.length - 3) {
      this.currentDayIndex++;
    }
  }

  // تحديد المواعيد المتاحة لكل يوم
  getAppointmentsForDay(day: { dayName: string; date: string; displayText: string }): string {
    const today = new Date();
    const todayFormatted = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`;
    const todayIndex = this.displayedDays.findIndex(d => d.date === todayFormatted);
    const currentDayIndex = this.displayedDays.findIndex(d => d.date === day.date);

    // إذا كان اليوم جمعة يتم إظهار عدم وجود مواعيد
    if (day.dayName === 'Fri') {
      return 'No Available Appointments';
    }

    // إذا كان اليوم من الأيام السبعة الأولى اعتباراً من اليوم الحالي
    if (currentDayIndex >= todayIndex && currentDayIndex < todayIndex + 7) {
      return '10:00 AM - 11:00 PM';
    }

    return 'No Available Appointments';
  }

  // دالة الحجز: عند الضغط على زر "BOOK"
  bookAppointment(time: string, day: string): void {
    if (!this.bookedAppointments[day]) {
      this.bookedAppointments[day] = [];
    }
    this.bookedAppointments[day].push(time);
    console.log(`Booked appointment for Doctor ${this.doctor.id} at ${time} on ${day}`);
    this.router.navigate(['/booking-confirmation'], {
      queryParams: { doctorId: this.doctor.id, time, day }
    });
  }
}
