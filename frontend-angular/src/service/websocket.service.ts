// src\app\services\websocket.service.ts
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const POLL_URL = 'ws://localhost:3000';

export interface Message {
  source: string;
  content: string;
}

@Injectable()
export class WebsocketService {
  private subject!: AnonymousSubject<MessageEvent>;
  public messages: Subject<Message>;

  constructor() {
    this.messages = <Subject<Message>>this.connect(POLL_URL).pipe(
      map((response: MessageEvent): Message => {
        console.log(response.data);
        const data = JSON.parse(response.data);
        return data;
      }),
    );
  }

  public connect(url: any): AnonymousSubject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  private create(url: any): AnonymousSubject<MessageEvent> {
    const ws = new WebSocket(url);
    const observable = new Observable((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    const observer: Observer<MessageEvent<any>> = {
      next: (data: object) => {
        console.log('Message sent to websocket: ', data);
        if (ws.readyState == WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      },
      error: function (err: any): void {
        throw new Error('Function not implemented.');
      },
      complete: function (): void {
        throw new Error('Function not implemented.');
      },
    };
    return new AnonymousSubject<MessageEvent>(observer, observable);
  }
}
