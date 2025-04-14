import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppointmentReservationComponent } from "../appointment-reservation/appointment-reservation.component";
import { ImageService } from '../shared/image.service';
import { BookRequestService } from '../services/book-request.service';
import { filter } from 'rxjs';
import { FiltersSidebarComponent } from '../filters-sidebar/filters-sidebar.component';
import { DoctorService } from '../services/doctor.service';
import { Filters } from '../models/filters';

@Component({
  selector: 'app-doctors-list',
  standalone: true,
  imports: [CommonModule, AppointmentReservationComponent,FiltersSidebarComponent],
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.css',
})
export class DoctorsListComponent {

  @Input() filters!: Filters;
  doctors: any[] = [];
  loading = false;
  route = inject(ActivatedRoute);
  router = inject(Router);
  imageService = inject(ImageService);
  bookRequestService = inject(BookRequestService);
  

  constructor(
    private doctorService: DoctorService,
    
  ) {}

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['filters']) {
  //     this.loadDoctors();
  //   }
  // }

  loadDoctors(filters: Filters) {
    this.loading = true;
    this.doctorService.getDoctorsWithFilters(this.filters).subscribe({
      next: (doctors) => {
        this.doctors = doctors;
        this.loading = false;
        this.updateUrlWithFilters();
      },
      error: (err) => {
        console.error('Error loading doctors:', err);
        this.loading = false;
      }
    });
  }

  private updateUrlWithFilters() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.filters,
      queryParamsHandling: 'merge'
    });
  }

 
  
  

  getDoctorImage(doctorId: number): string {
    return this.imageService.getImagePath(doctorId.toString());
  }

  ngOnInit() {
    // Load initial data based on route params
    this.route.queryParams.subscribe(params => {
      if (params['doctors']) {
        this.doctors = JSON.parse(params['doctors']);
      } else {
        this.loadDoctors({});
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filters'] && !changes['filters'].firstChange) {
      this.loadDoctors(this.filters);
    }
  }

 
  // private loadDoctors(filters: Filters) {
  //   this.loading = true;
  
  //   this.bookRequestService.getDoctorsWithFilters(filters).subscribe({
  //     next: (res) => {
  //       this.doctors = res;
  //       this.loading = false;
  //     },
  //     error: (err) => {
  //       console.error('Error loading doctors:', err);
  //       this.loading = false;
  //     }
  //   });
  // }
  
}





