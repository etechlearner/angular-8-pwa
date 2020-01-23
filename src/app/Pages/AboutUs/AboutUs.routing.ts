import { Routes } from '@angular/router';

import { ProcessComponent } from './Process/Process.component';

export const AboutUsRoutes: Routes = [{
    path: '',
    redirectTo: 'process',
    pathMatch: 'full'
    },{
    path: '',
        children: [
        //     {
        //     path: 'about',
        //     component: AboutComponent
        // },
         {
            path: 'process',
            component: ProcessComponent
        }]
    }
];
