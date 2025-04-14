import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css',
})
export class DeliveryComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250409120005454.png',
      title: 'Normal vaginal delivery',
      description: '1 Surgery Normal vaginal delivery',
      rating: 5,
      reviewCount: 0,
      bookedCount: 0,
      originalPrice: 5250,
      discountPrice: 1050,
      offersLink: `/offers/1`,
    },
    {
      id: 2,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250409113349381.png',
      title: 'Caesarean section',
      description: '1 Surgery Caesarean section',
      rating: 5,
      reviewCount: 0,
      bookedCount: 0,
      originalPrice: 6500,
      discountPrice: 1300,
      offersLink: `/offers/1`,
    },
  ];
}
