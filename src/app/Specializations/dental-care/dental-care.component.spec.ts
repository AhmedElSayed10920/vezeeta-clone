import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalCareComponent } from './dental-care.component';

describe('DentalCareComponent', () => {
  let component: DentalCareComponent;
  let fixture: ComponentFixture<DentalCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentalCareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentalCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
