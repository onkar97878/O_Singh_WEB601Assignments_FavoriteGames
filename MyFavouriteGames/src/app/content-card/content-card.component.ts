import { CommonModule } from '@angular/common';
import { Component, Input , OnInit} from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { HoverAffectDirective } from '../hover-affect.directive';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, HoverAffectDirective],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
 @Input() item:Content;
 defaultImageUrl:string='https://i.pinimg.com/originals/90/70/58/9070587de0e3227cba0d9a6a880b4682.jpg'; 

 onCardClick(content: any): void {
  console.log(`Card Clicked - ID: ${content.id} and Title: ${content.title}`);
}

}
