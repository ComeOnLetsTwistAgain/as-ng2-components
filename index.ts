import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

//
// ─── LIBS ───────────────────────────────────────────────────────────────────────
//

// ────────────────────────────────────────────────────────────────────────────────


//
// ──────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
//

//
// ─── TOAST ──────────────────────────────────────────────────────────────────────
//
import { ToastComponent } from './src/toast/toast.component';
import { ToastService } from './src/toast/toast.service';
// ────────────────────────────────────────────────────────────────────────────────


//
// ──────────────────────────────────────────────────────────── II ──────────
//   :::::: D I R E C T I V E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
//

//
// ─── GROW ───────────────────────────────────────────────────────────────────────
//
import { GrowDirective } from './src/grow/grow.directive';
// ────────────────────────────────────────────────────────────────────────────────




@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ToastComponent,
		GrowDirective
	],
	providers: [
		ToastService
	],
	exports: [
		ToastComponent,
		GrowDirective
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
