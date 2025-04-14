import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiAssistantChatbotService {

  private apiUrl = 'https://localhost:7167/api/MedicalAssistant/analyze'; 

  constructor(private http: HttpClient) {}

  analyzeSymptoms(description: string): Observable<any> {
    const body = { description };
    return this.http.post<any>(this.apiUrl, body);
  }
}
