
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-weight-loss',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './weight-loss.component.html',
  styleUrl: './weight-loss.component.css'
})
export class WeightLossComponent {
  services: Service[] = [
    {
      id: 8,
      discount: 50,
      image:
        '/images/offerImage/52.png',
      title: 'Cryolipolysis + Cavitation + Carboxy Injection',
      description: '2 Session Cryolipolysis',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/58`,

    },
    {
      id: 9,
      discount: 30,
      image:
        '/images/offerImage/53.png',
      title: 'Destroing fats with cavitation',
      description: '1 Session cavitation',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 250,
      discountPrice: 75,
      offersLink: `/offers/59`,

    },
    {
      id: 12,
      discount: 20,
      image:
        '/images/offerImage/56.png',
      title: '6 cavitation + 6 cryolipolysis + 6 laser',
      description: '1 Session Body sculpting and fats dissolving',
      rating: 4.55,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/62`,

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






