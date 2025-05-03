import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-laser',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent,RouterLink],
  templateUrl: './laser.component.html',
  styleUrl: './laser.component.css',
})
export class LaserComponent {
  services: Service[] = [
    {
      id:17,
      discount: 20,
      image:
        '/images/offerImage/17.png',
      title: 'Special offer: hair removal of half the hands, 450 pounds',
      description: '1 Session Laser Hair Removal',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 688,
      discountPrice: 138,
      offersLink: `/offers/17`,
    },
    {
      id: 18,
      discount: 20,
      image:
        '/images/offerImage/18.png',
      title: 'Laser Hair removal Of Half Arms',
      description: '1 Session Laser Hair Removal',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1750,
      discountPrice: 350,
      offersLink: `/offers/18`,
    },
    {
      id: 19,
      discount: 54,
      image:
        '/images/offerImage/19.png',
      title: 'Laser hair removal of bikini',
      description: '1 Session Laser Hair Removal for bikini',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 400,
      discountPrice: 216,
      offersLink: `/offers/19`,
    },
    {
      id: 20,
      discount: 20,
      image:
        '/images/offerImage/20.png',
      title: 'Special offer for mens area for 600 pound',
      description: '1 Session Legs Laser Hair Removal',
      rating: 3,
      reviewCount: 10,
      bookedCount: 25,
      originalPrice: 750,
      discountPrice: 150,
      offersLink: `/offers/20`,
    },
    {
      id: 21,
      discount: 20,
      image:
        '/images/offerImage/21.png',
      title: 'Laser Hair Removal Of Half Legs',
      description: '1 Session Legs Laser Hair Removal',
      rating: 5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/21`,
    },
    {
      id: 22,
      discount: 45,
      image:
        '/images/offerImage/22.png',
      title: 'Laser hair removal Candela bekini and under arm',
      description: '1 Session Laser Hair Removal for Sensitive Areas',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 650,
      discountPrice: 293,
      offersLink: `/offers/22`,
    },
    {
      id: 23,
      discount: 20,
      image:
        '/images/offerImage/23.png',
      title: 'A special offer, the bean session started at 950 pounds',
      description: '1 Session Full Body Laser Hair Removal',
      rating: 4,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1250,
      discountPrice: 250,
      offersLink: `/offers/23`,
    },
    {
      id: 24,
      discount: 50,
      image:
        '/images/offerImage/24.png',
      title: 'Laser hair removal face',
      description: '1 Session Face Laser Hair Removal',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 300,
      discountPrice: 150,
      offersLink: `/offers/24`,
    },

    {
      id: 25,
      discount: 50,
      image:
        '/images/offerImage/25.png',
      title: 'Laser hair removal face',
      description: '1 Session Face Laser Hair Removal',
      rating: 5,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 1000,
      discountPrice: 750,
      offersLink: `/offers/25`,
    },

  ];


  
  currentPage = 1;
  itemsPerPage = 6;
  
  getNumberArray(length: number): number[] {
    return Array.from({length}, (_, i) => i + 1);
  }

//test 
  viewData(){
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

