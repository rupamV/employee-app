import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAdminAttendanceComponent } from './hr-admin-attendance.component';

describe('HrAdminAttendanceComponent', () => {
  let component: HrAdminAttendanceComponent;
  let fixture: ComponentFixture<HrAdminAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrAdminAttendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrAdminAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
