
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { GameServiceService } from '../services/game.service';

@Component({
	selector: 'app-content-detail',
	templateUrl: './content-detail.component.html',
	styleUrls: ['./content-detail.component.scss'],
})
export class ContentDetailComponent {
	id: number = 0;
	content: Content | undefined = undefined;
	defaultImageUrl =
		'https://i.pinimg.com/originals/90/70/58/9070587de0e3227cba0d9a6a880b4682.jpg'; // random image

	constructor(
		private route: ActivatedRoute,
		private contentService: GameServiceService,
		private messageService: MessageService
	) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			this.id = Number(params.get('id') ?? 0);
			this.contentService.findById(this.id).subscribe((content: Content | undefined) => {
				this.content = content;
			});
			this.messageService.add(`Retrieved: Content ID ${this?.content?.id} with title ${this?.content?.title}`);
		});
	}
}
