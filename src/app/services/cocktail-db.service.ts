import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailDBService {

  constructor(private http: HttpClient) { }

  getCocktailsByName(name: string) {
    return this.http.get(
      '/api/json/v1/1/search.php',
      {
        params: { s: name }
      }
    ).pipe(
      pluck('drinks')
    );
  }

  getCocktailById(id: string) {
    return this.http.get(
      '/api/json/v1/1/lookup.php',
      {
        params: { i: id }
      }
    ).pipe(
      pluck('drinks'),
      map(([drink]: any) => drink)
    );
  }

  getCocktailByIngredient(ingName: string) {
    return this.http.get(
      '/api/json/v1/1/filter.php',
      {
        params: { i: ingName }
      }
    ).pipe(
      pluck('drinks')
    );
  }

}