import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck, tap } from 'rxjs';

export interface IngredientDetails {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
  strAlcohol: string;
  strABV: string;
}

@Injectable({
  providedIn: 'root'
})
export class IngredientDBService {

  constructor(private http: HttpClient) { }

  getIngredientList() {
    return this.http.get(
      '/api/json/v1/1/list.php',
      {
        params: { i: 'list' }
      }
    ).pipe(
      pluck('drinks')
    );
  }

  getIngredientByName(name: string): Observable<IngredientDetails> {
    return this.http.get<{ ingredients: IngredientDetails }>(
      '/api/json/v1/1/search.php',
      {
        params: { i: name }
      }
    ).pipe(
        map(data => data.ingredients)
    );
  }

  getIngredientById(id: string) {
    return this.http.get(
      '/api/json/v1/1/lookup.php',
      {
        params: { iid: id }
      }
    ).pipe(
      pluck('ingredients'),
      map(([ingredient]: any) => ingredient)
    );
  }

}
