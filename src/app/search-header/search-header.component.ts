import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookRequestService } from '../services/book-request.service';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-header',
  imports: [CommonModule,FormsModule,],
  templateUrl: './search-header.component.html',
  styleUrl: './search-header.component.css'
})
export class SearchHeaderComponent {
 
    bookService = inject(BookRequestService);
    doctorService = inject(DoctorService);
    router = inject(Router);
    doctors: any[] = [];
    specialties: string[] = [];
    cities: string[] = [];
    governorates: string[] = [];
  
    selectedSpecialty: string = '';
    selectedCity: string = '';
    selectedGovernorate: string = '';
    doctorName: string = '';
  
    search() {
      if (this.doctorName) {
        this.searchDoctorName();
      } else {
        this.searchByFilters();
      }
    }
    searchDoctorName() {
      this.bookService.searchByName(this.doctorName).subscribe(
        (response: any[]) => {
          this.doctors = response;
          console.log('Results after searching by doctor name', this.doctors);
          this.router.navigate(['/search'], {
            queryParams: {
              doctors: JSON.stringify(response),
            },
          });
        },
  
        (error) => {
          if (error.status === 404) {
            this.router.navigate(['/no-doctors']);
          }
        }
      );
    }
    searchByFilters() {
      this.bookService
        .getBookingData(this.selectedSpecialty, this.selectedGovernorate , this.selectedCity, )
        .subscribe(
          (response: any[]) => {
            console.log({
              response
            });
            this.router.navigate(['/search'], {
              queryParams: {
                doctors: JSON.stringify(response),
              },
            });
          },
          (error) => {
            if (error.status === 404) {
              this.router.navigate(['/no-doctors']);
            }
          }
        );
    }
  ngOnInit() {
    this.doctorService.getDoctors().subscribe(
      (response: any[]) => {
        this.doctors = response;
        this.specialties = Array.from(
          new Set(response.map((doc) => doc.mainSpecialty as string))
        );
        this.cities = Array.from(
          new Set(response.map((doc) => doc.city as string))
        );
        this.governorates = Array.from(
          new Set(response.map((doc) => doc.governorate as string))
        );
      },

      (error) => {
        console.error('error fetching data', error);
      }
    );
  }
}
