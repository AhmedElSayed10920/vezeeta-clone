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
      offerLink: '/offers/1',
      description: '1 Session Scaling and Polishing',
      originalPrice: 1000,
      price: 600,
      discount: 40,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/teeth_cleaning/desktop.webp',
    },
    {
      id: 2,
      title: 'Facial Cleansing',
      offerLink: '/offers/1',
      description: '1 Session Scaling and Polishing',
      originalPrice: 800,
      price: 400,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/facial_cleansing/desktop.webp',
    },
    {
      id: 3,
      title: 'Metal Braces',
      offerLink: '/offers/1',
      description: '1 Session Scaling and Polishing',
      originalPrice: 15000,
      price: 12000,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/metal_braces/desktop.webp',
    },
    {
      id: 4,
      title: 'Face Peeling',
      offerLink: '/offers/1',
      description: '1 Session Scaling and Polishing',
      originalPrice: 500,
      price: 250,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/face_peeling/desktop.webp',
    },
    {
      id: 5,
      title: 'Hair Removal',
      offerLink: '/offers/1',
      description: '1 Session Scaling and Polishing',
      originalPrice: 1200,
      price: 800,
      discount: 33,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/laser_hair_removal/desktop.webp',
    },
    {
      id: 6,
      title: 'Skin Whitening',
      offerLink: '/offers/1',
      description: '1 Session Scaling and Polishing',
      originalPrice: 2500,
      price: 2000,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/body_sculpting_and_fats_dissolving/desktop.webp',
    },
    {
      id: 7,
      title: 'Acne Treatment',
      offerLink: '/offers/1',
      description: '1 Session Scaling and Polishing',
      originalPrice: 1800,
      price: 1500,
      discount: 16,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/vision_correction/desktop.webp',
    },
    {
      id: 8,
      title: 'Acne Treatment',
      offerLink: '/offers/1',
      description: '1 Session Scaling and Polishing',
      originalPrice: 1800,
      price: 1500,
      discount: 16,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/vision_correction/desktop.webp',
    },
    {
      id: 9,
      title: 'Acne Treatment',
      offerLink: '/offers/1',
      description: '1 Session Scaling and Polishing',
      originalPrice: 1800,
      price: 1500,
      discount: 16,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/vision_correction/desktop.webp',
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
