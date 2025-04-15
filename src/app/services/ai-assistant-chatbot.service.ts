import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AiAssistantChatbotService {
  private apiUrl = 'https://localhost:7167/api/MedicalAssistant/analyze'; // رابط الـ API

  constructor(private http: HttpClient) {}

  analyzeSymptoms(description: string): Observable<any> {
    const body = { description };
    return this.http.post<any>(this.apiUrl, body); // إرسال الطلب مع الوصف
  }
}
