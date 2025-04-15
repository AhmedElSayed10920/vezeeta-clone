import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-oncological',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './oncological.component.html',
  styleUrl: './oncological.component.css',
})
export class OncologicalComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 40,
      image:
      'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250406101934778.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/6`,
    },
  ];
}
