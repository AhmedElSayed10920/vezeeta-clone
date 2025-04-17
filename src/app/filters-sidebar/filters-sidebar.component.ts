import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters-sidebar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filters-sidebar.component.html',
  styleUrls: ['./filters-sidebar.component.css']
})
export class FiltersSidebarComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  sections = {
    degree: true,
    gender: true,
    fees: true
  };

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

  toggleSection(section: keyof typeof this.sections) {
    this.sections[section] = !this.sections[section];
  }

  applyFilters() {
    const activeFilters: any = {};

    const selectedDegrees = Object.keys(this.filters.degree)
      .filter(k => this.filters.degree[k as keyof typeof this.filters.degree]);
    if (selectedDegrees.length > 0) {
      activeFilters.degree = selectedDegrees;
    }

    if (this.filters.gender) {
      activeFilters.gender = this.filters.gender;
    }

    if (this.filters.fees.any) {
      activeFilters.fees = 'any';
    } else {
      const feeRanges: string[] = [];
      if (this.filters.fees.lessThan50) feeRanges.push('lessThan50');
      if (this.filters.fees.from50To100) feeRanges.push('from50To100');
      if (this.filters.fees.from100To200) feeRanges.push('from100To200');
      if (this.filters.fees.from200To300) feeRanges.push('from200To300');
      if (this.filters.fees.greaterThan300) feeRanges.push('greaterThan300');
      if (feeRanges.length) {
        activeFilters.fees = feeRanges;
      }
    }

    this.filtersChanged.emit(activeFilters);
  }
}
