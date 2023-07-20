import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  startEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('banana', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
     return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
     for(let ingredient of ingredients){
          this.ingredients.push(ingredient);
     }
  }

  updateIngredient(index: number, newIngredient: Ingredient){
     this.ingredients[index] = newIngredient;
     this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
     this.ingredients.splice(index, 1);
     this.ingredientsChanged.next(this.ingredients.slice());
  }
}
