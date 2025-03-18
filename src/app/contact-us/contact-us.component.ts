import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactUS',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent {
  name: string = '';
  mobile: string = '';
  email: string = '';
  comments: string = '';
  submitted: boolean = false;

  submitForm(contactForm: NgForm) {
    this.submitted = true;

    if (contactForm.invalid) {
      console.log('❌ Form has errors!');
      return;
    }

    console.log('✅ Form Submitted!', {
      name: this.name,
      mobile: this.mobile,
      email: this.email,
      comments: this.comments
    });
  }

  validateName(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      const inputValue = inputElement.value;
      const englishPattern = /^[A-Za-z\s]*$/; // فقط الحروف الإنجليزية والمسافات

      if (!englishPattern.test(inputValue)) {
        this.name = inputValue.replace(/[^A-Za-z\s]/g, ''); // إزالة الأحرف غير الإنجليزية
      }
    }
  }
}
