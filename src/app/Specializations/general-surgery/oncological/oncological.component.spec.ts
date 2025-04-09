import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OncologicalComponent } from './oncological.component';

describe('OncologicalComponent', () => {
  let component: OncologicalComponent;
  let fixture: ComponentFixture<OncologicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OncologicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OncologicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
