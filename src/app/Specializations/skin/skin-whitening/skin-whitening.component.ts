import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-skin-whitening',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './skin-whitening.component.html',
  styleUrl: './skin-whitening.component.css',
})
export class SkinWhiteningComponent {
  services: Service[] = [
    {
      id: 1,
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
      id: 2,
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
