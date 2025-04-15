
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-hair-transplant',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './hair-transplant.component.html',
  styleUrl: './hair-transplant.component.css'
})
export class HairTransplantComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 40,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250209103619748.png',
      title: 'Mesotherapy for hair fall treatment',
      description: '1 Session Stem cells for Hair',
      rating: 5,
      reviewCount: 0,
      bookedCount: 0,
      originalPrice: 1900,
      discountPrice: 380,
      offersLink: `/offers/9`,

    },
  ];
}


