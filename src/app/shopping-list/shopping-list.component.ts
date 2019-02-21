import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../Shared/ingredent.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private ingredients : Ingredient[] 
  constructor(private shoppinglistService : ShoppingListService) { }

  ngOnInit() {

    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }

    );
  }

  onEditItem(index : number)
  {
    this.shoppinglistService.startEditing.next(index);

  }

  
}
