import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class ContentMessageComponent implements OnInit {
  messages: string[] = [];

  constructor(private messagesService: MessageService) {}

  ngOnInit(): void {
    this.messagesService.messages.subscribe((message: string) => {
      this.messages.push(message);
    })
  }


}