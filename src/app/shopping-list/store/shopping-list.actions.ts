import { Action } from '@ngrx/store';
import { Ingredient } from "../../Shared/ingredent.model";


export const ADD_INGREDIENT = "Add Ingredient";
export const ADD_INGREDIENTS = "Add Ingredients";
export const UPDATE_INGREDIENT = "Update Ingredient";
export const DELETE_INGREDIENT = "Delete Ingredient";
export const START_EDIT_INGREDIENT = "Start Edit Ingredient";
export const STOP_EDIT_INGREDIENT = "Stop Edit Ingredient";

export class AddIngredient implements Action{
    readonly type = ADD_INGREDIENT

    constructor(public payload : Ingredient) {
        
    }
}

export class AddIngredients implements Action{
    readonly type = ADD_INGREDIENTS

    constructor(public payload : Ingredient[]) {
        
    }
}

export class UpdateIngredient implements Action{
    readonly type = UPDATE_INGREDIENT

    constructor(public payload :   Ingredient) {
        
    }
}

export class DeleteIngredient implements Action{
    readonly type = DELETE_INGREDIENT;


}

export class StartEditIngredient implements Action{
    readonly type = START_EDIT_INGREDIENT

    constructor(public payload : number) {
        
    }
}

export class StopEditIngredient implements Action{
    readonly type = STOP_EDIT_INGREDIENT;

    
}
export type Actions = AddIngredient| AddIngredients | UpdateIngredient | DeleteIngredient | StartEditIngredient | StopEditIngredient