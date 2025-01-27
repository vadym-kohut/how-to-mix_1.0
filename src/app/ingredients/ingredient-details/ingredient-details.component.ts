import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IngredientDBService } from 'src/app/services/ingredient-db.service';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.scss']
})
export class IngredientDetailsComponent implements OnInit {

  ingredient$!: Observable<any>;

  constructor(private route: ActivatedRoute, private IngDB: IngredientDBService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ingredient$ = this.IngDB.getIngredientByName(params['name']);
    });
  }

}
