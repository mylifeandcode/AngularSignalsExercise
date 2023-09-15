import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {

  constructor(public _shoppingCart: ShoppingCartService) {
  }

}
