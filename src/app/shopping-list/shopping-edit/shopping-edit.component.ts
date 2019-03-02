import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredent.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions'
import * as fromShoppingListReducers from '../../shopping-list/store/shopping-list.reducer'


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

 
  editMode = false;
  subscrition: Subscription
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;
  
  constructor( private store : Store<{shoppingList : fromShoppingListReducers.AppState}>) { }

  ngOnInit() {
    this.subscrition = this.store.select('shoppingList')
    .subscribe(
      data => {
        console.log(data);
        if(data.editedTngredientIndex > -1){

          this.editedItem = data.editedTngredient,
          this.editMode = true,
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });

        }
        else{
          this.editMode = false
        }
      }
    );
   
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEditIngredient());
    this.subscrition.unsubscribe();
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.slForm.reset();
    this.editMode = false;
  }
  onClearForm(){
    this.slForm.reset();
  }

  onAddOrUpdateItem(form: NgForm) {
    const value = form.value;
    if (this.editMode) {
      //this.shoppinglistservice.updateIngredient();
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ name: value.name, amount: value.amount }));
      this.editMode = false;
    }
    else {
      this.store.dispatch(new ShoppingListActions.AddIngredient({ name: value.name, amount: value.amount }));
    }

    this.slForm.reset();
  }

}
