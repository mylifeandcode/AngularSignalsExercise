import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public itemsInCart: Item[] = []; //Convert this to a writable signal
  //Add computed signals here for the total qty and total cost of items in the shopping cart

  public addItem(itemToAdd: Item): void {

    const existingIndex = this.itemsInCart.findIndex((value: Item) => value.description == itemToAdd.description);
    if (existingIndex > -1) {
      this.itemsInCart[existingIndex].quantity++
    }
    else {
      this.itemsInCart.push(itemToAdd);
    }

  }

  public removeItem(itemToRemove: Item): void {

    const existingIndex = this.itemsInCart.findIndex((value: Item) => value.description == itemToRemove.description);
    if (existingIndex > -1) {
      if(this.itemsInCart[existingIndex].quantity == 1) {
        this.itemsInCart.splice(existingIndex, 1);
      } 
      else {
        this.itemsInCart[existingIndex].quantity--;
      }
    }
  
  }

}
