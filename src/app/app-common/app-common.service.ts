import { Injectable } from '@angular/core';

export class AppCommon {
  constructor(public id: number, public name: string) { }
}

let SEARCHES = [
  new AppCommon(11, 'Mr. Nice guy'),
  new AppCommon(12, 'Nicola'),
  new AppCommon(13, 'Va bene'),
  new AppCommon(14, 'Mr Ciao'),
  new AppCommon(15, 'Maria bella'),
  new AppCommon(16, 'Rubber soul')
];

let searchesPromise = Promise.resolve(SEARCHES);

@Injectable()
export class AppCommonService {
  getSearches() { return searchesPromise; }

  getSearch(id: number | string) {
    return searchesPromise
      .then(searches => searches.find(search => search.id === +id));
  }
}


