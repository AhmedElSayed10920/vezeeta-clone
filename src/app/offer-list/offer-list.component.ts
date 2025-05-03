import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css'],
})
export class OfferListComponent {
  offers = [
    {
      id: 4,
      title: 'Face Peeling',
      SpecializationLink: '/offers/25',
      originalPrice: 1000,
      price: 750,
      discount: 25,
      image:
      '/images/offerImage/25.png',
      offersCount: 4,
    },
    {
      id: 5,
      title: 'Legs Laser Hair Removal',
      SpecializationLink: '/offers/21',
      originalPrice: 2000,
      price: 1600,
      discount: 20,
      image:
      '/images/offerImage/21.png',
      offersCount: 2,
    },
    {
      id: 6,
      title: 'Injection For Lipolysis',
      SpecializationLink: '/offers/51',
      originalPrice: 2000,
      price: 1000,
      discount: 50,
      image:
      '/images/offerImage/45.png',
      offersCount: 13,
    },
    {
      id: 9,
      title: 'Composite white filling',
      SpecializationLink: '/offers/13',
      originalPrice: 1600,
      price: 800,
      discount: 50,
      image: '/images/offerImage/13.png',
      offersCount: 20,
    },
    {
      id: 2,
      title: 'Laser hair removal Face',
      SpecializationLink: '/offers/24',
      originalPrice: 1900,
      price: 1520,
      discount: 20,
      image:
        '/images/offerImage/24.png',
      offersCount: 6,
    },
    {
      id: 3,
      title: 'Metal Braces',
      SpecializationLink: '/offers/14',
      originalPrice: 1600,
      price: 1280,
      discount: 20,
      image:
        '/images/offerImage/14.png',
      offersCount: 4,
    },
    {
      id: 7,
      title: 'cold peeling to face',
      SpecializationLink: '/offers/35',
      originalPrice: 3000,
      price: 2400,
      discount: 20,
      image:
        '/images/offerImage/35.png',
      offersCount: 5,
    },
    {
      id: 8,
      title: 'Resistant scar treatment',
      SpecializationLink: '/offers/36',
      originalPrice: 6000,
      price: 3000,
      discount: 50,
      image:
        '/images/offerImage/36.png',
      offersCount: 15,
    },

  ];

  currentIndex = 0;
  visibleOffers = this.offers.slice(0, 4);

  constructor(private router: Router) { }

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
    if (this.currentIndex + 1 < this.offers.length) {
      this.currentIndex += 1;
      this.updateVisibleOffers();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.updateVisibleOffers();
    }
  }

  goToDetails(offerId: number) {
    this.router.navigate(['/offer-details', offerId]);
  }
}
