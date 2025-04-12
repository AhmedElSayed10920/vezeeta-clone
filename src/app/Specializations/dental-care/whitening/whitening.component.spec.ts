import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteningComponent } from './whitening.component';

describe('WhiteningComponent', () => {
  let component: WhiteningComponent;
  let fixture: ComponentFixture<WhiteningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
