import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pizza', 'This is how we make the dough...', 'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_960_720.jpg'),
    new Recipe('Pasta', 'First, you have to boil the pastas',
      'https://www.maxpixel.net/static/photo/1x/Pasta-Hog-Italian-Recipe-Food-Truffle-Lunch-3663720.jpg'),
    new Recipe('Burger', 'Grab a good piece of meat', 'https://cdn.pixabay.com/photo/2015/04/20/13/25/burger-731298_960_720.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
