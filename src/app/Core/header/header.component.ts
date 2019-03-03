import { Component, Output,EventEmitter, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import * as fromApp from '../../store/app.reducers';
import *  as  fromAuthReducers from '../../auth/store/auth.reducers';
import *  as  fromAuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({

  selector: 'app-header',
  templateUrl: '../header/header.component.html'
 
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  userName: string;
  authState: Observable<fromAuthReducers.State>;

  constructor(private authService : AuthService, private store : Store<fromApp.AppState>){}
  
  ngOnInit() {
      this.store.select('authReducers').subscribe(data => {

        if(data.authenticated){
               this.isLoggedIn = true;
               this.userName =  localStorage.getItem('userEmail');
        }
        else{
          this.isLoggedIn = false;
          this.userName =  null;
        }
  });

}
@Output() section = new EventEmitter<string>();

  showSection(sectionName : string){
    this.section.emit(sectionName);
  }

  onLogout(){
      this.store.dispatch(new fromAuthActions.Logout());
  }
  
  onSaveData(){
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onGetData(){
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }
}


