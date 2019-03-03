import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as  fromAPP from '../../store/app.reducers';
import * as  AuthActions from '../store/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  wasSignupSuccessful: boolean = false;

  constructor(private store  : Store<fromAPP.AppState>) { }

  ngOnInit() {
  }

  onSignUp(form : NgForm)
  {

    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.Try_Signup({email : email, password : password}));
  }

}
