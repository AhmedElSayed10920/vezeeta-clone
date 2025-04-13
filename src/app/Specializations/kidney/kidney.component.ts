

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';

@Component({
  selector: 'app-kidney',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './kidney.component.html',
  styleUrl: './kidney.component.css'
})
export class KidneyComponent {
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
      bookedCount: 0,
      originalPrice: 3000,
      discountPrice: 600,
    },
    
  ];
}


