import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SearchListComponent }    from './search-list.component';
import { SearchDetailComponent }  from './search-detail.component';

import { SearchService } from './search.service';

import { searchRouting } from './search.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    searchRouting
  ],
  declarations: [
    SearchListComponent,
    SearchDetailComponent
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule {}
