import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObGynComponent } from './ob-gyn.component';

describe('ObGynComponent', () => {
  let component: ObGynComponent;
  let fixture: ComponentFixture<ObGynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObGynComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObGynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
