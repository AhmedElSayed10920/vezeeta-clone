import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';

@Component({
  selector: 'app-general-surgery',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './general-surgery.component.html',
  styleUrls: ['./general-surgery.component.css'],
})
export class GeneralSurgeryComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 50,
      image:
        '/images/offerImage/61.png',
        title: 'Reduction on laparoscopic cholecystectomy',
        description: '1 Surgery Laparoscopic Cholecystectomy',
        rating: 5,
        reviewCount: 200,
        bookedCount: 1545,
        originalPrice: 50000,
        discountPrice: 25000,
        offersLink: `/offers/67`,
      },
      {
        id: 2,
        discount: 50,
        image:
        '/images/offerImage/62.png',
        title: 'Discount fifty percent',
        description: '1 Surgery Hemorrhoidectomy',
        rating: 4.5,
        reviewCount: 40,
        bookedCount: 570,
        originalPrice: 20000,
        discountPrice: 10000,
        offersLink: `/offers/68`,
      },
      {
        id: 3,
        discount: 50,
        image:
        '/images/offerImage/63.png',
        title: 'Discount fifty percent',
      description: '1 Surgery Hemorrhoidectomy',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 40000,
      discountPrice: 20000,
      offersLink: `/offers/69`,
    },
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
    {
      id: 5,
      discount: 20,
      image:
      '/images/offerImage/72.png',
      title: 'Breast cancer removal',
      description: '1 Operation Conservative Breast Surgery',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 35000,
      discountPrice: 7000,
      offersLink: `/offers/78`,
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




