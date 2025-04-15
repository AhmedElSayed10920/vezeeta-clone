
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../doctor';
import { ImageService } from '../shared/image.service';
import { AppointmentReservationComponent } from "../appointment-reservation/appointment-reservation.component";

@Component({
  selector: 'app-all-doctors',
  imports: [CommonModule, RouterModule, AppointmentReservationComponent],
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
  displayedDays: { dayName: string; date: string; displayText: string }[] = [];
  // Use an object to store currentDayIndex for each doctor
  currentDayIndices: { [doctorId: number]: number } = {};

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
    const today = new Date(); // Use current date
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.displayedDays = [];

    for (let i = 0; i < 15; i++) { // Generate 15 days
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayName = daysOfWeek[date.getDay()];
      const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
      let displayText = '';

      if (i === 0) {
        displayText = 'Today'; // Today
      } else if (i === 1) {
        displayText = 'Tomorrow'; // Tomorrow
      } else {
        displayText = `${dayName} ${formattedDate}`; // e.g., Thu 10/04
      }

      this.displayedDays.push({ dayName, date: formattedDate, displayText });
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
        this.bookedAppointments[doctor.id] = {};
        this.currentDayIndices[doctor.id] = 0; // Initialize currentDayIndex for each doctor
        this.displayedDays.forEach(day => {
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

  bookAppointment(doctorId: number, time: string, day: string): void {
    if (!this.bookedAppointments[doctorId][day]) {
      this.bookedAppointments[doctorId][day] = [];
    }
    this.bookedAppointments[doctorId][day].push(time);
    console.log(`Booked appointment for Doctor ${doctorId} at ${time} on ${day}`);
    this.router.navigate(['/bookingPage'], {
      queryParams: { doctorId, time, day }
    });
  }

  prevDay(doctorId: number): void {
    if (this.currentDayIndices[doctorId] > 0) {
      this.currentDayIndices[doctorId]--;
    }
  }

  nextDay(doctorId: number): void {
    if (this.currentDayIndices[doctorId] < this.displayedDays.length - 3) {
      this.currentDayIndices[doctorId]++;
    }
  }

  getDisplayedDays(doctorId: number): { dayName: string; date: string; displayText: string }[] {
    const index = this.currentDayIndices[doctorId] || 0;
    return this.displayedDays.slice(index, index + 3);
  }

  getAppointmentsForDay(doctor: Doctor, dayName: string, date: string): string {
    const today = new Date();
    const todayFormatted = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}`;
    const todayIndex = this.displayedDays.findIndex(day => day.date === todayFormatted);
    const currentDayIndex = this.displayedDays.findIndex(day => day.date === date);

    // Check if the day is a Friday
    if (dayName === 'Fri') {
      return 'No Available Appointments';
    }

    // Check if the day is within the first 7 days from today
    if (currentDayIndex >= todayIndex && currentDayIndex < todayIndex + 7) {
      return '10:00 AM - 11:00 PM';
    }

    // For days before today or after the first 7 days
    return 'No Available Appointments';
  }
}
