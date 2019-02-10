import { Component } from '@angular/core';
import {ShoppingListService } from './shopping-list/shopping-list.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'RecipeShoppingListAngular';
// }

//https://stackblitz.com/edit/angular-server-cockpit-binding?file=src%2Fapp%2Fapp.component.ts
//https://github.com/sfdeloach/learn-angular/tree/master/ae-comp-data-deep-dive/assignment/src/app

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ShoppingListService]
})
export class AppComponent {
 

  loadedSection = 'receipe';
  onNavigate(feature : string){
    this.loadedSection = feature;
  }
  }
