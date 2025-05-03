import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';
@Component({
  selector: 'app-body-sculpting',
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './body-sculpting.component.html',
  styleUrl: './body-sculpting.component.css'
})
export class BodySculptingComponent {

  services: Service[] = [
    {
      id: 10,
      discount: 20,
      image:
        '/images/offerImage/44.png',
      title: 'Carboxy - Injection For Lipolysis',
      description: '4 Injection session Lipodissolve',
      rating: 5,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 1200,
      discountPrice: 240,
      offersLink: `/offers/50`,
    },
    {
      id: 12,
      discount: 50,
      image:
        '/images/offerImage/45.png',
        title: 'Carboxy - Injection For Lipolysis',
        description: '4 Injection session Lipodissolve',
      rating: 4.55,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 1000,
      offersLink: `/offers/51`,
    },
  ];
  currentPage = 1;
  itemsPerPage = 6;

  getNumberArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i + 1);
  }



  get totalPages(): number {

    return Math.ceil(this.services.length / this.itemsPerPage);
  }

  get paginatedServices(): Service[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
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





