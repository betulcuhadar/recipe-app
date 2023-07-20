import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipesRoutingModule } from '../recipes/recipes-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingListComponent,
      },
    ]),
    SharedModule,
    FormsModule,
  ],
  exports: [ShoppingListComponent, ShoppingEditComponent],
})
export class ShoppingListModule {}
