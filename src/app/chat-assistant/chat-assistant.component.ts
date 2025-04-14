import { Component, OnInit } from '@angular/core';
import { AiAssistantChatbotService } from '../services/ai-assistant-chatbot.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-assistant',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-assistant.component.html',
  styleUrls: ['./chat-assistant.component.css'],
})
export class ChatAssistantComponent implements OnInit {
  messages = [
    {
      text: 'Hello! Can you describe the symptoms you are experiencing?',
      sender: 'bot',
    },
  ];

  userInput = '';
  recognition: any;
  language: string = 'ar-SA'; // اللغة الافتراضية هي العربية
  isRecording = false; // حالة تسجيل الصوت

  constructor(private aiAssistantChatbot: AiAssistantChatbotService) {}

  ngOnInit() {
    this.initSpeechRecognition(); // تهيئة التعرف على الصوت بعد تحميل المكون
  }

  // تهيئة التعرف على الصوت بناءً على اللغة المختارة
  initSpeechRecognition() {
    const SpeechRecognition =
      (window as any).webkitSpeechRecognition ||
      (window as any).SpeechRecognition;

    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = this.language; // تحديد اللغة بناءً على القيمة المختارة
      this.recognition.interimResults = false;

      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        this.userInput += (this.userInput ? ' ' : '') + transcript;
      };

      this.recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        this.isRecording = false; // إيقاف حالة التسجيل في حالة حدوث خطأ
      };

      this.recognition.onend = () => {
        this.isRecording = false; // إيقاف حالة التسجيل عند نهاية التسجيل
      };
    } else {
      console.warn('Speech Recognition غير مدعومة في هذا المتصفح.');
    }
  }

  // إرسال الرسالة
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
          sender: 'bot',
        });
      },
    });
  }

  // بدء الاستماع للميكروفون
  startListening() {
    if (this.recognition) {
      this.isRecording = true; // تفعيل حالة التسجيل
      this.recognition.start();
    }
  }

  // تغيير اللغة (يمكنك إضافة زر لتغيير اللغة بين العربية والإنجليزية)
  changeLanguage(language: string) {
    this.language = language;
    if (this.recognition) {
      this.recognition.lang = this.language; // تغيير اللغة في حالة تغيير الاختيار
    }
  }

  stopRecording() {
    this.isRecording = false;
  }
}
