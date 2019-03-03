import {Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

    @Effect() 
    authSignup = this.actions$.pipe(ofType(AuthActions.TRY_SIGNUP)).pipe(
            map((action : AuthActions.Try_Signup) => { return action.payload }),
            switchMap(
                (authData: {email: string, password: string}) => {

                    this.email = authData.email;
                    let email = this.email;
                    let password = authData.password;
                    let data = JSON.stringify({ email, password});
                    let headers = new Headers({ 'Content-Type': 'application/json' });
                    let options = new RequestOptions({ headers: headers });
                    return from(this.http.post("https://reqres.in/api/register", data, options))
                }),
                mergeMap((data :Response) => {
                   
                    const jsonData = data.json();
                    this.router.navigate(['/']);
                    return [
                        {
                          type: AuthActions.SIGNUP
                        },
                        {
                          type: AuthActions.SET_TOKEN,
                          payload: {token : jsonData.token, userEmail : this.email}
                        }
                      ];
                            
                })
            
        );

        @Effect() 
    authSignin = this.actions$.pipe(ofType(AuthActions.TRY_SIGNIN)).pipe(
            map((action : AuthActions.Try_Signin) => { return action.payload }),
            switchMap(
                (authData: {email: string, password: string}) => {

                    this.email = authData.email;
                    let email = this.email;
                    let password = authData.password;
                    let data = JSON.stringify({ email, password});
                    let headers = new Headers({ 'Content-Type': 'application/json' });
                    let options = new RequestOptions({ headers: headers });

                    return from(this.http.post("https://reqres.in/api/login", data, options))
                }),
                mergeMap((data :Response) => {
                    const jsonData = data.json();
                    this.router.navigate(['/']);

                    return [
                        {
                          type: AuthActions.SIGNIN
                        },
                        {
                          type: AuthActions.SET_TOKEN,
                          payload: {token : jsonData.token, userEmail : this.email}
                        }
                      ];
                            
                })
            
        );

    @Effect({ dispatch: false })
    authLogout = this.actions$.pipe(ofType(AuthActions.LOGOUT)).pipe(tap( () => {
        this.router.navigate(['/']);
    }));


    email: string;


    constructor(
        private actions$: Actions, private http: Http, private router: Router) {}
}