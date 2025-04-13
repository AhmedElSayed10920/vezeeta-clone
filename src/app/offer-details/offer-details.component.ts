import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';
import { ImageService } from '../shared/image.service';
import { Offer } from '../offer';
import { AppointmentReservationComponent } from '../appointment-reservation/appointment-reservation.component';

@Component({
  selector: 'app-offer-details',
  standalone: true,
  imports: [CommonModule, RouterModule, AppointmentReservationComponent],
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  imageUrl: string = 'https://via.placeholder.com/375x180';
  offer: Partial<Offer> | null = null;

  constructor(
    private doctorService: DoctorService,
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const offerId = this.route.snapshot.paramMap.get('id') || '1';
    const offerIdNumber = parseInt(offerId);

    if (isNaN(offerIdNumber) || offerIdNumber < 1 || offerIdNumber > 20) {
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
          this.imageUrl = 'https://via.placeholder.com/375x180';
        }
      },
      (error) => {
        console.error('Error fetching offer:', error);
        this.offer = null;
        this.imageUrl = 'https://via.placeholder.com/375x180';
      }
    );
  }
}
