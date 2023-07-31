import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailDetailsComponent } from './cocktails/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktails/cocktail-list/cocktail-list.component';
import { CocktailsByIngredientComponent } from './cocktails/cocktails-by-ingredient/cocktails-by-ingredient.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { FovouriteIngredientsComponent } from './fovourite-ingredients/fovourite-ingredients.component';
import { IngredientDetailsComponent } from './ingredients/ingredient-details/ingredient-details.component';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { StopListComponent } from './stop-list/stop-list.component';

const routes: Routes = [
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'favourite-ingredients', component: FovouriteIngredientsComponent },
  {
    path: 'ingredients', component: IngredientsComponent,
    children: [
      { path: 'list', component: IngredientListComponent },
      { path: 'details/:name', component: IngredientDetailsComponent }
    ]
  },
  {
    path: 'cocktails', component: CocktailsComponent,
    children: [
      { path: 'list', component: CocktailListComponent },
      { path: 'details/:id', component: CocktailDetailsComponent },
      { path: 'by-ingredient/:ing', component: CocktailsByIngredientComponent }
    ]
  },
  { path: 'stop-list', component: StopListComponent },
  { path: '**', redirectTo: 'ingredients/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
