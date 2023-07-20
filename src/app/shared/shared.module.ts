import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { LoadinSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoadinSpinnerComponent, DropdownDirective],
  imports: [CommonModule],
  exports: [LoadinSpinnerComponent, DropdownDirective, CommonModule]
})
export class SharedModule {}
