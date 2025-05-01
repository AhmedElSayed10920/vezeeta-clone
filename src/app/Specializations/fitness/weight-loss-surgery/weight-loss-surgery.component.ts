
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-weight-loss-surgery',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './weight-loss-surgery.component.html',
  styleUrl: './weight-loss-surgery.component.css'
})
export class WeightLossSurgeryComponent {
  services: Service[] = [
    {
      id: 2,
      discount: 50,
      image:
        '/images/offerImage/47.png',
      title: 'Fifty percent discount',
      description: '1 Surgery Gynaecomastia for Men',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 50000,
      discountPrice: 25000,
      offersLink: `/offers/53`,

    },
    {
      id: 3,
      discount: 20,
      image:
        '/images/offerImage/48.png',
      title: 'Gastric ballon for weight loss',
      description: '1 Surgery Gastric balloon',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 17000,
      discountPrice: 3400,
      offersLink: `/offers/54`,

    },
    {
      id: 1,
      discount: 50,
      image:
        '/images/offerImage/46.png',
      title: 'Fifty percent discount',
      description: '1 Surgery Gastric bypass',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/52`,

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






