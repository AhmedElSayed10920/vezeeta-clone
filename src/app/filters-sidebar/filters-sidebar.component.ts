import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../doctor';
import { DoctorService } from '../services/doctor.service';
import { Filters } from '../models/filters';

@Component({
  selector: 'app-filters-sidebar',
  imports: [FormsModule, CommonModule],
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



  // توسيع أو تصغير الأقسام
  toggleSection(section: keyof typeof this.sections) {
    this.sections[section] = !this.sections[section];
  }



  applyFilters() {
    const activeFilters: any = {};

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
      } else if (this.filters.fees.from100To200) {
        activeFilters.maxFees = 200;
      } else if (this.filters.fees.from200To300) {
        activeFilters.maxFees = 300;
      } else if (this.filters.fees.greaterThan300) {
        activeFilters.maxFees = 301;
      }
    }

    this.filtersChanged.emit(activeFilters);
  }

}
