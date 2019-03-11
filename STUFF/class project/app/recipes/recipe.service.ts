import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/shared.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import index from '@angular/cli/lib/cli';
@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple Test',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe(
      'A New Test Recipe',
      'This is simple Test',
      'https://cdn.schlotzskys.com/-/media/schlotzskys/menu/sandwiches/smoked-turkey-breast_874x440.jpg?v=1&d=20180104T171725Z',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
 constructor(private shoppingListService: ShoppingListService) {}
 getRecipes() {
   return this.recipes.slice();
 }

 getRecipe(index: number) {
   return this.recipes[index];
 }
 addIngredientsToShoppingList(ingrendents: Ingredient[]) {
  this.shoppingListService.addIngredients(ingrendents);
 }
}
