

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';

@Component({
  selector: 'app-dental-care',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './dental-care.component.html',
  styleUrl: './dental-care.component.css'
})
export class DentalCareComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 30,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520220816112526859.png',
      title: 'BFM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 5,
      reviewCount: 3,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 600,
      offersLink: `/offers/1`,

    },
    {
      id: 2,
      discount: 40,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240904190900098.png',
      title: 'Hollywood Smile with Veneers',
      description: '10 Tooth Hollywood Smile with Veneers',
      rating: 5,
      reviewCount: 5,
      bookedCount: 3,
      originalPrice: 40000,
      discountPrice: 20000,
      offersLink: `/offers/1`,

    },
    {
      id: 3,
      discount: 50,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240808112857341.png',
      title: 'Gingvectomy by laser',
      description: '1 Session Gum cuts with laser without pain',
      rating: 5,
      reviewCount: 40,
      bookedCount: 3,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/1`,

    },
    {
      id: 4,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520190611133713351.png',
      title: 'Gum cuts with laser without pain',
      description: '1 Session Gum cuts with laser without pain',
      rating: 5,
      reviewCount: 12,
      bookedCount: 58,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/1`,

    },
    {
      id: 5,
      discount: 50,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250308112520326.png',
      title: 'Shine Bright like Hollywood Stars',
      description: '1 Tooth Hollywood Smile with Veneers',
      rating: 5,
      reviewCount: 0,
      bookedCount: 0,
      originalPrice: 5500,
      discountPrice: 1100,
      offersLink: `/offers/1`,

    },
    {
      id: 6,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250405130829254.png',
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
      id: 7,
      discount: 40,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240516111420583.png',
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
      id: 8,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240704110947949.png',
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
      id: 9,
      discount: 40,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520191117102438757.png',
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
      id: 10,
      discount: 50,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520231029125936205.png',
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
      id: 11,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240718072628020.png',
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
      id: 12,
      discount: 50,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250219223049885.png',
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
      id: 13,
      discount: 33,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520191117102438757.png',
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
      id: 14,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240704110947949.png',
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
      id: 15,
      discount: 50,
      image: 'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520201130182303298.png',
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
      id: 16,
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
      id: 17,
      discount: 50,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520201130182303298.png',
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
      id: 18,
      discount: 50,
      image: 'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250405130829254.png',
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
      id: 19,
      discount: 33,
      image:
        'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-136/images/offers/metal_braces/desktop.webp',
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
      id: 20,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520201130182303298.png',
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
      id: 21,
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
      id: 22,
      discount: 50,
      image: 'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250405130829254.png',
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
      id: 23,
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
      id: 24,
      discount: 33,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240124173020270.png',
      title: 'Zircon crown installation',
      description: '1 Crown Crown Installation',
      rating: 3.5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/1`,

    },


  ];
}


