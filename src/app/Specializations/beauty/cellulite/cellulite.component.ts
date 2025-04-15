



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-cellulite',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './cellulite.component.html',
  styleUrls: ['./cellulite.component.css'],
})
export class CelluliteComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 50,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241010170034520.png',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 900,
      offersLink: `/offers/13`,

    },
    {
      id: 2,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520230413161114593.png',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 1600,
      offersLink: `/offers/13`,

    },
  ];
}
