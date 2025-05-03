

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dental-care',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent,RouterLink],
  templateUrl: './dental-care.component.html',
  styleUrl: './dental-care.component.css'
})
export class DentalCareComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 30,
      image:
        '/images/offerImage/1.png',
      title: 'BFM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 5,
      reviewCount: 3,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 600,
      offersLink: `/offers/1`,

    },
    {
      id: 2,
      discount: 40,
      image:
        '/images/offerImage/2.png',
      title: 'Hollywood Smile with Veneers',
      description: '10 Tooth Hollywood Smile with Veneers',
      rating: 5,
      reviewCount: 5,
      bookedCount: 3,
      originalPrice: 4000,
      discountPrice: 1600,
      offersLink: `/offers/2`,

    },
    {
      id: 3,
      discount: 50,
      image:
        '/images/offerImage/3.png',
      title: 'Gingvectomy by laser',
      description: '1 Session Gum cuts with laser without pain',
      rating: 5,
      reviewCount: 40,
      bookedCount: 3,
      originalPrice: 2000,
      discountPrice: 1000,
      offersLink: `/offers/3`,

    },
    {
      id: 4,
      discount: 20,
      image:
        '/images/offerImage/4.png',
      title: 'Gum cuts with laser without pain',
      description: '1 Session Gum cuts with laser without pain',
      rating: 5,
      reviewCount: 12,
      bookedCount: 58,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/4`,

    },
    {
      id: 5,
      discount: 50,
      image:
        '/images/offerImage/5.png',
      title: 'Shine Bright like Hollywood Stars',
      description: '1 Tooth Hollywood Smile with Veneers',
      rating: 5,
      reviewCount: 0,
      bookedCount: 0,
      originalPrice: 5500,
      discountPrice: 2750,
      offersLink: `/offers/5`,

    },
    {
      id: 6,
      discount: 20,
      image:
        '/images/offerImage/6.png',
      title: 'Hollywood Smile with Diremposite Veneer',
      description: '1 Tooth Hollywood Smile with Direct Composite Veneer',
      rating: 4.55,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/6`,

    },
    {
      id: 7,
      discount: 40,
      image:
        '/images/offerImage/7.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 640,
      offersLink: `/offers/7`,

    },
    {
      id: 8,
      discount: 20,
      image:
        '/images/offerImage/8.png',
      title: 'Hollywood Smile with Diremposite Veneer',
      description: '1 Tooth Hollywood Smile with Direct Composite Veneer',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/8`,

    },
    {
      id: 9,
      discount: 40,
      image:
        '/images/offerImage/9.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 4,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 640,
      offersLink: `/offers/9`,

    },
    {
      id: 10,
      discount: 50,
      image:
        '/images/offerImage/10.png',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/10`,

    },
    {
      id: 11,
      discount: 20,
      image:
        '/images/offerImage/11.png',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/11`,

    },
    {
      id: 12,
      discount: 50,
      image:
        '/images/offerImage/12.png',
      title: 'BPM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 5,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 1000,
      offersLink: `/offers/12`,

    },
    {
      id: 13,
      discount: 50,
      image: '/images/offerImage/13.png',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/13`,

    },
    {
      id: 14,
      discount: 20,
      image:
        '/images/offerImage/14.png',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/14`,

    },
    {
      id: 15,
      discount: 40,
      image:
        '/images/offerImage/15.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 4,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 640,
      offersLink: `/offers/15`,

    },
    {
      id: 16,
      discount: 33,
      image:
        '/images/offerImage/16.png',
      title: 'Silver diamond',
      description: '1 Tooth Silver diamond installation',
      rating: 3.5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 660,
      offersLink: `/offers/16`,
    },


  ];


  currentPage = 1;
  itemsPerPage = 6;

  getNumberArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i + 1);
  }

  //test 
  viewData() {
    console.log(this.totalPages);
    console.log(this.services.length);
  }
  ngOnInit() {
    this.viewData();
  }
  // end of test

  get totalPages(): number {

    return Math.ceil(this.services.length / this.itemsPerPage);
  }

  // get paginatedServices(): Service[] {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   return this.services.slice(startIndex, startIndex + this.itemsPerPage);
  // }
  get paginatedServices(): Service[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    console.log(`Displaying items ${startIndex} to ${endIndex}`);
    return this.services.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}





