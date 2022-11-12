import { Component } from '@angular/core';
import { MessagesService } from 'src/app/shared/data-access/messages/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  messages$ = this.messagesService.messages$;

  onRemoveMessage(id: string) {
    this.messagesService.removeMessage(id);
  }

  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.messagesService.addMessage(
      'SUCCESS',
      'Just testing global messages snackbar.'
    );
  }
}
