import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'This is just a test', 'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_960_720.jpg'),
    new Recipe('Pizza', 'This is just a test', 'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_960_720.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
