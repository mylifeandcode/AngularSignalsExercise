import { Component, OnInit, effect } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  public canPlaceOrder: boolean = false;
  public maxOrderAmountExceeded: boolean = false;
  public checkoutDisabled: boolean = true;

  constructor(public shoppingCart: ShoppingCartService) {
    effect(() => {
      this.checkoutDisabled = (this.shoppingCart.itemsInCart().length == 0);
    });
  }

  public checkout(): void {
    window.alert('If this were a real ecommerce site, this button would let you check out.');
  }
}
