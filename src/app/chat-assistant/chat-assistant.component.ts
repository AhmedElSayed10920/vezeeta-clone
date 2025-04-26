import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AiAssistantChatbotService } from '../services/ai-assistant-chatbot.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-assistant.component.html',
  styleUrls: ['./chat-assistant.component.css']
})
export class ChatAssistantComponent implements OnInit {
  messages = [
    {
      text: 'Hello! Can you describe the symptoms you are experiencing?',
      sender: 'bot'
    }
  ];

  @Output() closePopup = new EventEmitter<void>();

  userInput = '';
  recognition: any;
  language: string = 'ar-SA';
  isRecording = false;

  constructor(private aiAssistantChatbot: AiAssistantChatbotService) {}

  ngOnInit() {
    this.initSpeechRecognition();
  }

  initSpeechRecognition() {
    const SpeechRecognition =
      (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;

    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = this.language;
      this.recognition.interimResults = false;

      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        this.userInput += (this.userInput ? ' ' : '') + transcript;
      };

      this.recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        this.isRecording = false;
      };

      this.recognition.onend = () => {
        this.isRecording = false;
      };
    } else {
      console.warn('Speech Recognition غير مدعومة في هذا المتصفح.');
    }
  }

  sendMessage() {
    const text = this.userInput.trim();
    if (!text) return;

    this.messages.push({ text, sender: 'user' });
    this.userInput = '';

    this.aiAssistantChatbot.analyzeSymptoms(text).subscribe({
      next: (res) => {
        const reply = `Possible Condition: ${res.condition}\nRecommended Specialty: ${res.specialty}`;
        this.messages.push({ text: reply, sender: 'bot' });
      },
      error: (err) => {
        console.error(err);
        this.messages.push({
          text: '❌ An error occurred while analyzing the symptoms. Please try again.',
          sender: 'bot'
        });
      }
    });
  }

  startListening() {
    if (this.recognition) {
      this.isRecording = true;
      this.recognition.start();
    }
  }

  changeLanguage(language: string) {
    this.language = language;
    if (this.recognition) {
      this.recognition.lang = this.language;
    }
  }
  close() {
    this.closePopup.emit();
  }
}