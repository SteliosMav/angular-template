import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { RequestStatus } from 'src/app/shared/data-access/api/api.models';
import { Report } from '../../data-access/report-editor.store';

@Component({
  selector: 'tmpl-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportListComponent implements OnInit {
  @Input() reports!: Report[];
  @Input() fetchingStatus!: RequestStatus['fetchingStatus'];
  @Input() foundResults!: boolean;
  @Output() loadMore = new Subject();
  @Output() action: Subject<{ type: 'EDIT' | 'VIEW' | 'REMOVE'; id: string }> =
    new Subject();

  constructor() {}

  ngOnInit(): void {}
}
