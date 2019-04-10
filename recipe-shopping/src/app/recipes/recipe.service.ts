import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe('Pizza', 'This is how we make the dough...',
      'https://www.presalocala.com/wp-content/uploads/2015/06/pizza.jpg',
      [
        new Ingredient('Ham', 1),
        new Ingredient('Mozzarella', 2),
        new Ingredient('Bacon', 1),
      ]),
    new Recipe('Pasta', 'First, you have to boil the pastas',
      'https://www.maxpixel.net/static/photo/1x/Pasta-Hog-Italian-Recipe-Food-Truffle-Lunch-3663720.jpg',
      [
        new Ingredient('Pasta', 1)
      ]),
    new Recipe('Burger', 'Grab a good piece of meat',
      'https://www.maxpixel.net/static/photo/1x/Burger-Roll-Barbecue-Hamburger-Barbeque-Bbq-2762431.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
