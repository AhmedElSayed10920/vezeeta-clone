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
import { SlidesComponent } from './all-offers/slides/slides.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'allOffers', component: AllOffersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'loginForDoctor', component: LoginForDoctorComponent },
  { path: 'signupForDoctor', component: SignupForDoctorComponent },
  { path: 'contactUS', component: ContactUSComponent },
  { path: 'allDoctors', component: AllDoctorsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctorDetails/:id', component: DoctorDetailsComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
