import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-acne-scars-treatment',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './acne-scars-treatment.component.html',
  styleUrl: './acne-scars-treatment.component.css',
})
export class AcneScarsTreatmentComponent {
  services: Service[] = [
    {
      id: 8,
      discount: 20,
      image:
        '/images/offerImage/35.png',
      title: '3 sessions of cold peeling to face or sensitive area',
      description: '3 Session Face peeling',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 3000,
      discountPrice: 600,
      offersLink: `/offers/35`,
    },
    {
      id: 9,
      discount: 50,
      image:
        '/images/offerImage/36.png',
      title: 'Resistant scar treatment',
      description: '1 Session Mesotherapy for face',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 6000,
      discountPrice: 3000,
      offersLink: `/offers/36`,
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




