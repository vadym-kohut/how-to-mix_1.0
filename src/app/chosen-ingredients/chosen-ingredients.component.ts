import { Component, OnInit } from '@angular/core';
import { ChosenIngService } from '../services/chosen-ing.service';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-chosen-ingredients',
  templateUrl: './chosen-ingredients.component.html',
  styleUrls: ['./chosen-ingredients.component.scss']
})
export class ChosenIngredientsComponent implements OnInit {

  constructor(private chosenIngsStore: ChosenIngService) { }

  ngOnInit(): void {
  }

  removeChosen(ing: Ingredient) {
    this.chosenIngsStore.removeChosenIng(ing);
  }

}
