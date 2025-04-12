import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairLossTreatmentComponent } from './hair-loss-treatment.component';

describe('HairLossTreatmentComponent', () => {
  let component: HairLossTreatmentComponent;
  let fixture: ComponentFixture<HairLossTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairLossTreatmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairLossTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
