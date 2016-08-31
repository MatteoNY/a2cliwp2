
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { MdButtonToggleModule } from '@angular2-material/button-toggle/button-toggle';
import { MdButtonModule } from '@angular2-material/button/button';
import { MdRippleModule } from '@angular2-material/core/ripple/ripple';
import { OverlayModule } from '@angular2-material/core/overlay/overlay-directives';

import 'rxjs/Rx';

//  import { Store, StoreModule } from '@ngrx/store';
//  import { counterReducer } from './counter';
// import { Actions, Effect } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//import { instrumentStore } from '@ngrx/store-devtools';
//import { useLogMonitor } from '@ngrx/store-log-monitor';
//import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';


import { AppCommonComponent }    from './app-common.component';


import { AppCommonService } from './app-common.service';

import { appCommonRouting} from './app-common.routing';
import { NgModule }       from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    appCommonRouting,
    MdButtonToggleModule,
    MdButtonModule,
    MdRippleModule,
    OverlayModule
    //,
    // StoreModule.provideStore ( { counter: counterReducer },{ counter: 0 } )
    // ,
    //  StoreModule.provideStore(rootReducer),
    // // Note that you must instrument after importing StoreModule
    // StoreDevtoolsModule.instrumentStore({
    //   maxAge: 5,
    //   monitor: monitorReducer
    // })
    
  ],
  declarations: [
    AppCommonComponent,
     
  ],
  providers: [
    AppCommonService
  ]
})
export class AppCommonModule {}
