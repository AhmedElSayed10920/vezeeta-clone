import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalFillingsComponent } from './dental-fillings.component';

describe('DentalFillingsComponent', () => {
  let component: DentalFillingsComponent;
  let fixture: ComponentFixture<DentalFillingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentalFillingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentalFillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
