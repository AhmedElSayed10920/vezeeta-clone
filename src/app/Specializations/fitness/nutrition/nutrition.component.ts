
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-nutrition',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.css'
})
export class NutritionComponent {
  services: Service[] = [
    {
      id: 6,
      discount: 20,
      image:
        '/images/offerImage/51.png',
      title: 'Body composition with diet',
      description: '1 Session Diet plan',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/57`,

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






