import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmessagesComponent } from './contactmessages.component';

describe('ContactmessagesComponent', () => {
  let component: ContactmessagesComponent;
  let fixture: ComponentFixture<ContactmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactmessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
