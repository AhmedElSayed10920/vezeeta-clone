import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Filters, FiltersSidebarComponent } from '../filters-sidebar/filters-sidebar.component';
import { SearchHeaderComponent } from '../search-header/search-header.component';
// import { DoctorListComponent } from '../doctor-list/doctor-list.component';
import { AllDoctorsComponent } from '../all-doctors/all-doctors.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  imports: [SearchHeaderComponent,AllDoctorsComponent],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnInit{
  // selectedFilters: Filters = { specialty: '', city: '', governorate: '', name: '' };
  selectedFilters: Filters = {
    specialty: '',
    city: '',
    governorate: '',
    name: '',
    title: {
      professor: false,
      lecturer: false,
      consultant: false,
      specialist: false
    },
    // subSpecialties: {
    //   newBorn: false,
    //   pediatricAllergy: false
    // },
    gender: '',
   
    fees: {
      any: 0,
      lessThan50: 0,
      from50To100: 0,
      from100To200: 0,
      from200To300: 0,
      greaterThan300: 0
    }
  };
  
  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedFilters = {
        specialty: params['specialty'] || '',
        city: params['city'] || '',
        governorate: params['governorate'] || '',
        name: params['name'] || '',
        // title: {
        //   professor: false,
        //   lecturer: false,
        //   consultant: false,
        //   specialist: false
        // },
        // subSpecialties: {
        //   newBorn: false,
        //   pediatricAllergy: false
        // },
        // gender: '',
       
        // fees: {
        //   any: 0,
        //   lessThan50: 0,
        //   from50To100: 0,
        //   from100To200: 0,
        //   from200To300: 0,
        //   greaterThan300: 0
        // }
      };
      console.log('Filters in SearchResultComponent:', this.selectedFilters);
      this.cdr.detectChanges(); // Force UI update
    });
  }

  // onFiltersChanged(filters: Filters) {
  //   this.selectedFilters = { ...filters };
  //   console.log('Sidebar filters applied:', this.selectedFilters);
  //   this.cdr.detectChanges(); // Force UI update
  // }



// selectedFilters!: Filters;
// constructor(private route: ActivatedRoute) {}

// ngOnInit(): void {
//   // استقبال الفلاتر من queryParams
//   this.route.queryParams.subscribe(params => {
//     this.selectedFilters = {
//       specialty: params['specialty'] || '',
//       city: params['city'] || '',
//       governorate: params['governorate'] || '',
//       name: params['name'] || ''
//     } as any;
//     console.log('Filters received in SearchResultComponent:', this.selectedFilters);
//   });
// }

//   onFiltersChanged(filters: Filters) {
//     this.selectedFilters = filters;
//     console.log('Filters applied:', this.selectedFilters);
//     // Pass the filters to the doctor-list component or use them to filter the doctor list
//   }
}
