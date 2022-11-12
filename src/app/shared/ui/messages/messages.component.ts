import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from 'src/app/shared/data-access/messages/messages.service';

@Component({
  selector: 'tmpl-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  @Input() messages!: Message[];
  @Output() removeMessage: Subject<string> = new Subject();
}
