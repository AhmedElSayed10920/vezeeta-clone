
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-tattoos',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './tattoos.component.html',
  styleUrl: './tattoos.component.css'
})
export class TattoosComponent {
  services: Service[] = [
    {
      id: 2,
      discount: 50,
      image:
        '/images/offerImage/30.png',
      title: 'Tatto removal',
      description: '1 Session Laser tattoo removal',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 2000,
      discountPrice: 1000,
      offersLink: `/offers/30`,
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






