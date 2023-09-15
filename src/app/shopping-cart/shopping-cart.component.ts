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
    //Use an effect here to set checkoutDisabled depending on existence of items in the shopping cart
  }

  public checkout(): void {
    window.alert('If this were a real ecommerce site, this button would let you check out.');
  }
}
