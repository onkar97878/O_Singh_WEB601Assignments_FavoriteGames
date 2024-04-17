import { Component, OnInit } from '@angular/core';

import { MessageService } from './services/message.service';
import { GameServiceService } from './services/game.service';
import { Content } from './helper-files/content-interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  topContentItem: Content; 

  constructor(private service: GameServiceService) { }

  ngOnInit(): void {
  
    this.service.getContentById(6).subscribe((res: any) => {
      this.topContentItem = res;
    });
  }
}