import { Injectable } from '@angular/core';

export class Search {
  constructor(public id: number, public name: string) { }
}

let SEARCHES = [
  new Search(11, 'Mr. Nice guy'),
  new Search(12, 'Nicola'),
  new Search(13, 'Va bene'),
  new Search(14, 'Mr Ciao'),
  new Search(15, 'Maria bella'),
  new Search(16, 'Rubber soul')
];

let searchesPromise = Promise.resolve(SEARCHES);

@Injectable()
export class SearchService {
  getSearches() { return searchesPromise; }

  getSearch(id: number | string) {
    return searchesPromise
      .then(searches => searches.find(search => search.id === +id));
  }
}


