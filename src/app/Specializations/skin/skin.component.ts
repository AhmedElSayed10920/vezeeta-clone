import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skin',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent,RouterLink],
  templateUrl: './skin.component.html',
  styleUrl: './skin.component.css',
})
export class SkinComponent {
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
    {
      id: 3,
      discount: 30,
      image:
        '/images/offerImage/31.png',
      title: 'Carbon laser',
      description: '1 Session Carbon laser',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 1000,
      discountPrice: 300,
      offersLink: `/offers/31`,
    },
    {
      id: 4,
      discount: 20,
      image:
        '/images/offerImage/32.png',
      title: 'Face lifting by hifu',
      description: '1 Session Face tightening with Hifu',
      rating: 3,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 4500,
      discountPrice: 900,
      offersLink: `/offers/32`,
    },
    {
      id: 5,
      discount: 57,
      image:
        '/images/offerImage/26.png',
      title: 'German plasma for face',
      description: '1 Session Plasma injection',
      rating: 5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 1140,
      offersLink: `/offers/26`,
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
    {
      id: 7,
      discount: 20,
      image:
        '/images/offerImage/34.png',
      title: 'Special discount on skin cleaning 450 pounds',
      description: '1 Session Facial Cleansing',
      rating: 4,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 563,
      discountPrice: 113,
      offersLink: `/offers/34`,
    },
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




