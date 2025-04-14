import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-question',
  imports: [],
  templateUrl: './medical-question.component.html',
  styleUrl: './medical-question.component.css'
})
export class MedicalQuestionComponent {
  constructor(private router: Router) { };
  goToChatAssistant() {
    this.router.navigate(['/chatAssistant']);
  }
}
