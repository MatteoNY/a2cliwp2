import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { Search, SearchService }  from './search.service';
import { Subscription }       from 'rxjs/Subscription';

@Component({
  template: `
  <h2>SEARCH</h2>
  <div *ngIf="search">
    <h3>"{{search.name}}"</h3>
    <div>
      <label>Id: </label>{{search.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="search.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoSearch()">Back</button>
    </p>
  </div>
  `
})
export class SearchDetailComponent implements OnInit, OnDestroy  {
  search: Search;

  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SearchService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.service.getSearch(id).then(search => this.search = search);
     });
  }


// ?? The router offers a Snapshot alternative that gives us the initial value of the route parameters. We don't need to subscribe. 
//We don't have to unsubscribe in ngOnDestroy. It's much simpler to write and read:
// ngOnInit() {
//   // (+) converts string 'id' to a number
//   let id = +this.route.snapshot.params['id'];
//   this.service.getHero(id).then(hero => this.hero = hero);
// }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoSearch() {
    let searchId = this.search ? this.search.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['/search', { id: searchId, foo: 'foo' }]);
  }
}

