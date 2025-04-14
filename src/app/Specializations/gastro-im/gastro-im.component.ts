
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';
import { Service } from '../../models/service';

@Component({
  selector:  'app-gastro-im',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './gastro-im.component.html',
  styleUrl: './gastro-im.component.css'
})
export class GastroImComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250308191348717.png',
      title: 'CBCT',
      description: '1 Scan Dental CT scan',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 2000,
      discountPrice: 400,
    },
    
  ];
}


