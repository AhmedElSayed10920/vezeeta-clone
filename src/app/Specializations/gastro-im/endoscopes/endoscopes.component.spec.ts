import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndoscopesComponent } from './endoscopes.component';

describe('EndoscopesComponent', () => {
  let component: EndoscopesComponent;
  let fixture: ComponentFixture<EndoscopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndoscopesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndoscopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
