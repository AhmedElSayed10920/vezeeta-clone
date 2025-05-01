
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';

@Component({
  selector: 'app-fitness',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './fitness.component.html',
  styleUrl: './fitness.component.css'
})
export class FitnessComponent {
  services: Service[] = [
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
    {
      id: 6,
      discount: 20,
      image:
        '/images/offerImage/51.png',
      title: 'Body composition with diet',
      description: '1 Session Diet plan',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/57`,

    },
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
      id: 10,
      discount: 40,
      image:
        '/images/offerImage/54.png',
      title: 'Ultimate solution',
      description: '8 Session Meso-lipolysis',
      rating: 5,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 4800,
      discountPrice: 1920,
      offersLink: `/offers/60`,

    },
    {
      id: 11,
      discount: 40,
      image:
        '/images/offerImage/55.png',
      title: 'Get ride of rsisted fats',
      description: '5 Session Meso-lipolysis',
      rating: 3.5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 3000,
      discountPrice: 1200,
      offersLink: `/offers/61`,

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






