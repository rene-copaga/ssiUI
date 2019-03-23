import { Injectable } from '@angular/core';
import {ITEMS} from '../shared/items';
import {Item} from '../shared/item';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    // return Promise.resolve(ITEMS);
    return Observable.of(ITEMS).delay(2000);
  }

  getItem(id: number): Observable<Item> {
    // return Promise.resolve(ITEMS.filter((item) => (item.id === id))[0]);
    return Observable.of(ITEMS.filter((item) => (item.id === id))[0]).delay(2000);
  }

  getFeaturedItem(): Observable<Item> {
    // return Promise.resolve(ITEMS.filter((item) => item.featured)[0]);
    return Observable.of(ITEMS.filter((item) => item.featured)[0]).delay(2000);
  }
}
