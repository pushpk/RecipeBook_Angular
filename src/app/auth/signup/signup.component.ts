import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Response} from '@angular/http'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  wasSignupSuccessful: boolean = false;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onSignUp(form : NgForm)
  {

    const email = form.value.email;
    const password = form.value.password;

       this.authService.RegisterUser(email, password).subscribe(
        (res : Response) =>{
          console.log(res);
         if(res.status == 201){
          this.wasSignupSuccessful =  true;
         }
         else {
          this.wasSignupSuccessful =  false;
         }
        }
     );

     console.log("was this successful "+ this.wasSignupSuccessful);
  }

}
