import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-whitening',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './whitening.component.html',
  styleUrl: './whitening.component.css',
})
export class WhiteningComponent {
  services: Service[] = [
    {
      id: 12,
      discount: 50,
      image:
        '/images/offerImage/12.png',
      title: 'BPM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 5,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 1000,
      offersLink: `/offers/12`,

    },
    {
      id: 11,
      discount: 20,
      image:
        '/images/offerImage/11.png',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/11`,

    },
    {
      id: 10,
      discount: 50,
      image:
        '/images/offerImage/10.png',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/10`,

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
    {
      id: 8,
      discount: 20,
      image:
        '/images/offerImage/8.png',
      title: 'Hollywood Smile with Diremposite Veneer',
      description: '1 Tooth Hollywood Smile with Direct Composite Veneer',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/8`,

    },
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
      id: 2,
      discount: 40,
      image:
        '/images/offerImage/2.png',
      title: 'Hollywood Smile with Veneers',
      description: '10 Tooth Hollywood Smile with Veneers',
      rating: 5,
      reviewCount: 5,
      bookedCount: 3,
      originalPrice: 4000,
      discountPrice: 1600,
      offersLink: `/offers/2`,

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



