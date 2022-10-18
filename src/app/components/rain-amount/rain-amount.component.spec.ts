import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainAmountComponent } from './rain-amount.component';

describe('RainAmountComponent', () => {
  let component: RainAmountComponent;
  let fixture: ComponentFixture<RainAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RainAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
