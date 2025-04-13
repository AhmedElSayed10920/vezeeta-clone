import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndocrineSurgeryComponent } from './endocrine-surgery.component';

describe('EndocrineSurgeryComponent', () => {
  let component: EndocrineSurgeryComponent;
  let fixture: ComponentFixture<EndocrineSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndocrineSurgeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndocrineSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
