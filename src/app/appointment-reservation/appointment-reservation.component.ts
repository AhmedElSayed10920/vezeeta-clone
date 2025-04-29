import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { CommonModule } from '@angular/common';
import { ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-appointment-reservation',
  imports: [CommonModule],
  templateUrl: './appointment-reservation.component.html',
  styleUrl: './appointment-reservation.component.css'
})
export class AppointmentReservationComponent implements OnInit {
  @Input() doctor!: Doctor;


  @ViewChildren('timeSlotScroll') timeSlotScrolls!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.displayedDays.forEach((day, index) => {
        const times = this.getAppointmentsForDay(day);
        const firstAvailableIndex = times.findIndex(
          time => !this.isPast(day.date, time) && !this.isBooked(day.date, time)
        );
  
        if (firstAvailableIndex !== -1) {
          const scrollContainer = this.timeSlotScrolls.toArray()[index]?.nativeElement;
          const scrollAmount = firstAvailableIndex * 38; // تقريبي: ارتفاع الزر
          if (scrollContainer) {
            scrollContainer.scrollTop = scrollAmount;
          }
        }
      });
    });
  }
  

  displayedDays: { dayName: string; date: string; displayText: string }[] = [];
  currentDayIndex: number = 0;
  bookedAppointments: { [day: string]: string[] } = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.generateDisplayedDays();
    this.displayedDays.forEach(day => {
      this.bookedAppointments[day.date] = [];
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
    start.setHours(10, 0, 0, 0); // 10:00 AM
  
    const end = new Date();
    end.setHours(23, 0, 0, 0); // 11:00 PM
  
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
    return this.bookedAppointments[date]?.includes(time);
  }
  
  isPast(date: string, time: string): boolean {
    const [hourMin, period] = time.split(' ');
    const [hour, minute] = hourMin.split(':').map(Number);
  
    let hour24 = period === 'PM' ? (hour === 12 ? 12 : hour + 12) : (hour === 12 ? 0 : hour);
  
    const appointmentDateTime = new Date();
    const [day, month] = date.split('/').map(Number);
    appointmentDateTime.setDate(day);
    appointmentDateTime.setMonth(month - 1);
    appointmentDateTime.setHours(hour24, minute, 0, 0);
  
    return appointmentDateTime < new Date();
  }
  
  getAppointmentsForDay(day: { dayName: string; date: string; displayText: string }): string[] {
    if (day.dayName === 'Fri') {
      return [];
    }
  
    const today = new Date();
    const todayFormatted = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`;
  
    const todayIndex = this.displayedDays.findIndex(d => d.date === todayFormatted);
    const currentDayIndex = this.displayedDays.findIndex(d => d.date === day.date);
  
    if (currentDayIndex >= todayIndex && currentDayIndex < todayIndex + 7) {
      return this.generateTimeSlots().filter(
        slot => !this.bookedAppointments[day.date].includes(slot)
      );
    }
  
    return [];
  }
  

  bookAppointment(time: string, day: string): void {
    if (this.bookedAppointments[day].includes(time)) {
      alert('You have already booked this time slot.');
      return;
    }
  
    this.bookedAppointments[day].push(time);
  
    const bookingData = {
      doctor: this.doctor,
      time: time,
      day: day
    };
  
    this.router.navigate(['/bookingPage'], { state: bookingData });
  }
  


  
}
