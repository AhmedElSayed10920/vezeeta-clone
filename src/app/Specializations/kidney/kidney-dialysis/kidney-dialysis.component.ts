

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-kidney-dialysis',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './kidney-dialysis.component.html',
  styleUrl: './kidney-dialysis.component.css'
})
export class KidneyDialysisComponent {

  services: Service[] = [
    {
      id: 1,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250406142618773.png',
      title: 'Ghasil alkulaa',
      description: '1 Session Dialysis',
      rating: 5,
      reviewCount: 0,
      bookedCount:0,
      originalPrice: 3000,
      discountPrice: 600,
      offersLink: `/offers/10`,

    },  ];
}


