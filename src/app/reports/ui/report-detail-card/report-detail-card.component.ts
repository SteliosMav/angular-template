import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { RequestStatus } from 'src/app/shared/data-access/api/api.models';
import { Report } from '../../data-access/report-editor.store';

@Component({
  selector: 'tmpl-report-detail-card',
  templateUrl: './report-detail-card.component.html',
  styleUrls: ['./report-detail-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportDetailCardComponent implements OnInit {
  @Input() alert!: Report;
  @Input() fetchingStatus!: RequestStatus['fetchingStatus'];

  constructor() {}

  ngOnInit(): void {}
}
