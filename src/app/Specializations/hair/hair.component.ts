import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hair',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent,RouterLink],
  templateUrl: './hair.component.html',
  styleUrl: './hair.component.css',
})
export class HairComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 20,
      image:
        '/images/offerImage/24.png',
      title: 'Mesotherapy for hair fall treatment',
      description: '1 Session Stem cells for Hair',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1900,
      discountPrice: 380,
      offersLink: `/offers/24`,
    },
    {
      id: 2,
      discount: 57,
      image:
        '/images/offerImage/26.png',
      title: 'German plasma for face',
      description: '1 Session Plasma injection',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 2000,
      discountPrice: 1140,
      offersLink: `/offers/26`,
    },
    {
      id: 3,
      discount: 25,
      image:
        '/images/offerImage/27.png',
      title: 'Hair fall & AGA treatment',
      description: '4 Session Plasma hair injection',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 4000,
      discountPrice: 1000,
      offersLink: `/offers/27`,
    },
    {
      id: 4,
      discount: 20,
      image:
        '/images/offerImage/28.png',
      title: 'Healthy hair',
      description: '1 session Mesotherapy for hair',
      rating: 3,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 1500,
      discountPrice: 300,
      offersLink: `/offers/28`,
    },
  ];
  currentPage = 1;
  itemsPerPage = 6;
  
  getNumberArray(length: number): number[] {
    return Array.from({length}, (_, i) => i + 1);
  }

  get totalPages(): number {
   
    return Math.ceil(this.services.length / this.itemsPerPage);
  }

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




