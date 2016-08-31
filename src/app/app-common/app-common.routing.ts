import { Routes, RouterModule } from '@angular/router';

import { AppCommonComponent }    from './app-common.component';


const appCommonRoutes: Routes = [
  { path: 'appcommon',  component: AppCommonComponent }
];

export const appCommonRouting = RouterModule.forChild(appCommonRoutes);


