// TODO SOMEDAY: Feature Componetized like CrisisCenter
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppCommon, AppCommonService }  from './app-common.service';
import { Subscription }       from 'rxjs/Subscription';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter';


interface AppState {
  counter: number;
}

@Component({
    styleUrls: ['app-common.module.scss'],
    encapsulation: ViewEncapsulation.None,
  template: `
    <h2>AppCommon Howdy!</h2>


 <div class="app-content">
 <ul class="zitems" style="list-style-type: none;">
    <li *ngFor="let searchItem of search; let i = index" 
    [class.selected]="isSelected(searchItem)"
        (click)="onSelect(searchItem)">
      <button md-button md-raised-button style="min-width: 150px; text-align: left; margin-bottom: 15px;"> <span class="badge">{{i+1}}</span> {{searchItem.name}}</button> 
   <!--   <button md-raised-button md-tooltip="This is a tooltip!">RAISED</button>
      <button md-raised-button color="primary">PRIMARY RAISED</button>
      <button md-raised-button color="accent">ACCENT RAISED</button>-->
    </li>
    </ul>

<md-card>

<button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>

</md-card>

    </div>

    

<!--
    <ul class="items">
      <li *ngFor="let searchItem of search"
        [class.selected]="isSelected(searchItem)"
        (click)="onSelect(searchItem)">
        <span class="badge">{{searchItem.id}}</span> {{searchItem.name}}
      </li>
    </ul> -->
  `
})
export class AppCommonComponent implements OnInit, OnDestroy {
  search: AppCommon[];

  private selectedId: number;
  private sub: Subscription;

  counter: Observable<any>;

  constructor(
    public store: Store<AppState>,
    private service: AppCommonService,
    private route: ActivatedRoute,
    private router: Router) {

   this.counter = store.select('counter');

    }



    increment(){
        this.store.dispatch({ type: INCREMENT });
    }

    decrement(){
       this.store.dispatch({ type: DECREMENT });
    }

    reset(){
     this.store.dispatch({ type: RESET });
    }


  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.selectedId = +params['id'];
        this.service.getSearches()
          .then(search => this.search = search);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isSelected(search: AppCommon) { return search.id === this.selectedId; }

  onSelect(search: AppCommon) {
    this.router.navigate(['/appcommon', search.id]);
  }

}
