import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor'; 
import { CommonModule } from '@angular/common';
import { ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-appointment-reservation',
  imports: [CommonModule],
  templateUrl: './appointment-reservation.component.html',
  styleUrls: ['./appointment-reservation.component.css'] // ✅ Corrected property name
})
export class AppointmentReservationComponent implements OnInit, AfterViewInit {
  @Input() doctor!: Doctor;
  @ViewChildren('timeSlotScroll') timeSlotScrolls!: QueryList<ElementRef>;

  displayedDays: { dayName: string; date: string; displayText: string }[] = [];
  currentDayIndex: number = 0;
  bookedAppointments: { [doctorId: string]: { [day: string]: string[] } } = {};
  selectedTime: string | null = null;
  selectedDate: string | null = null;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.generateDisplayedDays();
    if (!this.bookedAppointments[this.doctor.id]) {
      this.bookedAppointments[this.doctor.id] = {};
    }

    this.displayedDays.forEach(day => {
      if (!this.bookedAppointments[this.doctor.id][day.date]) {
        this.bookedAppointments[this.doctor.id][day.date] = [];
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.displayedDays.forEach((day, index) => {
        const times = this.getAppointmentsForDay(day);
        const firstAvailableIndex = times.findIndex(
          time => !this.isPast(day.date, time) && !this.isBooked(day.date, time)
        );

        if (firstAvailableIndex !== -1) {
          const scrollContainer = this.timeSlotScrolls.toArray()[index]?.nativeElement;
          const scrollAmount = firstAvailableIndex * 38;
          if (scrollContainer) {
            scrollContainer.scrollTop = scrollAmount;
          }
        }
      });
    });
  }

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

  getDisplayedDays(): { dayName: string; date: string; displayText: string }[] {
    return this.displayedDays.slice(this.currentDayIndex, this.currentDayIndex + 3);
  }

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

  generateTimeSlots(): string[] {
    const start = new Date();
    start.setHours(10, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 0, 0, 0);

    const slots: string[] = [];

    while (start < end) {
      const hours = start.getHours();
      const minutes = start.getMinutes().toString().padStart(2, '0');
      const period = hours >= 12 ? 'PM' : 'AM';
      const hour12 = hours % 12 === 0 ? 12 : hours % 12;

      slots.push(`${hour12}:${minutes} ${period}`);
      start.setMinutes(start.getMinutes() + 15);
    }

    return slots;
  }

  isBooked(date: string, time: string): boolean {
    return this.bookedAppointments[this.doctor.id]?.[date]?.includes(time);
  }

  isPast(date: string, time: string): boolean {
    const [hourMin, period] = time.split(' ');
    const [hour, minute] = hourMin.split(':').map(Number);
    const hour24 = period === 'PM' ? (hour === 12 ? 12 : hour + 12) : (hour === 12 ? 0 : hour);

    const appointmentDateTime = new Date();
    const [day, month] = date.split('/').map(Number);
    appointmentDateTime.setFullYear(appointmentDateTime.getFullYear(), month - 1, day);
    appointmentDateTime.setHours(hour24, minute, 0, 0);

    return appointmentDateTime < new Date();
  }

  getAppointmentsForDay(day: { dayName: string; date: string; displayText: string }): string[] {
    if (day.dayName === 'Fri') {
      return [];
    }

    return this.generateTimeSlots().filter(
      slot => !this.bookedAppointments[this.doctor.id]?.[day.date]?.includes(slot)
    );
  }

  hasPatientBookedOnDate(date: string): boolean {
    return this.bookedAppointments[this.doctor.id]?.[date]?.length > 0;
  }

  bookAppointment(time: string, day: string): void {
    if (this.isBooked(day, time)) {
      alert('You have already booked this time slot.');
      return;
    }

    if (this.hasPatientBookedOnDate(day)) {
      alert('You already booked an appointment with this doctor on this day.');
      return;
    }
    this.selectedTime = time;
    this.selectedDate = day;
    this.bookedAppointments[this.doctor.id][day].push(time);

    const bookingData = {
      doctor: this.doctor,
      time: time,
      day: day
    };

    this.router.navigate(['/bookingPage'], { state: bookingData });
  }
  confirmBooking(): void {
    if (!this.selectedTime || !this.selectedDate) return;

    // احجز الموعد في المصفوفة
    this.bookedAppointments[this.doctor.id][this.selectedDate].push(this.selectedTime);

    const bookingData = {
      doctor: this.doctor,
      time: this.selectedTime,
      day: this.selectedDate
    };

    this.router.navigate(['/bookingPage'], { state: bookingData });
  }

}
