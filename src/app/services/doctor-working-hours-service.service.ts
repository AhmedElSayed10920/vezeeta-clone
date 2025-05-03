import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DoctorWorkingHour {
  id?: number;
  dayOfWeek: Date;
  startTime: string;  // "HH:mm"
  endTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class DoctorWorkingHoursService {
  private apiUrl = 'https://localhost:7167/api/DoctorWorkingHours'; // عدّل حسب سيرفرك

  constructor(private http: HttpClient) { }


  getByDoctor(): Observable<DoctorWorkingHour[]> {
    const token = localStorage.getItem('doctorToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<DoctorWorkingHour[]>(`${this.apiUrl}/GetMyWorkingHours`, { headers });
  }

  add(hour: DoctorWorkingHour): Observable<any> {
    const token = localStorage.getItem('doctorToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(this.apiUrl, hour, { headers });
  }

  update(id: number, hour: DoctorWorkingHour): Observable<any> {
    const token = localStorage.getItem('doctorToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${this.apiUrl}/${id}`, hour, { headers });
  }

  delete(id: number): Observable<any> {
    const token = localStorage.getItem('doctorToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }
}
