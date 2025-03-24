import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginForDoctorComponent } from './login-for-doctor/login-for-doctor.component';
import { SignupForDoctorComponent } from './signup-for-doctor/signup-for-doctor.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'loginForDoctor', component: LoginForDoctorComponent },
  { path: 'signupForDoctor', component: SignupForDoctorComponent },
  { path: 'contactUS', component: ContactUSComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
