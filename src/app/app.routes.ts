import { AllOffersComponent } from './all-offers/all-offers.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginForDoctorComponent } from './login-for-doctor/login-for-doctor.component';
import { SignupForDoctorComponent } from './signup-for-doctor/signup-for-doctor.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { BeautyComponent } from './Specializations/beauty/beauty.component';
import { DentalCareComponent } from './Specializations/dental-care/dental-care.component';
import { FitnessComponent } from './Specializations/fitness/fitness.component';
import { GeneralSurgeryComponent } from './Specializations/general-surgery/general-surgery.component';
import { HairComponent } from './Specializations/hair/hair.component';
import { KidneyComponent } from './Specializations/kidney/kidney.component';
import { LaserComponent } from './Specializations/laser/laser.component';
import { ScansComponent } from './Specializations/scans/scans.component';
import { SkinComponent } from './Specializations/skin/skin.component';
import { SmileMakeoverComponent } from './Specializations/dental-care/smile-makeover/smile-makeover.component';
import { WhiteningComponent } from './Specializations/dental-care/whitening/whitening.component';
import { ImplantComponent } from './Specializations/dental-care/implant/implant.component';
import { CrownsBridgesComponent } from './Specializations/dental-care/crowns-bridges/crowns-bridges.component';
import { RadioGraphyComponent } from './Specializations/dental-care/radio-graphy/radio-graphy.component';
import { ChildrenComponent } from './Specializations/dental-care/children/children.component';
import { BracesComponent } from './Specializations/dental-care/braces/braces.component';
import { DentalFillingsComponent } from './Specializations/dental-care/dental-fillings/dental-fillings.component';
import { DentureComponent } from './Specializations/dental-care/denture/denture.component';
import { ToothExtractionComponent } from './Specializations/dental-care/tooth-extraction/tooth-extraction.component';
import { OtherDentalOffersComponent } from './Specializations/dental-care/other-dental-offers/other-dental-offers.component';
import { HairRemovalComponent } from './Specializations/laser/hair-removal/hair-removal.component';
import { HairLossTreatmentComponent } from './Specializations/hair/hair-loss-treatment/hair-loss-treatment.component';
import { HairTransplantComponent } from './Specializations/hair/hair-transplant/hair-transplant.component';
import { MesotherapyComponent } from './Specializations/skin/mesotherapy/mesotherapy.component';
import { SkinGlowComponent } from './Specializations/skin/skin-glow/skin-glow.component';
import { SkinPeelingComponent } from './Specializations/skin/skin-peeling/skin-peeling.component';
import { AcneScarsTreatmentComponent } from './Specializations/skin/acne-scars-treatment/acne-scars-treatment.component';
import { TattoosComponent } from './Specializations/skin/tattoos/tattoos.component';
import { SkinWhiteningComponent } from './Specializations/skin/skin-whitening/skin-whitening.component';
import { CelluliteComponent } from './Specializations/beauty/cellulite/cellulite.component';
import { StretchMarksComponent } from './Specializations/beauty/stretch-marks/stretch-marks.component';
import { FaceChinComponent } from './Specializations/beauty/face-chin/face-chin.component';
import { BreastComponent } from './Specializations/beauty/breast/breast.component';
import { LipsComponent } from './Specializations/beauty/lips/lips.component';
import { LiposuctionComponent } from './Specializations/beauty/liposuction/liposuction.component';
import { BodySculptingComponent } from './Specializations/beauty/body-sculpting/body-sculpting.component';
import { ButtComponent } from './Specializations/beauty/butt/butt.component';
import { WeightLossSurgeryComponent } from './Specializations/fitness/weight-loss-surgery/weight-loss-surgery.component';
import { WeightLossComponent } from './Specializations/fitness/weight-loss/weight-loss.component';
import { RehabilitationComponent } from './Specializations/fitness/rehabilitation/rehabilitation.component';
import { NutritionComponent } from './Specializations/fitness/nutrition/nutrition.component';
import { CtScanComponent } from './Specializations/scans/ct-scan/ct-scan.component';
import { KidneyDialysisComponent } from './Specializations/kidney/kidney-dialysis/kidney-dialysis.component';
import { AbdomenComponent } from './Specializations/general-surgery/abdomen/abdomen.component';
import { OncologicalComponent } from './Specializations/general-surgery/oncological/oncological.component';
import { EndocrineSurgeryComponent } from './Specializations/general-surgery/endocrine-surgery/endocrine-surgery.component';
import { SkinCareComponent } from './Specializations/skin/skin-care/skin-care.component';
<<<<<<< HEAD
import { ChatAssistantComponent } from './chat-assistant/chat-assistant.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { NoDoctorsComponent } from './no-doctors/no-doctors.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
=======
import { ObGynComponent } from './Specializations/ob-gyn/ob-gyn.component';
import { DeliveryComponent } from './Specializations/ob-gyn/delivery/delivery.component';
import { GastroImComponent } from './Specializations/gastro-im/gastro-im.component';
import { EndoscopesComponent } from './Specializations/gastro-im/endoscopes/endoscopes.component';
import { PsychiatryComponent } from './Specializations/psychiatry/psychiatry.component';
import { GeneralPsychiatryServicesComponent } from './Specializations/psychiatry/general-psychiatry-services/general-psychiatry-services.component';


