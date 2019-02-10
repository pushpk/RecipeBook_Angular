import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '../header/header.component.html'
 
})
export class HeaderComponent {
  
@Output() section = new EventEmitter<string>();

  showSection(sectionName : string){
    this.section.emit(sectionName);
  }
}
