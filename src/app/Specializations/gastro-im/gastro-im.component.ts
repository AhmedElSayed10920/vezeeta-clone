
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOffersComponent } from '../../all-offers/navbar-offers/navbar-offers.component';
import { ServiceCardComponent } from '../../all-offers/service-card/service-card.component';
import { Service } from '../../models/service';

@Component({
  selector: 'app-gastro-im',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule, NavbarOffersComponent],
  templateUrl: './gastro-im.component.html',
  styleUrl: './gastro-im.component.css'
})
export class GastroImComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 20,
      image:
        '/images/offerImage/64.png',
      title: 'Gastrointestinal and colon endoscopy',
      description: '1 Operation Injection Sclerothrapy of Fundal varices',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 5500,
      discountPrice: 1100,
      offersLink: `/offers/70`,

    },
    {
      id: 2,
      discount: 20,
      image:
        '/images/offerImage/65.png',
      title: 'ERCP stone removal or stent insertion in obstructive jaundic',
      description: '1 Operation Endoscopic Vein Ligation',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 17750,
      discountPrice: 3550,
      offersLink: `/offers/71`,

    },
    {
      id: 3,
      discount: 20,
      image:
        '/images/offerImage/66.png',
      title: 'Gastrointestinal and colon endoscopy',
      description: '1 Analysis Colonoscopy (short) with biopsy',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 6000,
      discountPrice: 1200,
      offersLink: `/offers/72`,

    },
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
      discount: 22,
      image:
        '/images/offerImage/68.png',
      title: 'Colonscopy with only afemale medica',
      description: '1 Analysis Colonoscopy (Long) with biopsy',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 4820,
      discountPrice: 1061,
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


  get totalPages(): number {
   
    return Math.ceil(this.services.length / this.itemsPerPage);
  }


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






