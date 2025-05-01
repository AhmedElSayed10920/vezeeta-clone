
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-rehabilitation',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './rehabilitation.component.html',
  styleUrl: './rehabilitation.component.css'
})
export class RehabilitationComponent {
  services: Service[] = [
    {
      id: 4,
      discount: 25,
      image:
        '/images/offerImage/49.png',
      title: '12 sessions of physio therapy for one part',
      description: '1 Session Physical therapy',
      rating: 3,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 4800,
      discountPrice: 1200,
      offersLink: `/offers/55`,

    },
    {
      id: 5,
      discount: 30,
      image:
        '/images/offerImage/50.png',
      title: 'Physical therapy,rehabilitation',
      description: '6 Session Physical therapy',
      rating: 5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 1200,
      discountPrice: 360,
      offersLink: `/offers/56`,

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






