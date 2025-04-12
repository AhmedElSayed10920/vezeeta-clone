import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcneScarsTreatmentComponent } from './acne-scars-treatment.component';

describe('AcneScarsTreatmentComponent', () => {
  let component: AcneScarsTreatmentComponent;
  let fixture: ComponentFixture<AcneScarsTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcneScarsTreatmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcneScarsTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
