import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustmentRequestComponent } from './adjustment-request.component';

describe('AdjustmentRequestComponent', () => {
  let component: AdjustmentRequestComponent;
  let fixture: ComponentFixture<AdjustmentRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjustmentRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjustmentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