>>>>>>> Mahmoud_Abdo
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'allOffers', component: AllOffersComponent },

  { path: 'dentalCare', component: DentalCareComponent },
  { path: 'smileMakeOver', component: SmileMakeoverComponent },
  { path: 'whitening', component: WhiteningComponent },
  { path: 'implant', component: ImplantComponent },
  { path: 'crownsBridges', component: CrownsBridgesComponent },
  { path: 'radioGraphy', component: RadioGraphyComponent },
  { path: 'children', component: ChildrenComponent },
  { path: 'braces', component: BracesComponent },
  { path: 'dentalFillings', component: DentalFillingsComponent },
  { path: 'denture', component: DentureComponent },
  { path: 'toothExtraction', component: ToothExtractionComponent },
  { path: 'otherDentalOffers', component: OtherDentalOffersComponent },
 
  { path: 'laser', component: LaserComponent },
  { path: 'hairRemoval', component: HairRemovalComponent },

  { path: 'hair', component: HairComponent },
  { path: 'hairLossTreatment', component: HairLossTreatmentComponent },
  { path: 'hairTransplant', component: HairTransplantComponent },

  { path: 'skin', component: SkinComponent },
  { path: 'mesotherapy', component: MesotherapyComponent },
  { path: 'skinGlow', component: SkinGlowComponent },
  { path: 'skinPeeling', component: SkinPeelingComponent },
  { path: 'acneScarsTreatment', component: AcneScarsTreatmentComponent },
  { path: 'tattoos', component: TattoosComponent },
  { path: 'skinWhitening', component: SkinWhiteningComponent },
  { path: 'skinCare', component: SkinCareComponent},


  { path: 'beauty', component: BeautyComponent },
  { path: 'cellulite', component: CelluliteComponent },
  { path: 'stretchMarks', component: StretchMarksComponent },
  { path: 'faceChin', component: FaceChinComponent },
  { path: 'breast', component: BreastComponent },
  { path: 'lips', component: LipsComponent },
  { path: 'liposuction', component:LiposuctionComponent },
  { path: 'bodySculpting', component: BodySculptingComponent },
  { path: 'butt', component: ButtComponent },

  { path: 'fitness', component: FitnessComponent },
  { path: 'weightLossSurgery', component: WeightLossSurgeryComponent },
  { path: 'weightLoss', component: WeightLossComponent },
  { path: 'rehabilitation', component:RehabilitationComponent },
  { path: 'nutrition', component: NutritionComponent },
  
  { path: 'scans', component: ScansComponent },
  { path: 'ctScan', component: CtScanComponent},

  { path: 'obGyn', component: ObGynComponent },
  { path: 'delivery', component: DeliveryComponent },


  { path: 'kidney', component: KidneyComponent },
  { path: 'kidneyDialysis', component: KidneyDialysisComponent },

  { path: 'generalSurgery', component: GeneralSurgeryComponent },
  { path: 'abdomen', component: AbdomenComponent},
  { path: 'oncologicalSurgery', component:OncologicalComponent },
  { path: 'endocrineSurgery', component: EndocrineSurgeryComponent },

  { path: 'gastroIm', component: GastroImComponent },
  { path: 'endoscopes', component:EndoscopesComponent},

  { path: 'psychiatry', component:PsychiatryComponent },
  { path: 'generalPsychiatryServices', component: GeneralPsychiatryServicesComponent},

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'loginForDoctor', component: LoginForDoctorComponent },
  { path: 'signupForDoctor', component: SignupForDoctorComponent },
  { path: 'contactUS', component: ContactUSComponent },
  { path: 'allDoctors', component: AllDoctorsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctorDetails/:id', component: DoctorDetailsComponent },
  { path: 'chatAssistant', component: ChatAssistantComponent },

  { path: 'doctors-list', component: DoctorsListComponent },
  { path: 'no-doctors', component: NoDoctorsComponent },
  { path: 'bookingPage', component: BookingPageComponent },

  
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
