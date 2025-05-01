// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-trending-now',
//   imports: [],
//   templateUrl: './trending-now.component.html',
//   styleUrl: './trending-now.component.css'
// })
// export class TrendingNowComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trending-now',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trending-now.component.html',
  styleUrls: ['./trending-now.component.css'],
})
export class TrendingNowComponent {
  offers = [
    {
      id: 1,
      title: 'Scaling and Polishing',
      offerLink: '/offers/15',
      description: '1 Session Scaling and Polishing',
      originalPrice: 1600,
      price: 960,
      discount: 40,
      image:
        '/images/offerImage/15.png',
    },
    {
      id: 2,
      title: 'Laser hair removal Face',
      offerLink: '/offers/24',
      description: '1 Session Face Laser hair removal',
      originalPrice: 1900,
      price: 1520,
      discount: 20,
      image:
        '/images/offerImage/24.png',
    },
    {
      id: 3,
      title: 'Metal Braces',
      offerLink: '/offers/14',
      description: '1 Session Laser teeth whitening',
      originalPrice: 1600,
      price: 1280,
      discount: 20,
      image:
        '/images/offerImage/14.png',
    },
    {
      id: 4,
      title: 'Face Peeling',
      offerLink: '/offers/25',
      description: '1 Session Face laser hair removal',
      originalPrice: 1000,
      price: 750,
      discount: 25,
      image:
        '/images/offerImage/25.png',
    },
    {
      id: 5,
      title: 'Legs Laser Hair Removal',
      offerLink: '/offers/21',
      description: '1 Session Legs Laser Hair Removal',
      originalPrice: 2000,
      price: 1600,
      discount: 20,
      image:
        '/images/offerImage/21.png',
    },
    {
      id: 6,
      title: 'Carboxy - Injection For Lipolysis',
      offerLink: '/offers/51',
      description: '4 Injection session Lipodissolve',
      originalPrice: 2000,
      price: 1000,
      discount: 50,
      image:
        '/images/offerImage/45.png',
    },
    {
      id: 7,
      title: 'cold peeling to face or sensitive area',
      description: '3 Session Face peeling',
      offerLink: '/offers/35',
      originalPrice: 3000,
      price: 2400,
      discount: 20,
      image:
        '/images/offerImage/35.png',
    },
    {
      id: 8,
      title: 'Resistant scar treatment',
      description: '1 Session Mesotherapy for face',
      offerLink: '/offers/36',
      originalPrice: 6000,
      price: 3000,
      discount: 50,
      image:
      '/images/offerImage/36.png',
    },
    {
      id: 9,
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      offerLink: '/offers/13',
      originalPrice: 1600,
      price: 800,
      discount: 50,
      image: '/images/offerImage/13.png',
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
