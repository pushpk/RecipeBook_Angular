import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as  fromAPP from '../../store/app.reducers';
import * as  AuthActions from '../store/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isAuthenticated: boolean;
  userEmail: any;

  constructor(private store: Store<fromAPP.AppState>, private router: Router) { }

  ngOnInit() {
  }
  onLogin(form: NgForm) {
    this.userEmail = form.value.email;
    const password = form.value.password;

    this.store.dispatch(new AuthActions.Try_Signin({ email: this.userEmail, password: password }));
  }
}
