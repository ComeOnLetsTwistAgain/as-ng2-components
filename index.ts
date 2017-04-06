import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ToastComponent } from './src/toast/toast.component';
import { ToastService } from './src/toast/toast.service';



export * from './src/toast/toast.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ToastComponent
	],
	providers: [
		ToastService
	],
	exports: [
		ToastComponent
	]
})
export class AsNg2Module {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AsNg2Module,
			providers: []
		};
	}
}
