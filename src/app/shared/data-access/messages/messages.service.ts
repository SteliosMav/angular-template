import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Message {
  id: string;
  cssClass: 'error' | 'success';
  icon: 'las la-check-circle' | 'las la-times-circle'; // Line Awsome icon
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private _messageDictionary$ = new BehaviorSubject(
    {} as { [key: string]: Message }
  );
  private _timer = 8000; // miliseconds

  readonly messages$ = this._messageDictionary$
    .asObservable()
    .pipe(map((dictionary) => Object.values(dictionary)));

  addMessage(type: 'SUCCESS' | 'ERROR', text: string) {
    const newId = nanoid();
    const newMessage: Message = {
      id: newId,
      icon: 'las la-times-circle',
      cssClass: 'error',
      text,
    };
    if (type === 'SUCCESS') {
      newMessage.icon = 'las la-check-circle';
      newMessage.cssClass = 'success';
    }
    const messages = this._messageDictionary$.getValue();
    messages[newId] = newMessage;
    this._messageDictionary$.next(messages);
    setTimeout(() => this.removeMessage(newId), this._timer);
  }

  removeMessage(id: string) {
    const messages = this._messageDictionary$.getValue();
    if (messages[id]) delete messages[id];
    this._messageDictionary$.next(messages);
  }
}
