import { Ingredient } from '../Shared/ingredent.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredients: Ingredient[] = [

        new Ingredient("Apple", 5),
        new Ingredient("Tomatoes", 12)
    ];

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addNewIngredient(ingredent: { name: string, amount: number }) {
        this.ingredients.push(ingredent);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addNewIngredientArray(ingredentsPara: Ingredient[]) {
        // ingredents.forEach(ingredent => {
        //     this.ingredients.push(ingredent);
        // });

        this.ingredients.push(...ingredentsPara);  
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}