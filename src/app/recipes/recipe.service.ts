import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spagetti',
      'Delicious spagetti',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnBX-Dm3OalDT_NvPxxiyeWO4i38AAX3zvhPsRPL55UAHP80eKZnTAt9agSL8ELcwjXM&usqp=CAU',
      [new Ingredient('spagetti', 1), new Ingredient('tomato', 3)]
    ),
    new Recipe(
     'Meat',
     'Delicious meat',
     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
     [new Ingredient('meat', 1), new Ingredient('onion', 3)]
   ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]){
     this.recipes = recipes;
     this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
     this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number){
     return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
     this.recipes.push(recipe);
     this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
     this.recipes[index] = newRecipe;
     this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
     this.recipes.splice(index, 1);
     this.recipesChanged.next(this.recipes.slice());
  }
}
