import { Component } from '@angular/core';
import { FiltersSidebarComponent } from '../filters-sidebar/filters-sidebar.component';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import { DoctorsListComponent } from '../doctors-list/doctors-list.component';
import { Filters } from '../models/filters';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [SearchHeaderComponent, DoctorsListComponent, FiltersSidebarComponent],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  filters: Filters = {};  // Start with an empty filter object

  // This function will be called when filters change from the sidebar
  onFiltersChanged(filters: Filters) {
    console.log('Received filters:', filters);
    this.filters = filters;  // Update the filters with the received data
  }
}
