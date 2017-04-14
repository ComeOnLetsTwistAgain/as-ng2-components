import { Directive, ElementRef, Input, HostListener } from '@angular/core';


@Directive({ selector: '[grow]' })
export class GrowDirective {

	private width: number;
	private height: number;

	private naturalWidth: number;
	private naturalHeight: number;

	private expanded: boolean = false;

	constructor(el: ElementRef) {		

		setTimeout(() => {
			this.width = el.nativeElement.width;
			this.height = el.nativeElement.height;

			this.naturalWidth = el.nativeElement.naturalWidth;
			this.naturalHeight = el.nativeElement.naturalHeight;
		}, 0);




	}

	@HostListener('click', ['$event'])
	onClick(el: any) {



		if (this.expanded) {
			el.target.style.position = 'initial';
			el.target.style.width = `${this.width}px`;
			el.target.style.height = `${this.height}px`;

		} else {
			el.target.style.position = 'absolute';
			el.target.style.width = `${this.naturalWidth}px`;
			el.target.style.height = `${this.naturalHeight}px`;
		}

		this.expanded = !this.expanded;

	}


}
