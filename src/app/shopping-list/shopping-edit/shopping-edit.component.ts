import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/Shared/ingredent.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  editItemIndex: number;
  editMode = false;
  subscrition: Subscription
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;
  //@Output() addedIngredient = new EventEmitter<{ name : string, amount : number}>();
  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit() {
    this.subscrition = this.shoppinglistservice.startEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editedItem = this.shoppinglistservice.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });


    });
  }

  ngOnDestroy() {
    this.subscrition.unsubscribe();
  }

  onDelete() {
    this.shoppinglistservice.deleteIngredient(this.editItemIndex);
    this.slForm.reset();
    this.editMode = false;
  }
  onClearForm(){
    this.slForm.reset();

  }

  onAddOrUpdateItem(form: NgForm) {
    const value = form.value;
    if (this.editMode) {
      this.shoppinglistservice.updateIngredient(this.editItemIndex, { name: value.name, amount: value.amount });
      this.editMode = false;
    }
    else {
      this.shoppinglistservice.addNewIngredient({ name: value.name, amount: value.amount });
    }

    this.slForm.reset();
  }

}
