

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-endocrine-surgery',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './endocrine-surgery.component.html',
  styleUrl: './endocrine-surgery.component.css'
})
export class EndocrineSurgeryComponent {
  services: Service[] = [
    {
      id: 4,
      discount: 50,
      image:
        '/images/offerImage/73.png',
      title: 'Discount fifty percent',
      description: '1 Operation Thyroidectomy',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 60000,
      discountPrice: 30000,
      offersLink: `/offers/79`,

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




