import { Component, inject } from '@angular/core';
import { BookRequestService } from '../services/book-request.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
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
  //search by doctor name
  searchDoctorName() {
    console.log('Searching by doctor name', this.doctorName);
  
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
        console.error('Error fetching data when getting doctor name', error);
      }
    );
  }
  searchByFilters() {
    this.bookService
      .getBookingData(this.selectedSpecialty, this.selectedCity, this.selectedGovernorate)
      .subscribe(
        (response: any[]) => {
          // بدل عرضهم هنا، نروح على الكومبوننت الجديدة ونبعت البيانات
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
          console.error('error at getting data', error);
        }
      );
  }
  //search by filters: specialty, city, governorate
  // searchByFilters() {
  //   console.log('search for doctor', {
  //     specialty: this.selectedSpecialty,
  //     city: this.selectedCity,
  //     governorate: this.selectedGovernorate,
  //   });
  //   //get new data based on the inputs from the API
  //   this.bookService
  //     .getBookingData(
  //       this.selectedSpecialty,
  //       this.selectedCity,
  //       this.selectedGovernorate
  //     )
  //     .subscribe(
  //       (response: any[]) => {
  //         this.doctors = response.filter((doc) =>
  //           this.doctorName
  //             ? doc.doctorName
  //                 .toLowerCase()
  //                 .includes(this.doctorName.toLowerCase())
  //             : true
  //         );
  //         this.doctors = this.doctors.filter(
  //           (doc) =>
  //             (this.selectedSpecialty
  //               ? doc.mainSpecialty === this.selectedSpecialty
  //               : true) &&
  //             (this.selectedCity ? doc.city === this.selectedCity : true) &&
  //             (this.selectedGovernorate
  //               ? doc.governorate.trim() === this.selectedGovernorate.trim()
  //               : true)
  //         );

  //         console.log('Results after search', this.doctors);
  //       },
  //       (error) => {
  //         console.error('error at getting data', error);
  //       }
  //     );
  // }
  //get data from the API
  ngOnInit() {
    this.doctorService.getDoctors().subscribe(
      (response: any[]) => {
        // response is an array
        this.doctors = response;
        //extract data without repetition and specify the type to string[]
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
