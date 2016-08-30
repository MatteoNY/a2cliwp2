import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { Store, StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import { Actions, Effect } from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

//import { instrumentStore } from '@ngrx/store-devtools';
//import { useLogMonitor } from '@ngrx/store-log-monitor';
//import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';


import { SearchListComponent }    from './search-list.component';
import { SearchDetailComponent }  from './search-detail.component';

import { SearchService } from './search.service';

import { searchRouting } from './search.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    searchRouting,
    MdButtonToggleModule,
    MdButtonModule,
    MdRippleModule,
    OverlayModule,
      StoreModule.provideStore ( { counter: counterReducer },{ counter: 0 } )
    // ,
    //  StoreModule.provideStore(rootReducer),
    // // Note that you must instrument after importing StoreModule
    // StoreDevtoolsModule.instrumentStore({
    //   maxAge: 5,
    //   monitor: monitorReducer
    // })
    
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
