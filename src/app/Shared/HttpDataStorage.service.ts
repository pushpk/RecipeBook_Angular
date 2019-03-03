// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { map } from 'rxjs/operators';

// import { RecipeService } from '../recipes/recipe.service';
// import { Recipe } from '../recipes/recipe.model';

// @Injectable()
// export class HttpDataStorageService {
//   constructor(private http: Http, private recipeService: RecipeService) {}

//   storeRecipes() {
//     return this.http.put('https://ng-recipe-book-f59f3.firebaseio.com/recipes.json', this.recipeService.getRecipes());
//   }

//   getRecipes() {
//     this.http.get('https://recipebookapiservice20190223034351.azurewebsites.net/api/RecipeBook')
//       .pipe(map(
//         (response: Response) => {
//           const recipes: Recipe[] = response.json();
//           console.log(response);
//           for (let recipe of recipes) {
//             if (!recipe['ingredients']) {
//               recipe['ingredients'] = [];
//             }
//           }
//           console.log(recipes);
//           return recipes;
//         }
//       ))
//       .subscribe(
//         (recipes: Recipe[]) => {
//           this.recipeService.setRecipes(recipes);
//           console.log(recipes);
//         }
//       );
//   }


// //   getRecipes() {
// //     this.http.get('https://ng-recipe-book-f59f3.firebaseio.com/recipes.json')
// //       .pipe(map(
// //         (response: Response) => {
// //           const recipes: Recipe[] = response.json();
// //           for (let recipe of recipes) {
// //             if (!recipe['ingredients']) {
// //               recipe['ingredients'] = [];
// //             }
// //           }
// //           console.log(recipes);
// //           return recipes;
// //         }
// //       ))
// //       .subscribe(
// //         (recipes: Recipe[]) => {
// //           this.recipeService.setRecipes(recipes);
// //           console.log(recipes);
// //         }
// //       );
// //   }
// }
