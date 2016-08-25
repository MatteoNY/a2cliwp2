// TODO SOMEDAY: Feature Componetized like CrisisCenter
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Search, SearchService }  from './search.service';
import { Subscription }       from 'rxjs/Subscription';

@Component({
  template: `
    <h2>Search</h2>
    <ul class="items">
      <li *ngFor="let searchItem of search"
        [class.selected]="isSelected(searchItem)"
        (click)="onSelect(searchItem)">
        <span class="badge">{{searchItem.id}}</span> {{searchItem.name}}
      </li>
    </ul>
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
