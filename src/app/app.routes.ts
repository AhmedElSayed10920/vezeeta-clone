import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginForDoctorComponent } from './login-for-doctor/login-for-doctor.component'

export const routes: Routes = [
  
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  }
  , {
    path: "loginForDoctor",
    component: LoginForDoctorComponent
  }
];
