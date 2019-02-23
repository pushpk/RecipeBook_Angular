import { Component, Output,EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { HttpDataStorageService } from '../Shared/HttpDataStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: '../header/header.component.html'
 
})
export class HeaderComponent {

  constructor(private httpDataStorageService: HttpDataStorageService){}
  
@Output() section = new EventEmitter<string>();

  showSection(sectionName : string){
    this.section.emit(sectionName);
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


