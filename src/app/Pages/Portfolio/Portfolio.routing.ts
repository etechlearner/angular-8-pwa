import { Routes } from '@angular/router';
import { PortfolioGridComponent } from './PortfolioGrid/PortfolioGrid.component';
import { PortfolioDetailComponent } from './PortfolioDetail/PortfolioDetail.component';

export const PortfolioRoutes: Routes = [{
    path: '',
    redirectTo: 'portfolio-grid',
    pathMatch: 'full'
    },{
    path: '',
        children: [{
            path: 'portfolio-grid',
            component: PortfolioGridComponent
        }, {
            path: 'portfolio-detail/:type/:id',
            component: PortfolioDetailComponent
        }, {
            path: 'portfolio-detail',
            component: PortfolioDetailComponent
        }]
    }
];
