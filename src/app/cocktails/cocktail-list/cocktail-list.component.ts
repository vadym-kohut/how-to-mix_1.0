import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailDBService } from 'src/app/services/cocktail-db.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  cocktails$ = new Observable<any>();

  constructor(private cocktailDB: CocktailDBService) { }

  getCocktailsByName(name: any) {
    this.cocktails$ = this.cocktailDB.getCocktailsByName(name);
  }

  ngOnInit(): void {
  }

}
