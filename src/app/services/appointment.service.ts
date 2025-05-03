import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StripeService } from '../stripe.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apointmentUrl = 'https://localhost:7167/api/Appointments';
  private newPatient = 'https://localhost:7167/api/Patient/register';


  constructor(
    private http: HttpClient,
    private stripeService: StripeService
  ) {}

  bookAppointment(payload: {
    adate: string,
    atime: string,
    pid: number,
    cid: number,
    did: number,
    captchaToken: string,

  }): Observable<any> {
    return this.http.post(this.apointmentUrl, payload);
  }

  createPatient(patientData: any) {
    return this.http.post<any>(this.newPatient, patientData);
  }

  getAppointmentsByPatientId(pid: number): Observable<any> {
    return this.http.get(`${this.apointmentUrl}/patient/${pid}`);
  }

  deleteAppointment(id: number): Observable<any> {
    const url = `${this.apointmentUrl}/${id}`;
    return this.http.delete(url);
  }
/////////////////////////////////////
  refundPayment(paymentIntentId: string) {
    return this.http.post<any>('https://localhost:7167/api/payment/refund', {
      paymentIntentId
    });
  }
//////////////////////////////////////


}

