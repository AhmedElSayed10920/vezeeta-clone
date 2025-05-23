import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://localhost:7167/api/ContactUs';

  constructor(private http: HttpClient) {}

  submitContactForm(contactData: any): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }

  getAllMessages(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteMessage(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
