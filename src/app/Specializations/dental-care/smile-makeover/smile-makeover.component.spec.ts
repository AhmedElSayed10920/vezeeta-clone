import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileMakeoverComponent } from './smile-makeover.component';

describe('SmileMakeoverComponent', () => {
  let component: SmileMakeoverComponent;
  let fixture: ComponentFixture<SmileMakeoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmileMakeoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmileMakeoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
