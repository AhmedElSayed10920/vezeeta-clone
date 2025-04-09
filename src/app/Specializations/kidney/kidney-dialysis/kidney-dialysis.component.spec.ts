import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidneyDialysisComponent } from './kidney-dialysis.component';

describe('KidneyDialysisComponent', () => {
  let component: KidneyDialysisComponent;
  let fixture: ComponentFixture<KidneyDialysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidneyDialysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidneyDialysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
