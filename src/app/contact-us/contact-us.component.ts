import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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

  constructor(private contactService: ContactService) {}

  submitForm(contactForm: any) {
    if (contactForm.valid) {
      const contactData = {
        name: this.name,
        mobile: this.mobile,
        email: this.email,
        comments: this.comments,
      };

      this.contactService.submitContactForm(contactData).subscribe(
        (response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent',
            text: 'Your message has been sent successfully!',
            confirmButtonColor: '#3085d6',
          }).then(() => {
            this.resetForm();
            contactForm.resetForm(); // Reset Angular form state
          });
        },
        (error: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'There was an error submitting the form. Please try again later.',
            confirmButtonColor: '#d33',
          });
        }
      );
    }
  }

  resetForm() {
    this.name = '';
    this.mobile = '';
    this.email = '';
    this.comments = '';
  }

  validateName(event: any) {
    const regex = /^[A-Za-z\s]{3,}$/;
    if (!regex.test(event.target.value)) {
      console.log('Invalid name format');
    }
  }
}
