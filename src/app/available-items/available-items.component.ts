import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-available-items',
  templateUrl: './available-items.component.html',
  styleUrls: ['./available-items.component.scss']
})
export class AvailableItemsComponent implements OnInit {
  public availableItems: Item[] = [];

  constructor(public shoppingCart: ShoppingCartService) {}

  public ngOnInit(): void {
    this.availableItems.push(new Item('Thingmaker', 4.99, 1));
    this.availableItems.push(new Item('Flux Capacitor', 1.21, 1));
    this.availableItems.push(new Item('Heisenberg Compensator', 99.99, 1));
    this.availableItems.push(new Item('Inertial Dampener', 500, 1));
    this.availableItems.push(new Item('Warp Core', 1999.99, 1));
  }

}
