
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-face-chin',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './face-chin.component.html',
  styleUrls: ['./face-chin.component.css'],
})
export class FaceChinComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240129084212886.png',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/11`,

    },
    {
      id: 2,
      discount: 50,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/50668362620250318151024835.png',
      title: 'BPM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 3,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 1400,
      offersLink: `/offers/18`,

    },
    {
      id: 3,
      discount: 33,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250121115348302.png',
      title: 'Zircon crown installation',
      description: '1 Crown Crown Installation',
      rating: 5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/20`,

    },
    {
      id: 4,
      discount: 40,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/50668362620241126100924459.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/18`,
    },
    {
      id: 5,
      discount: 50,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241126093019729.png',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 900,
      offersLink: `/offers/18`,
    },
    
  ];
}



