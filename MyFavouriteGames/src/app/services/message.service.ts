import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  sendMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  getContentById(idOfTopContent: number) {
    throw new Error('Method not implemented.');
  }
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
