import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { GameServiceService } from '../services/game.service';

@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss'
})
export class ModifyContentComponent {
  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: [] as string[]
  };
  tagsString: string = '';

  @Output() contentAdded = new EventEmitter<Content>();

  constructor(private gameService: GameServiceService) {}


  clearFields() {
    this.newContent = {
      id: 0,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: []
    };
    this.tagsString = '';
  }
}