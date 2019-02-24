import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Response} from '@angular/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isAuthenticated: boolean;
  userEmail: any;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  onLogin(form : NgForm)
  {
    this.userEmail= form.value.email;
    const password = form.value.password;

    this.authService.Login(this.userEmail, password).subscribe(
      result => { if(result){
        this.isAuthenticated = result;
        this.authService.authServiceStatusChanged.next(this.isAuthenticated);
        this.router.navigate(['/recipes']); 
      }
    }
      
      
   );
  }


 
}
