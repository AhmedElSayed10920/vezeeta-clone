import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGraphyComponent } from './radio-graphy.component';

describe('RadioGraphyComponent', () => {
  let component: RadioGraphyComponent;
  let fixture: ComponentFixture<RadioGraphyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGraphyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioGraphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
