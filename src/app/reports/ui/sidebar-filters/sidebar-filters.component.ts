import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'tmpl-sidebar-filters',
  templateUrl: './sidebar-filters.component.html',
  styleUrls: ['./sidebar-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarFiltersComponent implements OnInit {
  @Output() filter = new Subject();

  constructor() {}

  ngOnInit(): void {}
}
