import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css'],
})
export class OfferListComponent {
  offers = [
    {
      id: 1,
      title: 'Teeth Cleaning',
      SpecializationLink: '/whitening',
      originalPrice: 1000,
      price: 600,
      discount: 40,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/teeth_cleaning/desktop.webp',
      offersCount: 160,
    },
    {
      id: 2,
      title: 'Facial Cleansing',
      SpecializationLink: '/laser',
      originalPrice: 800,
      price: 400,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/facial_cleansing/desktop.webp',
      offersCount: 68,
    },
    {
      id: 3,
      title: 'Metal Braces',
      SpecializationLink: '/dentalCare',
      originalPrice: 15000,
      price: 12000,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/metal_braces/desktop.webp',
      offersCount: 10,
    },
    {
      id: 4,
      title: 'Face Peeling',
      SpecializationLink: '/skinPeeling',
      originalPrice: 500,
      price: 250,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/face_peeling/desktop.webp',
      offersCount: 10,
    },
    {
      id: 5,
      title: 'Hair Removal',
      SpecializationLink: '/hairRemoval',
      originalPrice: 1200,
      price: 800,
      discount: 33,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/laser_hair_removal/desktop.webp',
      offersCount: 50,
    },
    {
      id: 6,
      title: 'Skin Whitening',
      SpecializationLink: '/skin',
      originalPrice: 2500,
      price: 2000,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/body_sculpting_and_fats_dissolving/desktop.webp',
      offersCount: 30,
    },
    {
      id: 7,
      title: 'Acne Treatment',
      SpecializationLink: '/acneScarsTreatment',
      originalPrice: 1800,
      price: 1500,
      discount: 16,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/vision_correction/desktop.webp',
      offersCount: 25,
    },
  ];

  currentIndex = 0;
  visibleOffers = this.offers.slice(0, 4);

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateVisibleOffers();
  }

  updateVisibleOffers() {
    this.visibleOffers = this.offers.slice(
      this.currentIndex,
      this.currentIndex + 4
    );
  }

  nextSlide() {
    if (this.currentIndex + 4 < this.offers.length) {
      this.currentIndex += 4;
      this.updateVisibleOffers();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 4;
      this.updateVisibleOffers();
    }
  }

  goToDetails(offerId: number) {
    this.router.navigate(['/offer-details', offerId]);
  }
}
