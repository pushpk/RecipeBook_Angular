import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() receipeItem : Recipe
  constructor(private recipeService : RecipeService) { }

  
  ngOnInit() {
  }

  AddtoShoppingList(receipe : Recipe)
  {
    this.recipeService.addIngredeints(receipe.ingredeints);
  }

}
