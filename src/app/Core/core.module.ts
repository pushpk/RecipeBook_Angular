import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeService } from '../recipes/recipe.service';

import { HttpDataStorageService} from '../Shared/HttpDataStorage.service';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
      HttpDataStorageService,

    RecipeService,
    AuthService
  ]
})
export class CoreModule {}
