import { Recipe } from '../recipe.model';
import { Ingredient } from '../../Shared/ingredent.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State
}
export interface State {
  recipes: Recipe[];
}

const initialState: State = {
    recipes: [
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
      ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
