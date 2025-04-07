// This file is part of the Doctor Appointment System project.
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../doctor';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-all-doctors',
  imports: [CommonModule, RouterModule],
  templateUrl: './all-doctors.component.html',
  styleUrl: './all-doctors.component.css'
})
export class AllDoctorsComponent implements OnInit {
  doctors: Doctor[] = [];
  specialty: string = '';
  currentPage = signal<number>(1);
  itemsPerPage = 10;
  totalPages = signal<number>(0);
  visibleDoctors = signal<Doctor[]>([]);

  bookedAppointments: { [doctorId: number]: { [day: string]: string[] } } = {};
  displayedAppointments: { [doctorId: number]: { [key: string]: number } } = {};


  displayedDays: { dayName: string; date: string }[] = [];
  currentDayIndex = 0;

  constructor(
    private doctorsService: DoctorService,
    private route: ActivatedRoute,
    private imageService: ImageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.generateDisplayedDays();
    this.route.queryParams.subscribe(params => {
      this.specialty = params['specialty'] || 'All Specialties';
      this.fetchDoctors();
    });
  }


  generateDisplayedDays(): void {
    const today = new Date('2025-04-07'); 
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.displayedDays = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayName = daysOfWeek[date.getDay()];
      const formattedDate = `${dayName} ${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
      this.displayedDays.push({ dayName, date: formattedDate });
    }
  }

  fetchDoctors(): void {
    this.doctorsService.getDoctors().subscribe(data => {
      if (this.specialty === 'All Specialties') {
        this.doctors = data;
      } else {
        this.doctors = data.filter(doc => doc.mainSpecialty === this.specialty);
      }
      this.totalPages.set(Math.ceil(this.doctors.length / this.itemsPerPage));
      this.doctors.forEach(doctor => {
        this.displayedAppointments[doctor.id] = {};
        this.bookedAppointments[doctor.id] = {};
        this.displayedDays.forEach(day => {
          this.displayedAppointments[doctor.id][day.date] = 4;
          this.bookedAppointments[doctor.id][day.date] = [];
        });
      });
      this.updateVisibleDoctors();
    });
  }

  updateVisibleDoctors(): void {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.visibleDoctors.set(this.doctors.slice(startIndex, endIndex));
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.updateVisibleDoctors();
    }
  }

  prevPage(): void {
    this.goToPage(this.currentPage() - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage() + 1);
  }

  getDoctorImage(doctorId: number): string {
    return this.imageService.getImagePath(doctorId.toString());
  }

  showMoreAppointments(doctorId: number, day: string): void {
    if (this.displayedAppointments[doctorId]) {
      this.displayedAppointments[doctorId][day] = (this.displayedAppointments[doctorId][day] || 4) + 4;
    }
  }

  hasMoreAppointments(doctor: Doctor, day: string): boolean {
    const dayObj = this.displayedDays.find(d => d.date === day);
    if (!dayObj) return false;
    const appointments = this.getAppointmentsForDay(doctor, dayObj.dayName);
    const displayed = this.displayedAppointments[doctor.id]?.[day] || 4;
    return appointments && appointments.length > displayed;
  }

  bookAppointment(doctorId: number, time: string, day: string): void {
    if (!this.bookedAppointments[doctorId][day]) {
      this.bookedAppointments[doctorId][day] = [];
    }
    this.bookedAppointments[doctorId][day].push(time);
    console.log(`Booked appointment for Doctor ${doctorId} at ${time} on ${day}`);
    this.router.navigate(['/booking-confirmation'], {
      queryParams: { doctorId, time, day }
    });
  }

  isBooked(doctorId: number, time: string, day: string): boolean {
    return this.bookedAppointments[doctorId]?.[day]?.includes(time) || false;
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

  getDisplayedDays(): { dayName: string; date: string }[] {
    return this.displayedDays.slice(this.currentDayIndex, this.currentDayIndex + 3);
  }

  getAppointmentsForDay(doctor: Doctor, dayName: string): string[] {
    if (!doctor.availability) return [];
    return doctor.availability[dayName] || [];
  }
}
