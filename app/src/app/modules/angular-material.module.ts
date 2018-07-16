import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatChipsModule, MatGridListModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatChipsModule, MatGridListModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatChipsModule, MatGridListModule, MatCardModule],
})
export class AngularMaterialModule { }
