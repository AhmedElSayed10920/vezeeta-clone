import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchMarksComponent } from './stretch-marks.component';

describe('StretchMarksComponent', () => {
  let component: StretchMarksComponent;
  let fixture: ComponentFixture<StretchMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StretchMarksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StretchMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
