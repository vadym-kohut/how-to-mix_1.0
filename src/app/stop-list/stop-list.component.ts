import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { IngredientDBService } from '../services/ingredient-db.service';
import { StopListService } from '../services/stop-list.service';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.scss']
})
export class StopListComponent implements OnInit {

  stopList$ = this.stopListStore.getStopList$();

  constructor(private stopListStore: StopListService, private ingStore: IngredientDBService) { }

  ngOnInit(): void {
  }

  removeFromStopList(remIng: Ingredient) {
    this.stopListStore.removeFromStopList(remIng);
  }

}
