import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  editMode = false;
  id: any;
  recipe : Recipe;
  constructor(private route : ActivatedRoute,private recipeService : RecipeService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params : Params) => {

        this.editMode = params['id'] != null;
        this.id = +params['id']

      });

      if(this.editMode)
      {
         this.recipe = this.recipeService.getRecipe(this.id);
      }
      
  }

  onUpdateRecipe(recipeEdited : Recipe)
  {
    this.recipe.name = recipeEdited.name;
  }

}
