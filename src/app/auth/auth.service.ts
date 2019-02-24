import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthService {
    isAuthenticated: boolean;
    authServiceStatusChanged = new Subject<boolean>();

    
    constructor(private http: Http) {
        this.isAuthenticated = !!localStorage.getItem('auth_token');
    
     }

    RegisterUser(email: string, password: string): Observable<Response> {

        
        let data = JSON.stringify({ email, password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });


        //using test API from https://reqres.in/
        return this.http.post("https://reqres.in/api/register", data, options);

    }

    Login(email: string, password: string) {

        let data = JSON.stringify({ email, password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        //using test API from https://reqres.in/
        return this.http.post("https://reqres.in/api/login", data, options).pipe(
            map((res :Response)=> 
                res.json()
               
            ), 
            map(
                res => {
                if(res.token){
                    localStorage.setItem('auth-token', res.token);
                    localStorage.setItem('username',email);
                    this.isAuthenticated = true;
                    return this.isAuthenticated;
                }}
                )
                    
        );


    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.clear();
        this.isAuthenticated = false;
        this.authServiceStatusChanged.next(this.isAuthenticated);
      }
    
      isLoggedIn() {
        return this.isAuthenticated;
      }

      isUserAuthenticated()
      {

        this.isAuthenticated = localStorage.getItem('auth-token') != null;
        return this.isAuthenticated;
          
      }
}