
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-ct-scan',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './ct-scan.component.html',
  styleUrl: './ct-scan.component.css'
})
export class CtScanComponent {
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
      offersLink: `/offers/1`,

    },
    
  ];
}


