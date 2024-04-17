import { Component, OnInit } from '@angular/core';
import { GameServiceService} from '../services/game.service';
import { FormsModule } from '@angular/forms';
import { ContentCardComponent } from '../content-card/content-card.component';
import { ContentTypeFilterPipe } from '../content-type-filter.pipe';
import { ModifyContentComponent } from '../modify-content-component/modify-content-component';
import { MessageService } from '../services/message.service';
import { Content} from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-list',
  standalone: true,
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
  imports: [CommonModule, ContentCardComponent, ContentTypeFilterPipe, FormsModule, ModifyContentComponent]
})

export class ContentListComponent implements OnInit {
  contentArray: Content[] = [];

  constructor(private natureService: GameServiceService, private messageService: MessageService) {  }  

  onContentAdded(newContent: Content) {
    this.contentArray.push(newContent);
    this.messageService.sendMessage(`Content '${newContent.title}' added successfully!`);
  }
  ngOnInit() {
    this.loadContentArray();
  }

  loadContentArray() {
    this.natureService.getContent().subscribe((data) => {
      this.contentArray = data;
      console.log('Content array loaded!');
    });
  }

    searchTitle: string = '';
    searchMsg: string = '';
    searchClr: string = '';

    searchCard(): void{
      const foundContent = this.contentArray.find(content => content.title.toLowerCase() === this.searchTitle); 

      if (foundContent) {
        this.searchMsg = `Title "${this.searchTitle}" exists in Content.`;
        this.searchClr = 'green';
      }
      else {
        this.searchMsg = `Title "${this.searchTitle}" doesn't exist in Content.`;
        this.searchClr = 'red';
      }
    }
}