import { TestBed } from '@angular/core/testing';

import { AiAssistantChatbotService } from './ai-assistant-chatbot.service';

describe('AiAssistantChatbotService', () => {
  let service: AiAssistantChatbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiAssistantChatbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
