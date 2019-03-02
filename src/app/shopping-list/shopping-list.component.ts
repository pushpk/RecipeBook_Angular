import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../Shared/ingredent.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromShoppingListReducers from './store/shopping-list.reducer'
import * as fromShoppingListActions from './store/shopping-list.actions'


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private shoppingListState : Observable<fromShoppingListReducers.AppState>
  constructor(private store : Store<{shoppingList : fromShoppingListReducers.AppState}>) { }

  ngOnInit() {

    this.shoppingListState = this.store.select('shoppingList');
  
  }

  onEditItem(index : number)
  {
    this.store.dispatch(new fromShoppingListActions.StartEditIngredient(index));

  }

  
}
