import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  editMode = false;
  id: any;
  recipe: Recipe;
  recipeForm: FormGroup;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {

    this.subscription = this.route.params.subscribe(
      (params: Params) => {

        this.editMode = params['id'] != null;
        this.id = +params['id'];
        this.initForm();

      });

    if (this.editMode) {
      this.recipe = this.recipeService.getRecipe(this.id);
    }
  }
 
  private initForm() {

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredeints']) {
        for (let ingredient of recipe.ingredeints) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            }));
        }
      }
    }
    this.recipeForm = new FormGroup(
      {
        'name': new FormControl(recipeName, Validators.required),
        'imagePath': new FormControl(recipeImagePath, Validators.required),
        'description': new FormControl(recipeDescription, Validators.required),
        'ingredients': recipeIngredients
      }
    );
  }

  onSubmit() {
    const newRecipe = new Recipe(this.recipeForm.value['name'],this.recipeForm.value['description'],this.recipeForm.value['imagePath'],this.recipeForm.value['ingredients'])
    if(this.editMode)
    {
      console.log(this.recipeForm)
      this.recipeService.updateRecipe(this.id, newRecipe);
    }
    else{
      console.log(this.recipeForm)
      this.recipeService.addRecipes(newRecipe);
    }

    this.onCancel();
  }

  onUpdateRecipe(recipeEdited: Recipe) {
    this.recipe.name = recipeEdited.name;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
              'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo : this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
