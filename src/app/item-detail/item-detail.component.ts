import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../shared/Item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  @Input()
  item: Item;

  constructor() { }

  ngOnInit() {
  }

}
