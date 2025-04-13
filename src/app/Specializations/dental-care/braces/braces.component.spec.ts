import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracesComponent } from './braces.component';

describe('BracesComponent', () => {
  let component: BracesComponent;
  let fixture: ComponentFixture<BracesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BracesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
