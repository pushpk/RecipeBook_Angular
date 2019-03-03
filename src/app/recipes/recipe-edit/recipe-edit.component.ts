import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducers'
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  editMode = false;
  
  recipe: Recipe;
  recipeForm: FormGroup;
  private subscription: Subscription;

  recipeState: Observable<fromRecipe.State>;
  id: number;


  constructor(private route: ActivatedRoute, private router: Router, private store: Store<{ shoppingList: fromApp.AppState }>) { }

  ngOnInit() {

    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.editMode = params['id'] != null;
        this.id = +params['id'];
        this.initForm();
      });
  }
 
  private initForm() {

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    let recipeId = this.id;
    console.log(recipeId);

    if (this.editMode) {
      this.store.select('recipes').subscribe(
        (data) => {
          const recipe = data.recipes[recipeId];
          recipeName = recipe.name;
          recipeImagePath = recipe.imagePath;
          recipeDescription =recipe.description;

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
      );

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
      this.store.dispatch(new RecipeActions.UpdateRecipe({index : this.id, updatedRecipe : newRecipe}));
    }
    else{
      this.store.dispatch(new RecipeActions.AddRecipe(newRecipe));
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

  onDeleteIngredients(index: number)
  {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo : this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
