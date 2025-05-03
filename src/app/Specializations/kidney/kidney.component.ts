import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kidney',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent,RouterLink],
  templateUrl: './kidney.component.html',
  styleUrl: './kidney.component.css',
})
export class KidneyComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 20,
      image: '/images/offerImage/60.png',
      title: 'Ghasil alkulaa',
      description: '1 Session Dialysis',
      rating: 5,
      reviewCount: 409,
      bookedCount: 7,
      originalPrice: 3000,
      discountPrice: 600,
      offersLink: `/offers/66`,
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
