import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-skin-glow',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './skin-glow.component.html',
  styleUrl: './skin-glow.component.css',
})
export class SkinGlowComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 40,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250319075600966.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/20`,
    },
    {
      id: 2,
      discount: 50,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241013021327921.png',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 900,
      offersLink: `/offers/7`,
    },
    {
      id: 3,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241013032443165.png',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/8`,
    },
    {
      id: 4,
      discount: 50,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241010164649496.png',
      title: 'BPM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 3,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 1400,
      offersLink: `/offers/11`,
    },
    {
      id: 5,
      discount: 33,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520200313144835045.png',
      title: 'Zircon crown installation',
      description: '1 Crown Crown Installation',
      rating: 5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/18`,
    },
    {
      id: 6,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250225125111530.png',
      title: 'Hollywood Smile with Diremposite Veneer',
      description: '1 Tooth Hollywood Smile with Direct Composite Veneer',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/9`,
    },
    {
      id: 7,
      discount: 40,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520230613115550518.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 4,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/8`,
    },
    {
      id: 8,
      discount: 40,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520240727233245530.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/9`,
    },
    {
      id: 9,
      discount: 50,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250121114228375.png',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 900,
      offersLink: `/offers/11`,
    },
  ];
}
