import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScansComponent } from './scans.component';

describe('ScansComponent', () => {
  let component: ScansComponent;
  let fixture: ComponentFixture<ScansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
