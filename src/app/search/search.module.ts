import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SearchListComponent }    from './search-list.component';
import { SearchDetailComponent }  from './search-detail.component';

import { SearchService } from './search.service';

import { searchRouting } from './search.routing';


import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdRippleModule} from '@angular2-material/core/ripple/ripple';

import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    searchRouting,
    MdButtonToggleModule,
    MdButtonModule,
    MdRippleModule,
    OverlayModule
    
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
