import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-send-message-input',
  imports: [
    FormsModule
  ],
  templateUrl: './send-message-input.component.html',
  styleUrl: './send-message-input.component.css'
})
export class SendMessageInputComponent {
  messageText: string = '';

  @Output() send = new EventEmitter<string>();

  onSubmit(event: Event) {
    event.preventDefault();
    const message: string = this.messageText.trim()
    if (message) {
      this.send.emit(message);
      this.messageText = '';
    }
  }
}
