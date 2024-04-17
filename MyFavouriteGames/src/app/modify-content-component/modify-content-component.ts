import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModifycontentformComponent } from '../modifycontentform/modifycontentform.component';
@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {
	constructor(private dialog: MatDialog) {}
  @Output() addNewContentEvent = new EventEmitter<Content>();

  openDialog() {
	const dialogConfig = new MatDialogConfig();

	const dialogRef = this.dialog.open(ModifycontentformComponent, dialogConfig);
	dialogConfig.autoFocus = true;

	dialogRef.afterClosed().subscribe((data) => {
		const newContent: Content = {
			...data,
			imgURL:
				data.imgURL === '' || data.imgURL == null
					? 'https://st3.depositphotos.com/1322515/35964/v/450/depositphotos_359648638-stock-illustration-image-available-icon.jpg'
					: data.imgURL,
			tags: data.tags ? data.tags.split(',') : [],
		};
		console.log('Dialog output:', newContent);
		this.handleSave(newContent);
	});
}

handleSave(newContent: Content) {
	this.addNewContentEvent.emit(newContent);
}
}