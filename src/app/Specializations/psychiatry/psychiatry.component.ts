
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';
import { Service } from '../../models/service';

@Component({
  selector: 'app-psychiatry',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './psychiatry.component.html',
  styleUrl: './psychiatry.component.css'
})
export class PsychiatryComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 50,
      image:
        '/images/offerImage/71.png',
      title: 'Complete Course Psychoanalysis 24 sessions',
      description: '24 Sessions Psychoanalysis session, Specialist',
      rating: 5,
      reviewCount: 200,
      bookedCount: 20,
      originalPrice: 40000,
      discountPrice: 20000,
      offersLink: `/offers/77`,

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






