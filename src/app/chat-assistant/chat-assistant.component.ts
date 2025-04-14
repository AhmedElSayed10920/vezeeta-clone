import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiAssistantChatbotService } from '../services/ai-assistant-chatbot.service';

@Component({
  selector: 'app-chat-assistant',
  imports: [CommonModule,FormsModule],
  templateUrl: './chat-assistant.component.html',
  styleUrl: './chat-assistant.component.css'
})
export class ChatAssistantComponent {
  constructor(private aiAssistantChatbot : AiAssistantChatbotService) { }
  messages = [
    { text: 'Hello! Can you describe the symptoms you are experiencing?', sender: 'bot' }
  ];

  userInput = '';

  sendMessage() {
    const text = this.userInput.trim();
    if (!text) return;

    this.messages.push({ text, sender: 'user' });
    this.userInput = '';

    this.aiAssistantChatbot.analyzeSymptoms(text)
    .subscribe({
      next: (res) => {
        const reply = `Possible Condition: ${res.condition}\nRecommended Specialty: ${res.specialty}`;
        this.messages.push({ text: reply, sender: 'bot' });
      },
      error: (err) => {
        console.error(err);
        this.messages.push({ text: '❌ An error occurred while analyzing the symptoms. Please try again.', sender: 'bot' });
      }
    });
  
  }

  recognition: any;
  ngOnInit() {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;

    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'ar-SA'; 
      this.recognition.interimResults = false;

      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        this.userInput += (this.userInput ? ' ' : '') + transcript;
      };

      this.recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
      };
    } else {
      console.warn("Speech Recognition غير مدعومة في هذا المتصفح.");
    }
  }

  startListening() {
    if (this.recognition) {
      this.recognition.start();
    }
  }

}
