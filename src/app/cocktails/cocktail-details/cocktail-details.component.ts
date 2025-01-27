import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { CocktailDBService } from 'src/app/services/cocktail-db.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {

  cocktail$!: Observable<any>;
  ings$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private cocktailDB: CocktailDBService
  ) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cocktail$ = this.cocktailDB.getCocktailById(params['id']);
    });

    this.ings$ = this.cocktail$.pipe(
      map(drink => Object.entries(drink)),
      map((entries: any) => {
        const ingredients = entries
          .filter(([key, val]: any) => {
            return key.startsWith('strIng') && val
          }).map(([_, val]: any) => val);
        const measures = entries
          .filter(([key, val]: any) => {
            return key.startsWith('strMeasure') && val
          }).map(([_, val]: any) => val);
        const ingsArr = measures.reduce((ingsArr: any, field: any, index: any) => {
          ingsArr[ingredients[index]] = field;
          return ingsArr;
        }, {});
        return ingsArr;
      }),
        tap(x => console.log(x))
    );
  }

}
