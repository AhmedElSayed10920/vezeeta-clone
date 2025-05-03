import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactmessagesComponent } from "../contactmessages/contactmessages.component";
import { NewdoctorsVerificationComponent } from "../newdoctors-verification/newdoctors-verification.component";
import { AlldoctorsComponent } from "../alldoctors/alldoctors.component";

@Component({
  selector: 'app-admin-dashboard',
  imports: [MatTabsModule , ContactmessagesComponent, NewdoctorsVerificationComponent, AlldoctorsComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
