import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/Shared/ingredent.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  //@Output() addedIngredient = new EventEmitter<{ name : string, amount : number}>();
  constructor(private shoppinglistservice : ShoppingListService) { }

  ngOnInit() {
  }

  AddIng(txtName, txtAmount)
  {
    this.shoppinglistservice.addNewIngredient({name : txtName.value, amount : txtAmount.value});
   
    //this.addedIngredient.emit({name : txtName.value, amount : txtAmount.value});

  }

}
