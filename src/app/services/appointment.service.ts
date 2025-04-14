import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'https://localhost:7167/api/Appointments';

  constructor(private http: HttpClient) {}

  bookAppointment(payload: {
    adate: string,
    atime: string,
    pid: number,
    cid: number,
    did: number
  }): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
