import { Component } from '@angular/core';
import { ChatAssistantComponent } from '../chat-assistant/chat-assistant.component';
import { CommonModule } from '@angular/common';
import { ChatAIComponent } from '../components/chat-ai/chat-ai.component';

@Component({
  selector: 'app-medical-question',
  standalone: true,
  imports: [ChatAssistantComponent,CommonModule,ChatAIComponent],
  templateUrl: './medical-question.component.html',
  styleUrls: ['./medical-question.component.css']
})
export class MedicalQuestionComponent {
  isChatOpen = false;
  isChatAiOpen = false;

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
  toggleChatAi() {
    this.isChatAiOpen = !this.isChatAiOpen;
  }
 

}