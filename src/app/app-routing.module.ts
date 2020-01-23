import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }   from './Main/Main.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { ComingsoonComponent } from './Pages/Session/ComingSoon/ComingSoon.component';
import { MaintenanceComponent } from './Pages/Session/Maintenance/Maintenance.component';
import { LoginComponent } from './Pages/Session/LogIn/LogIn.component'
import { Signup2Component } from './Pages/Session/SignUp2/SignUp2.component'
import { AboutComponent } from './Pages/About/About.component';

export const AppRoutes: Routes = [{
   path: '',
   redirectTo: 'home',
   pathMatch: 'full',
   },{
      path: 'session/comingsoon',
      component : ComingsoonComponent
   },{
      path: 'session/maintenance',
      component: MaintenanceComponent
   },{
      path: 'login',
      component : LoginComponent
   },{
      path: 'session/signup2',
      component: Signup2Component
   },{
      path: '',
      component: MainComponent,
      children: [
         {
            path: 'home',
            component: HomeComponent
         },{
            path: 'about',
            component: AboutComponent
         },{
            path: 'dashboard',loadChildren:() =>
            import('./Pages/Dashboard/Dashboard.module').then(m => m.DashboardModule)
         },{
            path: 'contact',loadChildren:() =>
            import('./Pages/Contact/Contact.module').then(m => m.ContactModule)
         },{
            path: 'pricing',loadChildren:() =>
            import('./Pages/Pricing/Pricing.module').then(m => m.PricingModule)
         },{
            path: 'about',loadChildren:() =>
            import('./Pages/AboutUs/AboutUs.module').then(m =>m.AboutUsModule)
         }
      ]
   }
];

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forRoot(AppRoutes)
   ],
   exports: [RouterModule],
   declarations: []
})
export class AppRoutingModule { }
