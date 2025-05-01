import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../../models/service';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';

@Component({
  selector: 'app-smile-makeover',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './smile-makeover.component.html',
  styleUrl: './smile-makeover.component.css',
})
export class SmileMakeoverComponent {
  services: Service[] = [
    {
      id: 3,
      discount: 50,
      image:
        '/images/offerImage/3.png',
      title: 'Gingvectomy by laser',
      description: '1 Session Gum cuts with laser without pain',
      rating: 5,
      reviewCount: 40,
      bookedCount: 3,
      originalPrice: 2000,
      discountPrice: 1000,
      offersLink: `/offers/3`,

    },
    {
      id: 4,
      discount: 20,
      image:
        '/images/offerImage/4.png',
      title: 'Gum cuts with laser without pain',
      description: '1 Session Gum cuts with laser without pain',
      rating: 5,
      reviewCount: 12,
      bookedCount: 58,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/4`,

    },
    {
      id: 7,
      discount: 40,
      image:
        '/images/offerImage/7.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 640,
      offersLink: `/offers/7`,

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




