import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FiltersSidebarComponent } from '../filters-sidebar/filters-sidebar.component';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import { ActivatedRoute } from '@angular/router';
import { DoctorsListComponent } from '../doctors-list/doctors-list.component';
import { Filters } from '../models/filters';

@Component({
  selector: 'app-search-result',
  imports: [SearchHeaderComponent,DoctorsListComponent,FiltersSidebarComponent],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})

// export class SearchResultComponent {
 
// filters: any = {};

// onFiltersChanged(updatedFilters: any) {
//   this.filters = updatedFilters;
//   console.log('Updated filters:', this.filters);
// }

// }
export class SearchResultComponent {
  filters: Filters = {};

  onFiltersChanged(updatedFilters: Filters) {
    this.filters = updatedFilters;
    console.log('Updated filters:', this.filters);
  }
}



