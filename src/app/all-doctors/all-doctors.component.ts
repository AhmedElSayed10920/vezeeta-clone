import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../doctor';


@Component({
  selector: 'app-all-doctors',
  imports: [CommonModule,RouterModule],
  templateUrl: './all-doctors.component.html',
  styleUrl: './all-doctors.component.css'
})


export class AllDoctorsComponent implements OnInit {
  doctors: Doctor[] = [];
  specialty: string = '';
  currentPage = signal<number>(1); // الصفحة الحالية
  itemsPerPage = 10; // عدد الكروت لكل صفحة
  totalPages = signal<number>(0); // إجمالي الصفحات

  // حساب الدكاترة المعروضة بناءً على الصفحة الحالية
  visibleDoctors = signal<Doctor[]>([]);

  constructor(
    private doctorsService: DoctorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.specialty = params['specialty'] || 'All Specialties';
      this.fetchDoctors();
    });
  }

  fetchDoctors(): void {
    this.doctorsService.getDoctors().subscribe(data => {
      if (this.specialty === 'All Specialties') {
        this.doctors = data;
      } else {
        this.doctors = data.filter(doc => doc.mainSpecialty === this.specialty);
      }
      this.totalPages.set(Math.ceil(this.doctors.length / this.itemsPerPage)); // حساب إجمالي الصفحات
      this.updateVisibleDoctors(); // تحديث الدكاترة المعروضة
    });
  }

  // تحديث الدكاترة المعروضة بناءً على الصفحة
  updateVisibleDoctors(): void {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.visibleDoctors.set(this.doctors.slice(startIndex, endIndex));
  }

  // الانتقال لصفحة معينة
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.updateVisibleDoctors();
    }
  }

  // الانتقال للصفحة السابقة
  prevPage(): void {
    this.goToPage(this.currentPage() - 1);
  }

  // الانتقال للصفحة التالية
  nextPage(): void {
    this.goToPage(this.currentPage() + 1);
  }
}

