import { MatButtonModule, MatCheckboxModule, MatExpansionModule, MatMenuModule, MatIconModule, MatChipsModule, MatGridListModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatExpansionModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatChipsModule, MatGridListModule, MatCardModule],
  exports: [MatButtonModule, MatExpansionModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatChipsModule, MatGridListModule, MatCardModule],
})
export class AngularMaterialModule { }
