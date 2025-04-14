


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';



@Component({
  selector: 'app-endoscopes',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './endoscopes.component.html',
  styleUrl: './endoscopes.component.css'
})
export class EndoscopesComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250406110705541.png',
      title: 'CBCT',
      description: '1 Scan Dental CT scan',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/1`,

    },
    {
      id: 2,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241231210003109.png',
      title: 'CBCT',
      description: '1 Scan Dental CT scan',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/1`,

    },
    {
      id: 3,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241231210003109.png',
      title: 'CBCT',
      description: '1 Scan Dental CT scan',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/1`,

    },
    {
      id: 4,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250406110204949.png',
      title: 'CBCT',
      description: '1 Scan Dental CT scan',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/1`,

    },
    {
      id: 5,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241231210626761.png',
      title: 'CBCT',
      description: '1 Scan Dental CT scan',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/1`,

    },
    {
      id: 6,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241231204542818.png',
      title: 'CBCT',
      description: '1 Scan Dental CT scan',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/1`,

    },
    {
      id: 7,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241222185917733.png',
      title: 'CBCT',
      description: '1 Scan Dental CT scan',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/1`,

    },
    {
      id: 8,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520241222185302596.png',
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


