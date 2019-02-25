import { Component, Output,EventEmitter, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpDataStorageService } from '../../Shared/HttpDataStorage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: '../header/header.component.html'
 
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  userName: string;

  constructor(private httpDataStorageService: HttpDataStorageService, private authService : AuthService){}
  
  ngOnInit() {

    this.authService.authServiceStatusChanged.subscribe((statusChanged : boolean) => {
      this.isLoggedIn = statusChanged;
      this.userName =  localStorage.getItem('username');
   });

  }
@Output() section = new EventEmitter<string>();

  showSection(sectionName : string){
    this.section.emit(sectionName);
  }

  onLogout(){

    this.authService.logout();
    this.authService.authServiceStatusChanged.subscribe((statusChanged : boolean) => {
       this.isLoggedIn = statusChanged;
    });

  }
  
  onSaveData(){

    this.httpDataStorageService.storeRecipes()
          .subscribe((response: Response) => {
          
              console.log(response);
            }
        );
    
  }

  onGetData(){
    this.httpDataStorageService.getRecipes();
  }
}


