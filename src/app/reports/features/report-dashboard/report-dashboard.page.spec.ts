import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDashboardPage } from './report-dashboard.page';

describe('ReportDashboardPage', () => {
  let component: ReportDashboardPage;
  let fixture: ComponentFixture<ReportDashboardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportDashboardPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
