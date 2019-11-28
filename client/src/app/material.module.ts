import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatCheckboxModule, 
    MatProgressSpinnerModule, 
    MatAutocompleteModule
  ],
  exports: [MatToolbarModule, MatCheckboxModule]
})
export class MaterialModule { }
