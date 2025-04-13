import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceChinComponent } from './face-chin.component';

describe('FaceChinComponent', () => {
  let component: FaceChinComponent;
  let fixture: ComponentFixture<FaceChinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceChinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceChinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
