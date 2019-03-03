import * as fromAuthReducers from '../auth/store/auth.reducers';
import * as fromShoppingReducers from  '../shopping-list/store/shopping-list.reducer'
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    shoppingList: fromShoppingReducers.State,
    authReducers : fromAuthReducers.State
}

export const reducers : ActionReducerMap<AppState> = {
    shoppingList : fromShoppingReducers.shoppingListReducer,
    authReducers : fromAuthReducers.authReducer
};