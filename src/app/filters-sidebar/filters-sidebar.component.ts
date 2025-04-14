import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookRequestService } from '../services/book-request.service';
import { Doctor } from '../doctor';
import { DoctorService } from '../services/doctor.service';
import { Filters } from '../models/filters';

@Component({
  selector: 'app-filters-sidebar',
  imports: [FormsModule,CommonModule],
  templateUrl: './filters-sidebar.component.html',
  styleUrls: ['./filters-sidebar.component.css']
})
export class FiltersSidebarComponent {

  doctorService = inject(DoctorService);
    @Input() doctor!: Doctor;
    @Output() filtersChanged = new EventEmitter<Filters>(); // Ensures correct type

  // sections to toggle collapsible filters
  sections = {
    degree: true,
    subSpecialties: true,
    gender: true,
    fees: true
  };

  // الفلاتر الموجودة
  filters = {
    degree: {
      master: false,
      bachelor: false,
      phd: false
      
    },
    subSpecialties: {
      newBorn: false,
      pediatricAllergy: false
    },
    gender: '',
    fees: {
      any: false,
      lessThan50: false,
      from50To100: false,
      from100To200: false,
      from200To300: false,
      greaterThan300: false
    }
  };

  // EventEmitter لإرسال الفلاتر للأب
  // Removed duplicate declaration of filtersChanged

  // توسيع أو تصغير الأقسام
  toggleSection(section: keyof typeof this.sections) {
    this.sections[section] = !this.sections[section];
  }

  // تطبيق الفلاتر (كل تغيير يبعث الفلاتر الحالية)
  // applyFilters() {
  //   const activeFilters = {
  //     title: Object.keys(this.filters.title).filter(k => this.filters.title[k as keyof typeof this.filters.title]),
  //     subSpecialties: Object.keys(this.filters.subSpecialties).filter(k => this.filters.subSpecialties[k as keyof typeof this.filters.subSpecialties]),
  //     gender: this.filters.gender,
  //     fees: Object.keys(this.filters.fees).filter(k => this.filters.fees[k as keyof typeof this.filters.fees])
  //   };

  //   this.filtersChanged.emit(activeFilters);
  // }

  applyFilters() {
    const activeFilters: any = {};
  
    // Example: لو اخترنا أي تايتل، نرسلهم كـ speciality (ممكن تحتاجي تنسقي مع الباك)
  //   const selectedTitles = Object.keys(this.filters.degree).filter(k => this.filters.degree[k as keyof typeof this.filters.degree]);
  //   if (selectedTitles.length > 0) {
  //     activeFilters.speciality = selectedTitles.join(','); // أو حسب المطلوب من الـ API
  //   }
  
  //   const selectedSubSpecialties = Object.keys(this.filters.subSpecialties).filter(k => this.filters.subSpecialties[k as keyof typeof this.filters.subSpecialties]);
  //   if (selectedSubSpecialties.length > 0) {
  //     activeFilters.subSpecialty = selectedSubSpecialties.join(',');
  //   }
  
  //   if (this.filters.gender) {
  //     activeFilters.gender = this.filters.gender;
  //   }
  
  //   // Fees logic
  //   const fees = this.filters.fees;
  //   if (fees.any) {
  //     activeFilters.maxFees = null; // أو احذفيه حسب اللوجيك
  //   } else if (fees.lessThan50) {
  //     activeFilters.maxFees = 49;
  //   } else if (fees.from50To100) {
  //     activeFilters.maxFees = 100;
  //   } else if (fees.from100To200) {
  //     activeFilters.maxFees = 200;
  //   } else if (fees.from200To300) {
  //     activeFilters.maxFees = 300;
  //   } else if (fees.greaterThan300) {
  //     activeFilters.maxFees = 301; // أو استخدمي minFees بدلاً
  //   }
  
  //   this.filtersChanged.emit(activeFilters);
  // }
   // معالجة العنوان
   const selectedTitles = Object.keys(this.filters.degree || {})
   .filter(k => this.filters.degree?.[k as keyof typeof this.filters.degree]);
 if (selectedTitles.length > 0) {
   activeFilters.title = this.filters.degree;
 }

 // معالجة الجنس
 if (this.filters.gender) {
   activeFilters.gender = this.filters.gender;
 }

 // معالجة الرسوم
 if (this.filters.fees) {
   if (this.filters.fees.lessThan50) {
     activeFilters.maxFees = 50;
   } else if (this.filters.fees.from50To100) {
     activeFilters.maxFees = 100;
   }else if (this.filters.fees.from100To200) {
    activeFilters.maxFees = 200;
  }else if (this.filters.fees.from200To300) {
    activeFilters.maxFees = 300;
  }else if (this.filters.fees.greaterThan300) {
    activeFilters.maxFees = 301;
  }
 }

 this.filtersChanged.emit(activeFilters);
}
  
}
