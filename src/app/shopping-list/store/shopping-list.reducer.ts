import * as  IngredientSActions from '../store/shopping-list.actions';
import { Ingredient } from '../../Shared/ingredent.model';
import { Action } from '@ngrx/store';


export interface AppState {
    shoppingListState: State
}

export interface State {
    ingredients: Ingredient[];
    editedTngredient: Ingredient;
    editedTngredientIndex: number
}

const initialState: State = {
    editedTngredient: null,
    editedTngredientIndex: -1,

    ingredients: [

        new Ingredient("Apple", 5),
        new Ingredient("Tomatoes", 12)
    ]
};

export function shoppingListReducer(state = initialState, action: IngredientSActions.Actions) {
    switch (action.type) {
        case IngredientSActions.ADD_INGREDIENT: 
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        

        case IngredientSActions.ADD_INGREDIENTS: 
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        

        case IngredientSActions.UPDATE_INGREDIENT:
            state.ingredients[state.editedTngredientIndex] = action.payload;

            return {
                ...state,
                ingredients: [...state.ingredients],
                editedTngredient: null,
                editedTngredientIndex: -1
            };

        case IngredientSActions.DELETE_INGREDIENT:
            state.ingredients.splice(state.editedTngredientIndex, 1);

            return {
                ...state,
                ingredients: [...state.ingredients],
                editedTngredient: null,
                editedTngredientIndex: -1
            };

        case IngredientSActions.START_EDIT_INGREDIENT:
            const editedIngredientLocal = { ...state.ingredients[action.payload] };

            return {
                ...state,
                editedTngredient: editedIngredientLocal,
                editedTngredientIndex: action.payload
            };

            case IngredientSActions.STOP_EDIT_INGREDIENT:

            return {
                ...state,
                editedTngredient: null,
                editedTngredientIndex: -1
            }

        default: {
            return state;
        }
    }
}