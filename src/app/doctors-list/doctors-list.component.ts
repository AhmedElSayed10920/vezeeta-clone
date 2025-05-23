import {
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppointmentReservationComponent } from '../appointment-reservation/appointment-reservation.component';
import { ImageService } from '../shared/image.service';
import { BookRequestService } from '../services/book-request.service';
import { Filters } from '../models/filters';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-doctors-list',
  standalone: true,
  imports: [CommonModule, AppointmentReservationComponent],
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.css',
})
export class DoctorsListComponent implements OnChanges {
  @Input() filters!: Filters;
  doctors: any[] = [];
  filteredDoctors: any[] = [];
  loading = false;
  route = inject(ActivatedRoute);
  router = inject(Router);
  imageService = inject(ImageService);
  bookRequestService = inject(BookRequestService);
  //pagination variables
  currentPage = 1;
  pageSize = 5; // عدد الأطباء في الصفحة الواحدة (تقدر تغيّره)
  totalPages = 0;
  
   getDoctorImage(doctorId: number, doctor: Doctor): string {
      if (doctor.image?.includes('ma7moudsayed-001-site1')) {
        return this.imageService.getImagePath(doctorId.toString());
      } else {
        return doctor.image!;
      }
    }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['doctors']) {
        this.doctors = JSON.parse(params['doctors']);
        console.log('Loaded doctors:', this.doctors);
        this.filteredDoctors = [...this.doctors];

        if (!this.filters) {
          this.filters = {
            degree: { phd: true, master: true, bachelor: true },
            gender: 'F',
            fees: {
              lessThan50: false,
              from50To100: false,
              from100To200: true,
              from200To300: true,
              greaterThan300: true,
            },
          };
        }

        console.log('Loaded doctors:', this.doctors);
        console.log('Applied filters:', this.filters);

        this.applyFilters(this.filters);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filters'] && !changes['filters'].firstChange) {
      this.applyFilters(this.filters);
    }
  }

  // applyFilters(filters: any = this.filters) {
  //   this.filteredDoctors = this.doctors.filter((doc) => {
  //     const degreeMatches =
  //       !filters.degree ||
  //       filters.degree.length === 0 ||
  //       filters.degree.some((deg: string) =>
  //         doc.degree?.toLowerCase().includes(deg.toLowerCase())
  //       );

  //     const genderMatches =
  //       !filters.gender ||
  //       (filters.gender === 'M' && doc.gender === 'M') ||
  //       (filters.gender === 'F' && doc.gender === 'F');

  //     const feeMatches =
  //       !filters.fees ||
  //       filters.fees === 'any' ||
  //       (Array.isArray(filters.fees) &&
  //         ((filters.fees.includes('lessThan50') && doc.fees < 50) ||
  //           (filters.fees.includes('from50To100') &&
  //             doc.fees >= 50 &&
  //             doc.fees < 100) ||
  //           (filters.fees.includes('from100To200') &&
  //             doc.fees >= 100 &&
  //             doc.fees < 200) ||
  //           (filters.fees.includes('from200To300') &&
  //             doc.fees >= 200 &&
  //             doc.fees < 300) ||
  //           (filters.fees.includes('greaterThan300') && doc.fees >= 300)));

  //     return degreeMatches && genderMatches && feeMatches;
  //   });

  //   console.log('Filtered doctors:', this.filteredDoctors);
  // }
  applyFilters(filters: any = this.filters) {
    this.filteredDoctors = this.doctors.filter((doc) => {
      const degreeMatches =
        !filters.degree ||
        filters.degree.length === 0 ||
        filters.degree.some((deg: string) =>
          doc.degree?.toLowerCase().includes(deg.toLowerCase())
        );
  
      const genderMatches =
        !filters.gender ||
        (filters.gender === 'M' && doc.gender === 'M') ||
        (filters.gender === 'F' && doc.gender === 'F');
  
      const feeMatches =
        !filters.fees ||
        filters.fees === 'any' ||
        (Array.isArray(filters.fees) &&
          ((filters.fees.includes('lessThan50') && doc.fees < 50) ||
            (filters.fees.includes('from50To100') &&
              doc.fees >= 50 &&
              doc.fees < 100) ||
            (filters.fees.includes('from100To200') &&
              doc.fees >= 100 &&
              doc.fees < 200) ||
            (filters.fees.includes('from200To300') &&
              doc.fees >= 200 &&
              doc.fees < 300) ||
            (filters.fees.includes('greaterThan300') && doc.fees >= 300)));
  
      return degreeMatches && genderMatches && feeMatches;
    });
  
    this.totalPages = Math.ceil(this.filteredDoctors.length / this.pageSize);
    this.currentPage = 1; // رجع أول صفحة بعد الفلترة
    console.log('Filtered doctors:', this.filteredDoctors);
  }
  get paginatedDoctors() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredDoctors.slice(startIndex, endIndex);
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
    
}
