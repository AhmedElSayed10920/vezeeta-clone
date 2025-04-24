import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  OnInit,
} from '@angular/core';
import { GeminiService } from '../../services/gemini.service';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ChatMessage {
  role: 'user' | 'assistant' | 'bot';
  content: string;
  timestamp: Date;
}

@Component({
  selector: 'app-chat-ai',
  templateUrl: './chat-ai.component.html',
  styleUrls: ['./chat-ai.component.css'],
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, NgIf],
})
export class ChatAIComponent implements OnInit, AfterViewChecked {
  chatHistory: ChatMessage[] = [];
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  input: string = '';
  isTyping: boolean = false;
  isVisible: boolean = true;

  constructor(
    private geminiService: GeminiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.chatHistory.push({
      role: 'assistant',
      content: 'Hello! How can I assist you today?',
      timestamp: new Date(),
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  async sendMessage() {
    if (!this.input.trim()) return;

    this.chatHistory.push({
      role: 'user',
      content: this.input,
      timestamp: new Date(),
    });

    const userMessage = this.input;
    this.input = '';
    this.isTyping = true;

    try {
      const aiResponse = await this.geminiService.getChatResponse(userMessage);
      this.isTyping = false;

      this.chatHistory.push({
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error('Error getting response from Gemini:', error);
      this.isTyping = false;

      this.chatHistory.push({
        role: 'assistant',
        content:
          'Sorry, I encountered an error processing your request. Please try again.',
        timestamp: new Date(),
      });
    }
  }

  formatMessage(content: string): SafeHtml {
    let formatted = content.replace(
      /`([^`]+)`/g,
      '<code class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">$1</code>'
    );
    formatted = formatted.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" class="text-blue-500 underline">$1</a>'
    );
    formatted = formatted.replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }

  getRows(): number {
    const lineCount = (this.input.match(/\n/g) || []).length + 1;
    return Math.min(5, Math.max(1, lineCount));
  }

  handleEnterKey(event: Event): void {
    if (
      (event as KeyboardEvent).key === 'Enter' &&
      !(event as KeyboardEvent).shiftKey
    ) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  closeChat(): void {
    this.isVisible = false;
  }
}
