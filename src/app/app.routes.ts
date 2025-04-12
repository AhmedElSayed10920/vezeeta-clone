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
import { ChatAssistantComponent } from './chat-assistant/chat-assistant.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'allOffers', component: AllOffersComponent },
  { path: 'beauty', component: BeautyComponent },
  { path: 'dentalCare', component: DentalCareComponent },
  { path: 'fitness', component: FitnessComponent },
  { path: 'generalSurgery', component: GeneralSurgeryComponent },
  { path: 'hair', component: HairComponent },
  { path: 'kidney', component: KidneyComponent },
  { path: 'laser', component: LaserComponent },
  { path: 'scans', component: ScansComponent },
  { path: 'skin', component: SkinComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'loginForDoctor', component: LoginForDoctorComponent },
  { path: 'signupForDoctor', component: SignupForDoctorComponent },
  { path: 'contactUS', component: ContactUSComponent },
  { path: 'allDoctors', component: AllDoctorsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctorDetails/:id', component: DoctorDetailsComponent },
  { path: 'chatAssistant', component: ChatAssistantComponent },

  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
