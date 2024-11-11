import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAdminDashboardComponent } from './hr-admin-dashboard.component';

describe('HrAdminDashboardComponent', () => {
  let component: HrAdminDashboardComponent;
  let fixture: ComponentFixture<HrAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrAdminDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
