import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentureComponent } from './denture.component';

describe('DentureComponent', () => {
  let component: DentureComponent;
  let fixture: ComponentFixture<DentureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
