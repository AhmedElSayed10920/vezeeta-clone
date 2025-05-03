
import { Component, inject, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../models/doctor';
import { ImageService } from '../shared/image.service';
import { AppointmentReservationComponent } from "../appointment-reservation/appointment-reservation.component";
import { BookRequestService } from '../services/book-request.service';
import { Filters } from '../models/filters';

@Component({
  selector: 'app-all-doctors',
  imports: [CommonModule, RouterModule, AppointmentReservationComponent],
  templateUrl: './all-doctors.component.html',
  styleUrl: './all-doctors.component.css'
})
export class AllDoctorsComponent implements OnInit, OnChanges {
  @Input() filters!: Filters;
  loading = false;

  specialty: string = '';
  currentPage = signal<number>(1);
  itemsPerPage = 10;
  totalPages = signal<number>(0);
  visibleDoctors = signal<Doctor[]>([]);

  bookedAppointments: { [doctorId: number]: { [day: string]: string[] } } = {};
  displayedDays: { dayName: string; date: string; displayText: string }[] = [];
  currentDayIndices: { [doctorId: number]: number } = {};

  constructor(
    private doctorsService: DoctorService,
    private bookService: BookRequestService,
    private imageService: ImageService,
    private router: Router
  ) { }

  route = inject(ActivatedRoute);
  doctors: any[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log('Query Params:', params);

      if (!this.filters) {
        this.filters = {
          specialty: '',
          city: '',
          governorate: '',
          name: ''
        };
      }


      if (params['specialty']) {
        this.filters.specialty = params['specialty'];
        this.specialty = params['specialty'];
        console.log('Specialty from query:', this.specialty);
      }

      const nav = this.router.getCurrentNavigation();
      this.doctors = nav?.extras?.state?.['filteredData'] || [];

      this.generateDisplayedDays();

      this.fetchDoctorsBasedOnFilters();
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters']) {
      console.log('Filters changed in AllDoctorsComponent:', this.filters);
      this.fetchDoctorsBasedOnFilters();
    }
  }

  fetchDoctorsBasedOnFilters(): void {
    const { specialty, city, governorate, name } = this.filters;

    this.bookService.getBookingData(specialty, city, governorate).subscribe(
      (response: any[]) => {
        console.log('Raw response from bookService:', response);
        let filteredDoctors = response;

        if (specialty && specialty.toLowerCase() !== 'all specialties') {
          filteredDoctors = filteredDoctors.filter(doc =>
            doc.mainSpecialty?.toLowerCase().includes(specialty.toLowerCase())
          );
        }

        console.log('Filtered by specialty:', filteredDoctors);

        if (city) {
          filteredDoctors = filteredDoctors.filter(doc =>
            doc.city?.toLowerCase().includes(city.toLowerCase())
          );
        }

        if (governorate) {
          filteredDoctors = filteredDoctors.filter(doc =>
            doc.governorate?.toLowerCase().includes(governorate.toLowerCase())
          );
        }

        if (name) {
          filteredDoctors = filteredDoctors.filter(doc =>
            doc.doctorName?.toLowerCase().includes(name.toLowerCase())
          );
        }

        this.doctors = filteredDoctors;
        this.totalPages.set(Math.ceil(this.doctors.length / this.itemsPerPage)); // أضف السطر ده
        this.updateVisibleDoctors();
      },
      error => {
        console.error('Error fetching filtered doctors', error);
      }
    );
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

  getDoctorImage(doctorId: number, doctor: Doctor): string {
    if (doctor.image?.includes('ma7moudsayed-001-site1')) {
      return this.imageService.getImagePath(doctorId.toString());
    } else {
      return doctor.image!;
    }
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

    if (dayName === 'Fri') {
      return 'No Available Appointments';
    }

    if (currentDayIndex >= todayIndex && currentDayIndex < todayIndex + 7) {
      return '10:00 AM - 11:00 PM';
    }

    return 'No Available Appointments';
  }
}
