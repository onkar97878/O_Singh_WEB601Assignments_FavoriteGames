import { Component, OnInit } from '@angular/core';
import { GameServiceService } from './services/game.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Veerpal'
  singleContentItem: any; 
  gameService: any;

  constructor(private service: GameServiceService) { }

  ngOnInit(): void {
  
    this.loadSingleContentItem();
  }

  loadSingleContentItem() {
    const idOfContentItemToLoad = 1; 
    this.gameService.getContentItemById(idOfContentItemToLoad).subscribe((data: any) => {
      this.singleContentItem = data;
      console.log(`Content Item at id: ${idOfContentItemToLoad}`);
    });
  }

  
}