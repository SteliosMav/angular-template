import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDetailCardComponent } from './report-detail-card.component';

describe('ReportDetailCardComponent', () => {
  let component: ReportDetailCardComponent;
  let fixture: ComponentFixture<ReportDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportDetailCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
