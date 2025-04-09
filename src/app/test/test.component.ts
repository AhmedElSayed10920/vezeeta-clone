import { Component, inject } from '@angular/core';
import { Filters } from '../filters-sidebar/filters-sidebar.component'; // المسار حسب مكان الملف

import { BookRequestService } from '../services/book-request.service';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import { FiltersSidebarComponent } from '../filters-sidebar/filters-sidebar.component';
import { DoctorListComponent } from '../doctor-list/doctor-list.component';

@Component({
  selector: 'app-test',
  imports: [SearchHeaderComponent,FiltersSidebarComponent,DoctorListComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  
  selectedFilters!: Filters;

  onFiltersChanged(filters: Filters) {
    this.selectedFilters = filters;
    console.log('Filters applied:', this.selectedFilters);
    // Pass the filters to the doctor-list component or use them to filter the doctor list
  }
}
