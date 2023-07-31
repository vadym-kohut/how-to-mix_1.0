import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ChosenIngService } from 'src/app/services/chosen-ing.service';
import { FavouriteIngredientsService } from 'src/app/services/favourite-ingredients.service';
import { Ingredient } from 'src/app/ingredient';
import { IngredientDBService } from 'src/app/services/ingredient-db.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

  ingredients$ = new Observable<any>();

  fullList$ = new Observable<any>();
  showFullList$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


  constructor(private http: HttpClient, private ingStore: IngredientDBService, private chosenIngStore: ChosenIngService, private favIngStore: FavouriteIngredientsService) { }

  getIngredientByName(name: string) {
    if (name !== "") {
      this.ingredients$ = this.ingStore.getIngredientByName(name);
      this.showFullList$.next(false);
    } else {
      this.showFullList$.next(true);
    }

  }

  addChosenIng(ing: Ingredient) {
    this.chosenIngStore.addChosenIng(ing);
  }

  addToFavIngs(ing: Ingredient) {
    this.favIngStore.addToFavIngs(ing);
  }


  ngOnInit(): void {
    this.fullList$ = this.ingStore.getIngredientList();
  }

}
