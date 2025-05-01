


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../all-offers/service-card/service-card.component';
import { NavbarOffersComponent } from '../../../all-offers/navbar-offers/navbar-offers.component';
import { Service } from '../../../models/service';



@Component({
  selector: 'app-endoscopes',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './endoscopes.component.html',
  styleUrl: './endoscopes.component.css'
})
export class EndoscopesComponent {
  services: Service[] = [
    {
      id: 4,
      discount: 20,
      image:
        '/images/offerImage/67.png',
      title: 'Argon laser app of LES for treatment Gastric reflux ARMA',
      description: '1 Operation Endoscopic Vein Ligation',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 16250,
      discountPrice: 3250,
      offersLink: `/offers/73`,

    },
    {
      id: 5,
      discount: 20,
      image:
        '/images/offerImage/68.png',
      title: 'CBCT',
      description: '1 Scan Dental CT scan',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/74`,

    },
    {
      id: 6,
      discount: 30,
      image:
        '/images/offerImage/69.png',
      title: 'Intragastric balloon  russian  insertion for weight loss',
      description: '1 Operation Intragastric balloon (Bariatric)',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 20000,
      discountPrice: 6000,
      offersLink: `/offers/75`,

    },
    {
      id: 7,
      discount: 20,
      image:
        '/images/offerImage/70.png',
      title: 'Ercp',
      description: '1 Operation ERCP With Plastic Stent',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 22000,
      discountPrice: 4400,
      offersLink: `/offers/76`,
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






