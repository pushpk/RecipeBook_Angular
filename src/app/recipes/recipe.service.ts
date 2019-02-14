import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredent.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    constructor(private shoppingListService : ShoppingListService){
    }

    selectRecipe = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("Recipe 1", 
                    "Test Desc",
                    "https://media.istockphoto.com/photos/green-sauce-enchiladas-with-clipping-path-picture-id666147024",
                    [ new Ingredient("Apple", 3 ),new Ingredient("Banana", 2 )]),
       
        new Recipe("Recipe 2",
                   "Test 2 Desc",
                   "https://media.istockphoto.com/photos/green-sauce-enchiladas-with-clipping-path-picture-id666147024",
                    [ new Ingredient("Rice", 3 ),new Ingredient("Oil tbs", 2 )])
      ];
    
      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index : number) : Recipe{
        return this.recipes[index];
    }
      addIngredeints(ingredents : Ingredient[]){
          this.shoppingListService.addNewIngredientArray(ingredents);
      }

     
    
     
}