import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicOffersComponent } from './clinic-offers.component';

describe('ClinicOffersComponent', () => {
  let component: ClinicOffersComponent;
  let fixture: ComponentFixture<ClinicOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
