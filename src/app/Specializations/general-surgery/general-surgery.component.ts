import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';

@Component({
  selector: 'app-general-surgery',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './general-surgery.component.html',
  styleUrls: ['./general-surgery.component.css'],
})
export class GeneralSurgeryComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 40,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520231107124739725.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/6`,
    },
    {
      id: 2,
      discount: 50,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/50668362620241025110244428.png',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 900,
      offersLink: `/offers/6`,
    },
    {
      id: 3,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250319143555881.png',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/6`,
    },
  ];
}
