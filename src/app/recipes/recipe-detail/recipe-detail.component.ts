import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  receipeItem : Recipe
  constructor(private recipeService : RecipeService, private route : ActivatedRoute, private router : Router) { }

  
  ngOnInit() {

    this.route.params.subscribe(
      (params : Params) => {
        const id = +params['id'];

        this.receipeItem = this.recipeService.getRecipe(id);

      }
    );
  }

  AddtoShoppingList(receipe : Recipe)
  {
    this.recipeService.addIngredeints(receipe.ingredeints);
  }

  onDeleteRecipe(index : number){
    this.recipeService.deleteRecipe(index);
    this.router.navigate(['../'], {relativeTo : this.route});

  }

}
