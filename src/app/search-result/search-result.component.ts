import { Component } from '@angular/core';
import { Filters, FiltersSidebarComponent } from '../filters-sidebar/filters-sidebar.component';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import { DoctorListComponent } from '../doctor-list/doctor-list.component';

@Component({
  selector: 'app-search-result',
  imports: [SearchHeaderComponent,FiltersSidebarComponent,DoctorListComponent],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
selectedFilters!: Filters;

  onFiltersChanged(filters: Filters) {
    this.selectedFilters = filters;
    console.log('Filters applied:', this.selectedFilters);
    // Pass the filters to the doctor-list component or use them to filter the doctor list
  }
}
