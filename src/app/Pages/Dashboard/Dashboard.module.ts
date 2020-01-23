import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FilterGridComponent } from './FilterGrid/FilterGrid.component';
import { FilterDetailComponent } from './FilterDetail/FilterDetail.component';
import { TemplateModule } from '../../Template/Template.module';
import { WidgetsModule } from '../../Widgets/Widgets.module';

import { DashboardRoutes } from './Dashboard.routing';
import { BoustGridComponent } from './BoustGrid/BoustGrid.component';
import { BoustDetailComponent } from './BoustDetail/BoustDetail.component';
import { ProfileComponent } from './Profile/Profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogoutComponent } from './Logout/Logout.component';
import { ChangepasswordComponent } from './Changepassword/Changepassword.component';

@NgModule({
	declarations: [
		FilterGridComponent, 
		FilterDetailComponent,
		BoustGridComponent,
		BoustDetailComponent,
		ProfileComponent,
		LogoutComponent,
		ChangepasswordComponent
	],
	imports: [
		CommonModule,
		TemplateModule,
		WidgetsModule,
		ReactiveFormsModule, 
		FormsModule,
		RouterModule.forChild(DashboardRoutes)
	]
})
export class DashboardModule { }
