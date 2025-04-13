import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastroImComponent } from './gastro-im.component';

describe('GastroImComponent', () => {
  let component: GastroImComponent;
  let fixture: ComponentFixture<GastroImComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastroImComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastroImComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
