import { Routes, RouterModule } from '@angular/router';

import { SearchListComponent }    from './search-list.component';
import { SearchDetailComponent }  from './search-detail.component';

const searchRoutes: Routes = [
  { path: 'search',  component: SearchListComponent },
  { path: 'search/:id', component: SearchDetailComponent }
];

export const searchRouting = RouterModule.forChild(searchRoutes);


