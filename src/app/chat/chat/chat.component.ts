import { Component } from '@angular/core';
import {MessageComponent} from "../message/message.component";
import {NgForOf} from "@angular/common";
import {SendMessageInputComponent} from "../send-message-input/send-message-input.component";

@Component({
  selector: 'app-chat',
  imports: [
    MessageComponent,
    NgForOf,
    SendMessageInputComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages = [
    {"sender": 'attendant', "text": "Ola"},
    {"sender": 'user', "text": "Ola"},
    {"sender": 'attendant', "text": "Teste"},
    {"sender": 'user', "text": "Teste"},
    {"sender": 'user', "text": "teste2"},
  ]

  handleSend(message: string) {
    this.messages.push(
        {
          "sender": "user",
          "text": message
        }
    )
  }
}
