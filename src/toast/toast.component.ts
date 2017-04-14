import { Component, OnInit } from '@angular/core';

import { ToastService } from './toast.service';

declare const require: any;

@Component({
	selector: 'toast',
	template: require('./toast.html'),
	styles: [require('./toast.scss')]
})
export class ToastComponent implements OnInit {

	constructor(
		private toastService: ToastService
	) {	}

	ngOnInit() {
		console.log(this.toastService.toasttest());
	}
}
