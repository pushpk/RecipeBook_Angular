import * as AuthActions from './auth.actions';

export interface State {
    token: string;
    authenticated: boolean;
  
}

const initialState: State = {
    token: null,
    authenticated: false,
  

};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {

    switch (action.type) {
        case AuthActions.SIGNUP:
        case AuthActions.SIGNIN:
            return {
                ...state,
                authenticated: true
            };

        case AuthActions.LOGOUT:
        localStorage.removeItem("auth-token");
        localStorage.removeItem("userEmail");
            return {
                ...state,
                authenticated: false,
                token: null
            };
        case AuthActions.SET_TOKEN:
            state.token = action.payload.token;
            localStorage.setItem("auth-token", action.payload.token);
            localStorage.setItem("userEmail", action.payload.userEmail);
            return {
                ...state,
                token: action.payload.token,
            }
        default:
            return state


    }
}