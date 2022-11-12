import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportDashboardFacade } from '../../data-access/+state/report-dashboard.facade';

@Component({
  templateUrl: './report-dashboard.page.html',
  styleUrls: ['./report-dashboard.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportDashboardPage implements OnInit {
  effects$ = this.reportDashboardFacade.effects$;

  viewModel$ = this.reportDashboardFacade.viewModel$;

  onFilter() {
    const filters = { isPublished: true };
    this.reportDashboardFacade.filter(filters);
  }

  onLoadMore() {
    this.reportDashboardFacade.loadMore();
  }

  onAction(action: 'VIEW' | 'EDIT' | 'REMOVE', id: string) {
    switch (action) {
      case 'VIEW':
        this.router.navigateByUrl(`reports/${id}`);
        break;
      case 'EDIT':
        this.router.navigateByUrl(`reports/editor/${id}`);
        break;
      case 'REMOVE':
        const isConfirmed = confirm(
          'Are you sure you want to delete this report report?'
        );
        if (isConfirmed) this.reportDashboardFacade.removeReport(id);
        break;
    }
  }

  constructor(
    private router: Router,
    private reportDashboardFacade: ReportDashboardFacade
  ) {}

  ngOnInit(): void {}
}
