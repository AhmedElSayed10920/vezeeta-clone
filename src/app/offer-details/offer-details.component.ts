import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';
import { ImageService } from '../shared/image.service';
import { Offer } from '../offer';
import { BookingFormSimpleComponent } from '../booking-form-simple/booking-form-simple.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-offer-details',

  standalone: true,
  imports: [CommonModule, RouterModule, BookingFormSimpleComponent],
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  imageUrl: string = '/images/offerImage/default.png';
  offer: Partial<Offer> | null = null;

  constructor(
    private doctorService: DoctorService,
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router,
    //added by MA
    private location: Location
  ) {}

  ngOnInit(): void {
    const offerId = this.route.snapshot.paramMap.get('id') || '1';
    const offerIdNumber = parseInt(offerId);
// هتعدل الشرط ده لو عدد الافر زاد عن اربعين عشان مش هيبقى نفس الرقم يويده على النوت فاوند 
    if (isNaN(offerIdNumber) || offerIdNumber < 1 || offerIdNumber > 100) {
      this.router.navigate(['/offerNotFound']);
      return;
    }

    this.fetchOffer(offerId);
  }

  fetchOffer(offerId: string) {
    this.doctorService.getOffers().subscribe(
      (offers) => {
        const selectedOffer = offers.find((o) => o.id === parseInt(offerId));
        if (selectedOffer) {
          this.offer = {
            id: selectedOffer.id,
            title: selectedOffer.title,
            description: selectedOffer.description,
            discountPercentage: selectedOffer.discountPercentage,
            clinicName: selectedOffer.clinicName,
            originalPrice: selectedOffer.originalPrice,
            finalPrice: selectedOffer.finalPrice
          };
          this.imageUrl = this.imageService.getOfferImage(this.offer.id?.toString() || '1');
        } else {
          this.offer = null;
          this.imageUrl = '/images/offerImage/default.png';
        }
      },
      (error) => {
        console.error('Error fetching offer:', error);
        this.offer = null;
        this.imageUrl = '/images/offerImage/default.png';
      }
    );
  }

//added by MA
  goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/home']); // أو أي مسار افتراضي
    }
  }


  showScrollTop = false;

@HostListener('window:scroll', [])
onWindowScroll() {
  this.showScrollTop = window.scrollY > 200;
}

scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  

}
