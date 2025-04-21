import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUSComponent {
  name: string = '';
  mobile: string = '';
  email: string = '';
  comments: string = '';
  submitted: boolean = false;

  constructor(private contactService: ContactService) {}

  submitForm(contactForm: any) {
    if (contactForm.valid) {
      const contactData = {
        name: this.name,
        mobile: this.mobile,
        email: this.email,
        comments: this.comments,
      };

      // تأكد من أن اسم الميثود صحيح
      this.contactService.submitContactForm(contactData).subscribe(
        (response: any) => {
          // تأكد من نوع البيانات هنا
          console.log('Form submitted successfully!', response);
          this.submitted = true;
        },
        (error: any) => {
          // تأكد من نوع البيانات هنا
          console.log('Error submitting form:', error);
        }
      );
    }
  }

  validateName(event: any) {
    const regex = /^[A-Za-z\s]{3,}$/;
    if (!regex.test(event.target.value)) {
      console.log('Invalid name format');
    }
  }
}
