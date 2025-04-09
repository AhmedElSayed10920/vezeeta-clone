import { Component, Input } from '@angular/core';
import { FiltersSidebarComponent } from '../filters-sidebar/filters-sidebar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// نفس نوع الفلاتر من FiltersSidebarComponent
interface Filters {
  title: {
    professor: boolean;
    lecturer: boolean;
    consultant: boolean;
    specialist: boolean;
  };
  subSpecialties: {
    newBorn: boolean;
    pediatricAllergy: boolean;
  };
  gender: string;
  availability: {
    today: boolean;
    tomorrow: boolean;
  };
}

interface Doctor {
  name: string;
  title: string;
  subSpecialties: string[];
  gender: string;
  availableToday: boolean;
  availableTomorrow: boolean;
}

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [FiltersSidebarComponent,CommonModule,FormsModule],
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
  @Input() filters!: Filters;
  doctors: Doctor[] = [
    {
      name: 'Dr. Ahmed Ali',
      title: 'professor',
      subSpecialties: ['newBorn'],
      gender: 'male',
      availableToday: true,
      availableTomorrow: false
    },
    {
      name: 'Dr. Mona Hassan',
      title: 'consultant',
      subSpecialties: ['pediatricAllergy'],
      gender: 'female',
      availableToday: false,
      availableTomorrow: true
    },
    // ... add more doctors
  ];

  filteredDoctors: Doctor[] = [...this.doctors];

  // filters: Filters | null = null;

  onFiltersChanged(newFilters: Filters) {
    this.filters = newFilters;
    this.applyFilters();
  }

  applyFilters() {
    if (!this.filters) {
      this.filteredDoctors = [...this.doctors];
      return;
    }

    this.filteredDoctors = this.doctors.filter(doc => {
      // Title
      const titleMatch = this.filters!.title[doc.title as keyof Filters['title']];

      // SubSpecialty
      const subMatch = Object.entries(this.filters!.subSpecialties).some(
        ([sub, isChecked]) => isChecked && doc.subSpecialties.includes(sub)
      ) || !Object.values(this.filters!.subSpecialties).some(v => v); // Allow all if none selected

      // Gender
      const genderMatch = !this.filters!.gender || doc.gender === this.filters!.gender;

      // Availability
      const todayMatch = this.filters!.availability.today ? doc.availableToday : true;
      const tomorrowMatch = this.filters!.availability.tomorrow ? doc.availableTomorrow : true;

      return titleMatch && subMatch && genderMatch && todayMatch && tomorrowMatch;
    });
  }
}
