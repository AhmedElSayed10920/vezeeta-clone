
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-general-psychiatry-services',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './general-psychiatry-services.component.html',
  styleUrl: './general-psychiatry-services.component.css'
})
export class GeneralPsychiatryServicesComponent {
  services: Service[] = [
    {

      id: 1,
      discount: 20,
      image:
        'https://d24m94c92si2vv.cloudfront.net/Images/375x180/32546716520250115154607464.png',
      title: 'Complete Course Psychoanalysis 24 sessions',
      description: '1 Sessions Psychoanalysis session, Specialist',
      rating: 5,
      reviewCount: 200,
      bookedCount: 20,
      originalPrice: 50000,
      discountPrice: 10000,
      offersLink: `/offers/17`,


    },

  ];
}


