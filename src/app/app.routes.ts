import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginForDoctorComponent } from './login-for-doctor/login-for-doctor.component';
import { SignupForDoctorComponent } from './signup-for-doctor/signup-for-doctor.component';
import { ContactUSComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'loginForDoctor', component: LoginForDoctorComponent },
  { path: 'signupForDoctor', component: SignupForDoctorComponent },
  { path: 'contactUS', component: ContactUSComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
