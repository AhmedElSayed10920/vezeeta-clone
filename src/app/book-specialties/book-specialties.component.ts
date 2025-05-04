import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-specialties',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-specialties.component.html',
  styleUrls: ['./book-specialties.component.css'],
})
export class BookSpecialtiesComponent implements OnInit {
  specialties = [
    {
      id: 1,
      title: 'Skin',
      image: '/images/offerImage/75.png',
      specialistName:'/skin'
    },
    {
      id: 2,
      title: 'Teeth',
      image: '/images/offerImage/76.png',
      specialistName:'/dentalCare'
    },
    {
      id: 3,
      title: 'Mental, Emotional or Behavioral Disorders',
      image: '/images/offerImage/77.png',
      specialistName:'/psychiatry'
    },
    {
      id: 4,
      title: 'Child',
      image: '/images/offerImage/78.png',
      specialistName:'/children'
    },
    {
      id: 5,
      title: 'Brain & Nerves',
      image: '/images/offerImage/79.png',
      specialistName:'/scans'
    },
    {
      id: 6,
      title: 'Bones',
      image: '/images/offerImage/80.png',
      specialistName:'/rehabilitation'
    },
    {
      id: 7,
      title: 'Gynecology and Infertility',
      image: '/images/offerImage/81.png',
      specialistName:'/obGyn'
    },
  ];

  currentIndex = 0;
  visibleSpecialties: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateVisibleSpecialties();
  }

  updateVisibleSpecialties() {
    this.visibleSpecialties = this.specialties.slice(this.currentIndex, this.currentIndex + 4);
  }

  nextSlide() {
    if (this.currentIndex + 1 < this.specialties.length) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
    }
    this.updateVisibleSpecialties();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    } else {
      this.currentIndex = Math.max(0, this.specialties.length - 4);
    }
    this.updateVisibleSpecialties();
  }

  // navigateToSpecialtyDetails(specialtyId: number) {
  //   this.router.navigate(['/specialty-details', specialtyId]);
  // }
}