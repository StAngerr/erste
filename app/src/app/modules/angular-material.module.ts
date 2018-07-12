import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatChipsModule, MatGridListModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatChipsModule, MatGridListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatChipsModule, MatGridListModule],
})
export class AngularMaterialModule { }
