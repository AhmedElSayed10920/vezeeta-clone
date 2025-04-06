// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router, RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-book-specialties',
//   standalone: true,
//   imports: [CommonModule, RouterModule], // ✅ إضافة RouterModule
//   templateUrl: './book-specialties.component.html',
//   styleUrls: ['./book-specialties.component.css'],
// })
// export class BookSpecialtiesComponent implements OnInit {
//   offers = [
//     {
//       id: 1,
//       title: 'Skin',
//       image:
//         'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/dermatology/eg/desktop.webp',
//     },
//     {
//       id: 2,
//       title: 'Teeth ',
//       image:
//         'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/dentistry/eg/desktop.webp',
//     },
//     {
//       id: 3,
//       title: 'Mental,Emotional Or Behavioral Disorders',
//       image:
//         'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/psychiatry/eg/desktop.webp',
//     },
//     {
//       id: 4,
//       title: 'Child',
//       image:
//         'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/pediatrics-and-new-born/eg/desktop.webp',
//     },
//     {
//       id: 5,
//       title: 'Brain & Nerves',
//       image:
//         'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/pediatrics-and-new-born/eg/desktop.webp',
//     },
//     {
//       id: 6,
//       title: 'Bones',
//       image:
//         'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/orthopedics/eg/desktop.webp',
//     },
//     {
//       id: 7,
//       title: 'Gynecology and Infertility',
//       image:
//         'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/gynaecology-and-infertility/eg/desktop.webp',
//     },
//     {
//       id: 7,
//       title: 'Ear, Nose and Throat',
//       image:
//         'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/ear-nose-and-throat/eg/desktop.webp',
//     },
//   ];

//   currentIndex = 0;
//   visibleOffers: any[] = [];

//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.updateVisibleOffers();
//   }

//   updateVisibleOffers() {
//     this.visibleOffers = this.offers.slice(
//       this.currentIndex,
//       this.currentIndex + 4
//     );
//   }

//   nextSlide() {
//     if (this.currentIndex + 4 < this.offers.length) {
//       this.currentIndex += 4;
//     } else {
//       this.currentIndex = 0;
//     }
//     this.updateVisibleOffers();
//   }

//   prevSlide() {
//     if (this.currentIndex > 0) {
//       this.currentIndex -= 4;
//     } else {
//       this.currentIndex = Math.max(0, this.offers.length - 4);
//     }
//     this.updateVisibleOffers();
//   }

//   goToDetails(offerId: number) {
//     this.router.navigate(['/offer-details', offerId]);
//   }
// }



import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-specialties',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-specialties.component.html',
  styleUrls: ['./book-specialties.component.css'],
})
export class BookSpecialtiesComponent implements OnInit {
  specialties = [
    {
      id: 1,
      title: 'Skin',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/dermatology/eg/desktop.webp',
    },
    {
      id: 2,
      title: 'Teeth',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/dentistry/eg/desktop.webp',
    },
    {
      id: 3,
      title: 'Mental, Emotional or Behavioral Disorders',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/psychiatry/eg/desktop.webp',
    },
    {
      id: 4,
      title: 'Child',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/pediatrics-and-new-born/eg/desktop.webp',
    },
    {
      id: 5,
      title: 'Brain & Nerves',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/neurology/eg/desktop.webp',
    },
    {
      id: 6,
      title: 'Bones',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/orthopedics/eg/desktop.webp',
    },
    {
      id: 7,
      title: 'Gynecology and Infertility',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/gynaecology-and-infertility/eg/desktop.webp',
    },
    {
      id: 8,
      title: 'Ear, Nose and Throat',
      image: 'https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-138/images/specialties/ear-nose-and-throat/eg/desktop.webp',
    },
  ];

  currentIndex = 0;
  visibleSpecialties: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateVisibleSpecialties();
  }

  updateVisibleSpecialties() {
    this.visibleSpecialties = this.specialties.slice(this.currentIndex, this.currentIndex + 4);
  }

  nextSlide() {
    if (this.currentIndex + 4 < this.specialties.length) {
      this.currentIndex += 4;
    } else {
      this.currentIndex = 0;
    }
    this.updateVisibleSpecialties();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 4;
    } else {
      this.currentIndex = Math.max(0, this.specialties.length - 4);
    }
    this.updateVisibleSpecialties();
  }

  navigateToSpecialtyDetails(specialtyId: number) {
    this.router.navigate(['/specialty-details', specialtyId]);
  }
}