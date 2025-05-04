import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NewDoctorServiceService } from '../../../services/new-doctor-service.service';
@Component({
  selector: 'app-reviews-doctors',
  imports:
   [MatIconModule, CommonModule],
  templateUrl: './reviews-doctors.component.html',
  styleUrl: './reviews-doctors.component.css'
})
export class ReviewsDoctorsComponent  implements OnInit {
  reviews: any[] = [];

  constructor(private doctorService: NewDoctorServiceService) {}

  ngOnInit(): void {
    const doctorId = localStorage.getItem('doctorId');
    if (doctorId) {
      this.doctorService.getFeedbackByDoctorId(+doctorId).subscribe({
        next: (data) => {
          this.reviews = data;
        },
        error: (err) => {
          console.error('Error fetching feedback', err);
        }
      });
    } else {
      console.error("Doctor ID not found in local storage");
    }
  }

  currentPage = 1;
pageSize = 5;

get pagedReviews() {
  const start = (this.currentPage - 1) * this.pageSize;
  return this.reviews.slice(start, start + this.pageSize);
}

get totalPages() {
  return Math.ceil(this.reviews.length / this.pageSize);
}

changePage(page: number) {
  this.currentPage = page;
}


}
