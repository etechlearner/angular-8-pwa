import { Routes } from '@angular/router';
import { FilterGridComponent } from './FilterGrid/FilterGrid.component';
import { FilterDetailComponent } from './FilterDetail/FilterDetail.component';
import { BoustGridComponent } from './BoustGrid/BoustGrid.component';
import { BoustDetailComponent } from './BoustDetail/BoustDetail.component'; 
import { ProfileComponent } from './Profile/Profile.component';
import { LogoutComponent } from './Logout/Logout.component';
import { ChangepasswordComponent } from './Changepassword/Changepassword.component';

export const DashboardRoutes: Routes = [{
    path: '',
    redirectTo: 'filter-grid',
    pathMatch: 'full'
    },{
    path: '',
        children: [
        {
            path: 'filter-grid',
            component: FilterGridComponent
        }, {
            path: 'filter-detail/:id',
            component: FilterDetailComponent
        },{
            path: 'filter-detail',
            component: FilterDetailComponent
        },
        {
            path: 'boust-grid',
            component: BoustGridComponent
        }, {
            path: 'boust-detail/:id',
            component: BoustDetailComponent
        },{
            path: 'boust-detail',
            component: BoustDetailComponent
        },{
            path: 'profile',
            component: ProfileComponent
        },{
            path: 'logout',
            component: LogoutComponent
        },{
            path: 'chnagepassword',
            component: ChangepasswordComponent
        }
    ]
    }
];
