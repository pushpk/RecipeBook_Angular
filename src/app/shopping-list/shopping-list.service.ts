import { Ingredient } from '../Shared/ingredent.model';

import { Subject } from 'rxjs';

export class ShoppingListService {

    ingredients: Ingredient[] = [

        new Ingredient("Apple", 5),
        new Ingredient("Tomatoes", 12)
    ];

    ingredientsChanged =new Subject<Ingredient[]>();
    startEditing = new Subject<number>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addNewIngredient(ingredent: { name: string, amount: number }) {
        this.ingredients.push(ingredent);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addNewIngredientArray(ingredentsPara: Ingredient[]) {
        this.ingredients.push(...ingredentsPara);  
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index : number, ingredent: { name: string, amount: number }){
        this.ingredients[index ] = ingredent
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredient(index : number)
    {
        return this.ingredients[index];
    }

    deleteIngredient(index : number)
    {
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());

    }
}