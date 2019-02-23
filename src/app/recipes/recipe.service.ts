import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredent.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { HttpDataStorageService } from '../Shared/HttpDataStorage.service';

@Injectable()
export class RecipeService{

    constructor(private shoppingListService : ShoppingListService){
    }

    selectRecipe = new EventEmitter<Recipe>();
    recipesChanged = new Subject<Recipe[]>();
     private recipes: Recipe[]=
    [
        new Recipe("Pesto Tortilla Rollups", 
                    "Sun-Dried Tomato Pesto Tortilla Rollups has layers of flavor and texture that only takes 15 minutes to prepare. Healthy appetizer that everyone loves.",
                    "https://veganinthefreezer.com/wp-content/uploads/2016/08/Sun-Dried-Tomato-Pesto-Tortilla-Rollups-temp-close.jpg",
                    [ new Ingredient("Tortillas ", 10 ),new Ingredient("Cream Cheese", 16 ),new Ingredient("Tomato Pesto", 6 ),new Ingredient("Baby Spinach", 10 )]),
       
        new Recipe("Coconut Crusted Tofu",
                   "With just two ingredients & 35 minutes of your time you could be tucking into this delicious Easy Coconut Tofu.",
                   "https://avirtualvegan.com/wp-content/uploads/2016/08/coconut-crusted-tofu-5-708x1024.jpg",
                    [ new Ingredient("Tofu", 1 ),new Ingredient("Coconut Flour", 2 ),new Ingredient("Salt & Paper", 1 )]),


         new Recipe("Potato Veggie Burger",
                   "If you've ever had latkes or potato pancakes, you know that potatoes absorb the flavors added to them quite well, and have a satisfying texture that is both crunchy and soft.",
                   "https://www.thespruceeats.com/thmb/QQphmGX4FrKPBBtuZwDkvpvJHhg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/potato-veggie-burgers-recipe-3378626-Hero-5b7d6202c9e77c0057012ca8.jpg",
                    [ new Ingredient("Burger Bun", 1 ),new Ingredient("Potatoes", 2 ),new Ingredient("Lettuce", 1 ),new Ingredient("Tomatoes", 1 ),new Ingredient("Dressing", 1 )])
      ];
    
      getRecipes(){
          return this.recipes.slice();
      }

      setRecipes(fetchedRecipes: Recipe[]){

        this.recipes = fetchedRecipes;
        this.recipesChanged.next(this.recipes.slice())
      }

      getRecipe(index : number) : Recipe{
        return this.recipes[index];
    }
      addIngredeints(ingredents : Ingredient[]){
          this.shoppingListService.addNewIngredientArray(ingredents);
      }

      addRecipes(newRecipe : Recipe)
      {
        this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe : Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
      }

      deleteRecipe(index: number){
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice())
      }

     
    
     
}