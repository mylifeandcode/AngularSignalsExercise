import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public itemsInCart: WritableSignal<Item[]> = signal([]);
  public totalItemQty: Signal<number> = computed(() => this.itemsInCart().reduce((total, item) => total + item.quantity, 0));
  public totalItemCost: Signal<number> = computed(() => this.itemsInCart().reduce((total, item) => total + (item.cost * item.quantity), 0));

  public addItem(itemToAdd: Item): void {
    this.itemsInCart.update((value: Item[]) => {
      const existingIndex = value.findIndex((value: Item) => value.description == itemToAdd.description);
      if (existingIndex > -1) {
        value[existingIndex].quantity++
      }
      else {
        value.push(itemToAdd);
      }
      return value;
    });
  }

  public removeItem(itemToRemove: Item): void {
    this.itemsInCart.update((value: Item[]) => {
      const existingIndex = value.findIndex((value: Item) => value.description == itemToRemove.description);
      if (existingIndex > -1) {
        if(value[existingIndex].quantity == 1) {
          value.splice(existingIndex, 1);
        } 
        else {
          value[existingIndex].quantity--;
        }
      }
      return value;
    });
  }
}
