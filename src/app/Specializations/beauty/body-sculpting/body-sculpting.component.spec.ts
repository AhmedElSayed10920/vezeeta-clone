import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySculptingComponent } from './body-sculpting.component';

describe('BodySculptingComponent', () => {
  let component: BodySculptingComponent;
  let fixture: ComponentFixture<BodySculptingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodySculptingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodySculptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
