import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';



const routes: Routes = [
  {path : '', component: HomeComponent , pathMatch: 'full'},
  {path: 'recipes', loadChildren: './recipes/recipe.module#RecipesModule'},
  {path : 'shopping-list', component : ShoppingListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
