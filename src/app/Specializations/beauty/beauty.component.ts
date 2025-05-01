import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';

@Component({
  selector: 'app-beauty',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css'],
})
export class BeautyComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 20,
      image:
        '/images/offerImage/37.png',
      title: 'Face lift using radiofrequency waves using hyaluronic acid',
      description: '2 Session Radio frequency body lifting',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1400,
      discountPrice: 280,
      offersLink: `/offers/37`,
    },
    {
      id: 2,
      discount: 25,
      image:
        '/images/offerImage/38.png',
      title: '2+1 session skin rejuvenation for Brighter skin & less scars',
      description: '3 Session Mesotherapy for face',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 2400,
      discountPrice: 600,
      offersLink: `/offers/38`,
    },
    {
      id: 3,
      discount: 50,
      image:
        '/images/offerImage/39.png',
      title: 'Face lift',
      description: '1 Session Double chin removal',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 80000,
      discountPrice: 40000,
      offersLink: `/offers/39`,
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
      id: 4,
      discount: 20,
      image:
        '/images/offerImage/28.png',
      title: 'Healthy hair',
      description: '1 session Mesotherapy for hair',
      rating: 3,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 1500,
      discountPrice: 300,
      offersLink: `/offers/28`,
    },
    {
      id: 6,
      discount: 50,
      image:
        '/images/offerImage/40.png',
      title: 'Liposuction Discount fifty percent',
      description: '1 Session Liposuction',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 60000,
      discountPrice: 30000,
      offersLink: `/offers/40`,
    },
    {
      id: 7,
      discount: 50,
      image:
        '/images/offerImage/41.png',
      title: 'Brasilian butt',
      description: '1 Session Butt augmentation',
      rating: 4,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 60000,
      discountPrice: 30000,
      offersLink: `/offers/47`,
    },
    {
      id: 8,
      discount: 30,
      image:
        '/images/offerImage/42.png',
      title: 'Botox for removing wrinkles of forehead and around eyes',
      description: '1 Session Botox',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 5000,
      discountPrice: 1500,
      offersLink: `/offers/48`,
    },
    {
      id: 9,
      discount: 20,
      image:
        '/images/offerImage/43.png',
      title: 'New attractive beautiful lips french Stylage filler',
      description: '1 Injection session Lip fillers',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 8000,
      discountPrice: 1600,
      offersLink: `/offers/49`,
    },
    {
      id: 10,
      discount: 20,
      image:
        '/images/offerImage/44.png',
      title: 'Carboxy - Injection For Lipolysis',
      description: '4 Injection session Lipodissolve',
      rating: 5,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 1200,
      discountPrice: 240,
      offersLink: `/offers/50`,
    },
    {
      id: 21,
      discount: 20,
      image:
        '/images/offerImage/21.png',
      title: 'Laser Hair Removal Of Half Legs',
      description: '1 Session Legs Laser Hair Removal',
      rating: 5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/21`,
    },
    {
      id: 12,
      discount: 50,
      image:
        '/images/offerImage/45.png',
        title: 'Carboxy - Injection For Lipolysis',
        description: '4 Injection session Lipodissolve',
      rating: 4.55,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 1000,
      offersLink: `/offers/51`,
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




