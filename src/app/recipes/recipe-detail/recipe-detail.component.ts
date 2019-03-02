import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Ingredient } from 'src/app/Shared/ingredent.model';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions'
import * as fromShoppingListReducers from '../../shopping-list/store/shopping-list.reducer'


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  receipeItem : Recipe
  constructor(private recipeService : RecipeService, private route : ActivatedRoute, private router : Router , private store : Store<{shoppingList : fromShoppingListReducers.AppState}>) { }

  
  ngOnInit() {

    this.route.params.subscribe(
      (params : Params) => {
        const id = +params['id'];

        this.receipeItem = this.recipeService.getRecipe(id);

      }
    );
  }

  AddtoShoppingList(receipe : Recipe)
  {
    this.store.dispatch(new ShoppingListActions.AddIngredients(receipe.ingredeints));
  }

  onDeleteRecipe(index : number){
    this.recipeService.deleteRecipe(index);
    this.router.navigate(['../'], {relativeTo : this.route});

  }

}
