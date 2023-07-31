import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChosenIngredientsComponent } from './chosen-ingredients/chosen-ingredients.component';
import { ChosenIngComponent } from './chosen-ingredients/chosen-ing/chosen-ing.component';
import { FovouriteIngredientsComponent } from './fovourite-ingredients/fovourite-ingredients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StopListComponent } from './stop-list/stop-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailDetailsComponent } from './cocktails/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktails/cocktail-list/cocktail-list.component';
import { IngredientSearchComponent } from './ingredient-search/ingredient-search.component';
import { CocktailSearchComponent } from './cocktail-search/cocktail-search.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import { IngredientDetailsComponent } from './ingredients/ingredient-details/ingredient-details.component';
import { CocktailsByIngredientComponent } from './cocktails/cocktails-by-ingredient/cocktails-by-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ChosenIngredientsComponent,
    ChosenIngComponent,
    FovouriteIngredientsComponent,
    StopListComponent,
    CocktailsComponent,
    CocktailDetailsComponent,
    CocktailListComponent,
    IngredientSearchComponent,
    CocktailSearchComponent,
    IngredientsComponent,
    IngredientListComponent,
    IngredientDetailsComponent,
    CocktailsByIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
