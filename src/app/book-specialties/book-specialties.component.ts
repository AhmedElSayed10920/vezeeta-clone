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
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/dermatology/eg/desktop.webp',
      specialistName:'/skin'
    },
    {
      id: 2,
      title: 'Teeth',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/dentistry/eg/desktop.webp',
      specialistName:'/dentalCare'
    },
    {
      id: 3,
      title: 'Mental, Emotional or Behavioral Disorders',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/psychiatry/eg/desktop.webp',
      specialistName:'/psychiatry'
    },
    {
      id: 4,
      title: 'Child',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/pediatrics-and-new-born/eg/desktop.webp',
      specialistName:'/children'
    },
    {
      id: 5,
      title: 'Brain & Nerves',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/neurology/eg/desktop.webp',
      specialistName:'/scans'
    },
    {
      id: 6,
      title: 'Bones',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/orthopedics/eg/desktop.webp',
      specialistName:'/laser'
    },
    {
      id: 7,
      title: 'Gynecology and Infertility',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/gynaecology-and-infertility/eg/desktop.webp',
      specialistName:'/beauty'
    },
    {
      id: 8,
      title: 'Ear, Nose and Throat',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/ear-nose-and-throat/eg/desktop.webp',
      specialistName:'/children'
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
    if (this.currentIndex + 4 < this.specialties.length) {
      this.currentIndex += 4;
    } else {
      this.currentIndex = 0;
    }
    this.updateVisibleSpecialties();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 4;
    } else {
      this.currentIndex = Math.max(0, this.specialties.length - 4);
    }
    this.updateVisibleSpecialties();
  }

  navigateToSpecialtyDetails(specialtyId: number) {
    this.router.navigate(['/specialty-details', specialtyId]);
  }
}