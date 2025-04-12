import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightLossSurgeryComponent } from './weight-loss-surgery.component';

describe('WeightLossSurgeryComponent', () => {
  let component: WeightLossSurgeryComponent;
  let fixture: ComponentFixture<WeightLossSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightLossSurgeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightLossSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
