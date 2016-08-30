// TODO SOMEDAY: Feature Componetized like CrisisCenter
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Search, SearchService }  from './search.service';
import { Subscription }       from 'rxjs/Subscription';


@Component({
    styleUrls: ['search.module.scss'],
    encapsulation: ViewEncapsulation.None,
  template: `
    <h2>Search</h2>


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
export class SearchListComponent implements OnInit, OnDestroy {
  search: Search[];

  private selectedId: number;
  private sub: Subscription;

  constructor(
    private service: SearchService,
    private route: ActivatedRoute,
    private router: Router) {}

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

  isSelected(search: Search) { return search.id === this.selectedId; }

  onSelect(search: Search) {
    this.router.navigate(['/search', search.id]);
  }

}
