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

    
    
      isLoggedIn() {
        return this.isAuthenticated;
      }

      isUserAuthenticated()
      {

        this.isAuthenticated = localStorage.getItem('auth-token') != null;
        return this.isAuthenticated;
          
      }
}