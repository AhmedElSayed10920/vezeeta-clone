import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-skin-glow',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './skin-glow.component.html',
  styleUrl: './skin-glow.component.css',
})
export class SkinGlowComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 20,
      image:
        '/images/offerImage/29.png',
      title: '20% off for more glowy &healthy skin with New RRS techniques',
      description: '1 Session Stem cells skin care',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 6000,
      discountPrice: 1200,
      offersLink: `/offers/29`,
    },
    {
      id: 6,
      discount: 33,
      image:
        '/images/offerImage/33.png',
      title: 'Skin booster for whitening, glow and skin rejuvenation',
      description: '1 Session Stem cells skin care',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 1200,
      discountPrice: 396,
      offersLink: `/offers/33`,
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




