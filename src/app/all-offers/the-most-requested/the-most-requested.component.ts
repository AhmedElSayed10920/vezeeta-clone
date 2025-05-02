import { Component } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service';

@Component({
  selector: 'app-the-most-requested',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule],
  templateUrl: './the-most-requested.component.html',
  styleUrls: ['./the-most-requested.component.css'],
})
export class TheMostRequestedComponent {
  services: Service[] = [
    {
      id: 1,
      discount: 30,
      image:
        '/images/offerImage/1.png',
      title: 'BFM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 5,
      reviewCount: 3,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 600,
      offersLink: `/offers/1`,

    },
    {
      id: 2,
      discount: 40,
      image:
        '/images/offerImage/2.png',
      title: 'Hollywood Smile with Veneers',
      description: '10 Tooth Hollywood Smile with Veneers',
      rating: 5,
      reviewCount: 5,
      bookedCount: 3,
      originalPrice: 4000,
      discountPrice: 1600,
      offersLink: `/offers/2`,

    },
    {
      id: 3,
      discount: 50,
      image:
        '/images/offerImage/3.png',
      title: 'Gingvectomy by laser',
      description: '1 Session Gum cuts with laser without pain',
      rating: 5,
      reviewCount: 40,
      bookedCount: 3,
      originalPrice: 2000,
      discountPrice: 1000,
      offersLink: `/offers/3`,

    },
    {
      id: 4,
      discount: 20,
      image:
        '/images/offerImage/4.png',
      title: 'Gum cuts with laser without pain',
      description: '1 Session Gum cuts with laser without pain',
      rating: 5,
      reviewCount: 12,
      bookedCount: 58,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/4`,

    },
    {
      id: 11,
      discount: 20,
      image:
      '/images/offerImage/11.png',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/11`,
      
    },
    {
      id: 12,
      discount: 50,
      image:
        '/images/offerImage/12.png',
      title: 'BPM crown installation',
      description: '1 Crown BFM crown installation',
      rating: 5,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 2000,
      discountPrice: 1000,
      offersLink: `/offers/12`,

    },
    {
      id: 13,
      discount: 50,
      image: '/images/offerImage/13.png',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/13`,
      
    },
    {
      id: 14,
      discount: 20,
      image:
      '/images/offerImage/14.png',
      title: 'Laser teeth whitening',
      description: '1 Session Laser teeth whitening',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/14`,

    },
    {
      id: 15,
      discount: 40,
      image:
        '/images/offerImage/15.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 4,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 640,
      offersLink: `/offers/15`,
      
    },
    {
      id: 5,
      discount: 50,
      image:
        '/images/offerImage/5.png',
      title: 'Shine Bright like Hollywood Stars',
      description: '1 Tooth Hollywood Smile with Veneers',
      rating: 5,
      reviewCount: 0,
      bookedCount: 0,
      originalPrice: 5500,
      discountPrice: 2750,
      offersLink: `/offers/5`,

    },
    {
      id: 6,
      discount: 20,
      image:
        '/images/offerImage/6.png',
      title: 'Hollywood Smile with Diremposite Veneer',
      description: '1 Tooth Hollywood Smile with Direct Composite Veneer',
      rating: 4.55,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/6`,

    },
    {
      id: 7,
      discount: 40,
      image:
        '/images/offerImage/7.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 640,
      offersLink: `/offers/7`,

    },
    {
      id: 8,
      discount: 20,
      image:
        '/images/offerImage/8.png',
      title: 'Hollywood Smile with Diremposite Veneer',
      description: '1 Tooth Hollywood Smile with Direct Composite Veneer',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/8`,

    },
    {
      id: 9,
      discount: 40,
      image:
        '/images/offerImage/9.png',
      title: 'Scaling and Polishing',
      description: '1 Session Scaling and Polishing',
      rating: 4,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1600,
      discountPrice: 640,
      offersLink: `/offers/9`,

    },
    {
      id: 10,
      discount: 50,
      image:
        '/images/offerImage/10.png',
      title: 'Composite white filling',
      description: '1 Session Composite Filling',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1600,
      discountPrice: 800,
      offersLink: `/offers/10`,

    },
    {
      id: 16,
      discount: 33,
      image:
        '/images/offerImage/16.png',
      title: 'Silver diamond',
      description: '1 Tooth Silver diamond installation',
      rating: 3.5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 660,
      offersLink: `/offers/16`,

    },

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

    {
      id: 1,
      discount: 20,
      image:
        '/images/offerImage/24.png',
      title: 'Mesotherapy for hair fall treatment',
      description: '1 Session Stem cells for Hair',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1900,
      discountPrice: 380,
      offersLink: `/offers/24`,
    },
    {
      id: 2,
      discount: 57,
      image:
        '/images/offerImage/26.png',
      title: 'German plasma for face',
      description: '1 Session Plasma injection',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 2000,
      discountPrice: 1140,
      offersLink: `/offers/26`,
    },
    {
      id: 3,
      discount: 25,
      image:
        '/images/offerImage/27.png',
      title: 'Hair fall & AGA treatment',
      description: '4 Session Plasma hair injection',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 4000,
      discountPrice: 1000,
      offersLink: `/offers/27`,
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
      id: 1,
      discount: 20,
      image: '/images/offerImage/60.png',
      title: 'Ghasil alkulaa',
      description: '1 Session Dialysis',
      rating: 5,
      reviewCount: 409,
      bookedCount: 7,
      originalPrice: 3000,
      discountPrice: 600,
      offersLink: `/offers/66`,
    },

    {
      id: 17,
      discount: 20,
      image:
        '/images/offerImage/17.png',
      title: 'Special offer: hair removal of half the hands, 450 pounds',
      description: '1 Session Laser Hair Removal',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 688,
      discountPrice: 138,
      offersLink: `/offers/17`,
    },
    {
      id: 18,
      discount: 20,
      image:
        '/images/offerImage/18.png',
      title: 'Laser Hair removal Of Half Arms',
      description: '1 Session Laser Hair Removal',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 1750,
      discountPrice: 350,
      offersLink: `/offers/18`,
    },
    {
      id: 19,
      discount: 54,
      image:
        '/images/offerImage/19.png',
      title: 'Laser hair removal of bikini',
      description: '1 Session Laser Hair Removal for bikini',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 400,
      discountPrice: 216,
      offersLink: `/offers/19`,
    },
    {
      id: 20,
      discount: 20,
      image:
        '/images/offerImage/20.png',
      title: 'Special offer for mens area for 600 pound',
      description: '1 Session Legs Laser Hair Removal',
      rating: 3,
      reviewCount: 10,
      bookedCount: 25,
      originalPrice: 750,
      discountPrice: 150,
      offersLink: `/offers/20`,
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
      id: 22,
      discount: 45,
      image:
        '/images/offerImage/22.png',
      title: 'Laser hair removal Candela bekini and under arm',
      description: '1 Session Laser Hair Removal for Sensitive Areas',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 650,
      discountPrice: 293,
      offersLink: `/offers/22`,
    },
    {
      id: 23,
      discount: 20,
      image:
        '/images/offerImage/23.png',
      title: 'A special offer, the bean session started at 950 pounds',
      description: '1 Session Full Body Laser Hair Removal',
      rating: 4,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 1250,
      discountPrice: 250,
      offersLink: `/offers/23`,
    },
    {
      id: 24,
      discount: 50,
      image:
        '/images/offerImage/24.png',
      title: 'Laser hair removal face',
      description: '1 Session Face Laser Hair Removal',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 300,
      discountPrice: 150,
      offersLink: `/offers/24`,
    },

    {
      id: 25,
      discount: 50,
      image:
        '/images/offerImage/25.png',
      title: 'Laser hair removal face',
      description: '1 Session Face Laser Hair Removal',
      rating: 5,
      reviewCount: 0,
      bookedCount: 25,
      originalPrice: 1000,
      discountPrice: 750,
      offersLink: `/offers/25`,
    },

    {
      id: 1,
      discount: 20,
      image:
        '/images/offerImage/58.png',
      title: 'Normal vaginal delivery',
      description: '1 Surgery Normal vaginal delivery',
      rating: 5,
      reviewCount: 409,
      bookedCount: 7,
      originalPrice: 5250,
      discountPrice: 1050,
      offersLink: `/offers/64`,
    },
    {
      id: 2,
      discount: 20,
      image:
        '/images/offerImage/59.png',
      title: 'Caesarean section',
      description: '1 Surgery Caesarean section',
      rating: 5,
      reviewCount: 409,
      bookedCount: 7,
      originalPrice: 6500,
      discountPrice: 1300,
      offersLink: `/offers/65`,
    },
    {
      id: 1,
      discount: 50,
      image:
        '/images/offerImage/71.png',
      title: 'Complete Course Psychoanalysis 24 sessions',
      description: '24 Sessions Psychoanalysis session, Specialist',
      rating: 5,
      reviewCount: 200,
      bookedCount: 20,
      originalPrice: 40000,
      discountPrice: 20000,
      offersLink: `/offers/77`,

    },

    {
      id: 1,
      discount: 20,
      image:
        '/images/offerImage/57.png',
      title: 'CBCT',
      description: '1 Scan Dental CT scan',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 2000,
      discountPrice: 400,
      offersLink: `/offers/63`,

    },

    {
      id: 1,
      discount: 20,
      image:
        '/images/offerImage/29.png',
      title: '20% off for more glowy &healthy skin with New RRS techniques',
      description: '1 Session Stem cells skin care',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 6000,
      discountPrice: 1200,
      offersLink: `/offers/29`,
    },
    {
      id: 2,
      discount: 50,
      image:
        '/images/offerImage/30.png',
      title: 'Tatto removal',
      description: '1 Session Laser tattoo removal',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 2000,
      discountPrice: 1000,
      offersLink: `/offers/30`,
    },
    {
      id: 3,
      discount: 30,
      image:
        '/images/offerImage/31.png',
      title: 'Carbon laser',
      description: '1 Session Carbon laser',
      rating: 3.5,
      reviewCount: 12,
      bookedCount: 371,
      originalPrice: 1000,
      discountPrice: 300,
      offersLink: `/offers/31`,
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
      id: 5,
      discount: 57,
      image:
        '/images/offerImage/26.png',
      title: 'German plasma for face',
      description: '1 Session Plasma injection',
      rating: 5,
      reviewCount: 3,
      bookedCount: 15,
      originalPrice: 2000,
      discountPrice: 1140,
      offersLink: `/offers/26`,
    },
    {
      id: 6,
      discount: 33,
      image:
        '/images/offerImage/33.png',
      title: 'Skin booster for whitening, glow and skin rejuvenation',
      description: '1 Session Stem cells skin care',
      rating: 4.5,
      reviewCount: 0,
      bookedCount: 8,
      originalPrice: 1200,
      discountPrice: 396,
      offersLink: `/offers/33`,
    },
    {
      id: 7,
      discount: 20,
      image:
        '/images/offerImage/34.png',
      title: 'Special discount on skin cleaning 450 pounds',
      description: '1 Session Facial Cleansing',
      rating: 4,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 563,
      discountPrice: 113,
      offersLink: `/offers/34`,
    },
    {
      id: 8,
      discount: 20,
      image:
        '/images/offerImage/35.png',
      title: '3 sessions of cold peeling to face or sensitive area',
      description: '3 Session Face peeling',
      rating: 5,
      reviewCount: 200,
      bookedCount: 1545,
      originalPrice: 3000,
      discountPrice: 600,
      offersLink: `/offers/35`,
    },
    {
      id: 9,
      discount: 50,
      image:
        '/images/offerImage/36.png',
      title: 'Resistant scar treatment',
      description: '1 Session Mesotherapy for face',
      rating: 4.5,
      reviewCount: 40,
      bookedCount: 570,
      originalPrice: 6000,
      discountPrice: 3000,
      offersLink: `/offers/36`,
    },

  ];


  currentPage = 1;
  itemsPerPage = 9;

  getNumberArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i + 1);
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

