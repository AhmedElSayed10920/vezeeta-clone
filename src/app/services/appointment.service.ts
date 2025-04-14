import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apointmentUrl = 'https://localhost:7167/api/Appointments';
  private newPatient = 'https://localhost:7167/api/Patient/register';


  constructor(private http: HttpClient) { }

  bookAppointment(payload: {
    adate: string,
    atime: string,
    pid: number,
    cid: number,
    did: number
  }): Observable<any> {
    return this.http.post(this.apointmentUrl, payload);
  }
  createPatient(patientData: any) {
    return this.http.post<any>(this.newPatient, patientData);
  }
  getAppointmentsByPatientId(pid: number): Observable<any> {
    return this.http.get(`${this.apointmentUrl}/patient/${pid}`);
  }

}
