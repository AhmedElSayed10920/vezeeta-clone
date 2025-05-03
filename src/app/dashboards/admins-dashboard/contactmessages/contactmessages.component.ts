import { Component } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactmessages',
  imports: [CommonModule],
  templateUrl: './contactmessages.component.html',
  styleUrl: './contactmessages.component.css'
})
export class ContactmessagesComponent {
  contactMessages: any[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  totalMessages: number = 0;
  paginatedMessages: any[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.contactService.getAllMessages().subscribe({
      next: (response) => {
        console.log('Messages received:', response);
        this.contactMessages = response || [];
        this.totalMessages = this.contactMessages.length;
        this.updatePaginatedMessages();
      },
      error: (error) => {
        console.error('Error fetching messages:', error);
      }
    });
  }
  
  deleteMessage(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This message will be permanently deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactService.deleteMessage(id).subscribe({
          next: () => {
            this.contactMessages = this.contactMessages.filter(msg => msg.id !== id);
            this.totalMessages = this.contactMessages.length;
  
            const maxPage = Math.ceil(this.totalMessages / this.pageSize);
            if (this.currentPage > maxPage) {
              this.currentPage = maxPage;
            }
  
            this.updatePaginatedMessages();
  
            Swal.fire('Deleted!', 'Message has been deleted.', 'success');
          },
          error: (err) => {
            console.error('Error deleting message:', err);
            Swal.fire('Error!', 'Error deleting message.', 'error');
          }
        });
      }
    });
  }
  
  
  updatePaginatedMessages(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedMessages = this.contactMessages.slice(startIndex, endIndex);
    console.log('Paginated Messages:', this.paginatedMessages); // للتحقق
  }
  

  nextPage(): void {
    if (this.currentPage * this.pageSize < this.totalMessages) {
      this.currentPage++;
      this.updatePaginatedMessages();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedMessages();
    }
  }
}
