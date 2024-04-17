import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
 
@Component({
  selector: 'app-modifycontentform',
  templateUrl: './modifycontentform.component.html',
  styleUrls: ['./modifycontentform.component.scss']
})
export class ModifycontentformComponent implements OnInit {
	form: FormGroup;
	dialogRef: any;

	constructor(
		private fb: FormBuilder
	) {
		this.form = this.fb.group({});
	}

	ngOnInit() {
		this.form = this.fb.group({
			title: '',
			description: '',
			creator: '',
			imgURL: '',
			type: '',
			tags: '',
		});
	}

	save() {
		this.dialogRef.close(this.form.value);
	}

	close() {
		this.dialogRef.close();
	}
}