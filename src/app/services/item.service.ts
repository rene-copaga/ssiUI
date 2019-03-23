import { Injectable } from '@angular/core';
import {ITEMS} from '../shared/items';
import {Item} from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Promise<Item[]> {
    return Promise.resolve(ITEMS);
  }

  getItem(id: number): Promise<Item> {
    return Promise.resolve(ITEMS.filter((item) => (item.id === id))[0]);
  }

  getFeaturedItem(): Promise<Item> {
    return Promise.resolve(ITEMS.filter((item) => item.featured)[0]);
  }
}
