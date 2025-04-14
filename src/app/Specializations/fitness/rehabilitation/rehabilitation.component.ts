
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-rehabilitation',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './rehabilitation.component.html',
  styleUrl: './rehabilitation.component.css'
})
export class RehabilitationComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 40,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/teeth_cleaning/desktop.webp',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/1`,

    },
    {
      id: 2,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/facial_cleansing/desktop.webp',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 900,
      offersLink: `/offers/1`,

    },
    {
      id: 3,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/metal_braces/desktop.webp',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 4,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/face_peeling/desktop.webp',
      title: 'BPM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 3,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 1400,
      offersLink: `/offers/1`,

    },
    {
      id: 5,
      discount: 33,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/laser_hair_removal/desktop.webp',
      title: 'Zircon crown installation',
      description: '1 Crown Crown Installation',
      rating: 5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 6,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/body_sculpting_and_fats_dissolving/desktop.webp',
      title: 'Hollywood Smile with Diremposite Veneer',
      description: '1 Tooth Hollywood Smile with Direct Composite Veneer',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 7,
      discount: 40,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/teeth_cleaning/desktop.webp',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 4,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/1`,

    },
    {
      id: 8,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/facial_cleansing/desktop.webp',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 900,
      offersLink: `/offers/1`,

    },
    {
      id: 9,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/metal_braces/desktop.webp',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 10,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/face_peeling/desktop.webp',
      title: 'BPM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 5,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 1400,
      offersLink: `/offers/1`,

    },
    {
      id: 11,
      discount: 33,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/laser_hair_removal/desktop.webp',
      title: 'Zircon crown installation',
      description: '1 Crown Crown Installation',
      rating: 3.5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 12,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/body_sculpting_and_fats_dissolving/desktop.webp',
      title: 'Hollywood Smile with Diremposite Veneer',
      description: '1 Tooth Hollywood Smile with Direct Composite Veneer',
      rating: 4.55,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },

    {
      id: 13,
      discount: 40,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/teeth_cleaning/desktop.webp',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 3.95,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/1`,

    },
    {
      id: 14,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/facial_cleansing/desktop.webp',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.85,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 900,
      offersLink: `/offers/1`,

    },
    {
      id: 15,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/metal_braces/desktop.webp',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 4.05,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 16,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/face_peeling/desktop.webp',
      title: 'BPM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 3.95,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 1400,
      offersLink: `/offers/1`,

    },
    {
      id: 17,
      discount: 33,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/laser_hair_removal/desktop.webp',
      title: 'Zircon crown installation',
      description: '1 Crown Crown Installation',
      rating: 3,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 18,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/body_sculpting_and_fats_dissolving/desktop.webp',
      title: 'Hollywood Smile with Diremposite Veneer',
      description: '1 Tooth Hollywood Smile with Direct Composite Veneer',
      rating: 3.7,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 19,
      discount: 40,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/teeth_cleaning/desktop.webp',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 2.5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/1`,

    },
    {
      id: 20,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/facial_cleansing/desktop.webp',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 900,
      offersLink: `/offers/1`,

    },
    {
      id: 21,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/metal_braces/desktop.webp',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 22,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/face_peeling/desktop.webp',
      title: 'BPM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 1400,
      offersLink: `/offers/1`,

    },
    {
      id: 23,
      discount: 33,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/laser_hair_removal/desktop.webp',
      title: 'Zircon crown installation',
      description: '1 Crown Crown Installation',
      rating: 5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 24,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/body_sculpting_and_fats_dissolving/desktop.webp',
      title: 'Hollywood Smile with Diremposite Veneer',
      description: '1 Tooth Hollywood Smile with Direct Composite Veneer',
      rating: 5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 25,
      discount: 40,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/teeth_cleaning/desktop.webp',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/1`,

    },
    {
      id: 26,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/facial_cleansing/desktop.webp',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 900,
      offersLink: `/offers/1`,

    },
    {
      id: 27,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/metal_braces/desktop.webp',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 28,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/face_peeling/desktop.webp',
      title: 'BPM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 5,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 1400,
      offersLink: `/offers/1`,

    },
    {
      id: 29,
      discount: 33,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/laser_hair_removal/desktop.webp',
      title: 'Zircon crown installation',
      description: '1 Crown Crown Installation',
      rating: 5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 30,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/body_sculpting_and_fats_dissolving/desktop.webp',
      title: 'Hollywood Smile with Diremposite Veneer',
      description: '1 Tooth Hollywood Smile with Direct Composite Veneer',
      rating: 5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 31,
      discount: 40,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/teeth_cleaning/desktop.webp',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/1`,

    },
    {
      id: 32,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/facial_cleansing/desktop.webp',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 900,
      offersLink: `/offers/1`,

    },
    {
      id: 33,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/metal_braces/desktop.webp',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 34,
      discount: 50,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/face_peeling/desktop.webp',
      title: 'BPM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 5,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 1400,
      offersLink: `/offers/1`,

    },
    {
      id: 35,
      discount: 33,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/laser_hair_removal/desktop.webp',
      title: 'Zircon crown installation',
      description: '1 Crown Crown Installation',
      rating: 5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
    {
      id: 36,
      discount: 20,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/body_sculpting_and_fats_dissolving/desktop.webp',
      title: 'Hollywood Smile with Diremposite Veneer',
      description: '1 Tooth Hollywood Smile with Direct Composite Veneer',
      rating: 5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },
  ];
}


