import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDentalOffersComponent } from './other-dental-offers.component';

describe('OtherDentalOffersComponent', () => {
  let component: OtherDentalOffersComponent;
  let fixture: ComponentFixture<OtherDentalOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherDentalOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherDentalOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
