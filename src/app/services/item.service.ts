import { Injectable } from '@angular/core';
import {ITEMS} from '../shared/items';
import {Item} from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }

  getItem(id: number): Item {
    return ITEMS.filter((item) => (item.id === id))[0];
  }

  getFeaturedItem(): Item {
    return ITEMS.filter((item) => item.featured)[0];
  }
}
