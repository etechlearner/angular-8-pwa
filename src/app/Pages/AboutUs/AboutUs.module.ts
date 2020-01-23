import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ProcessComponent } from './Process/Process.component';
import { WidgetsModule } from '../../Widgets/Widgets.module';
import { AboutUsRoutes } from './AboutUs.routing';

@NgModule({
	declarations: [
		ProcessComponent
	],
	imports: [
		CommonModule,
		WidgetsModule,
		RouterModule.forChild(AboutUsRoutes)
	]
})
export class AboutUsModule { }
