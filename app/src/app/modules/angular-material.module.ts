import { MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatDialogModule, MatCheckboxModule, MatExpansionModule, MatMenuModule, MatIconModule, MatChipsModule, MatGridListModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatDialogModule, MatExpansionModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatChipsModule, MatGridListModule, MatCardModule],
  exports: [MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatDialogModule, MatExpansionModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatChipsModule, MatGridListModule, MatCardModule],
})
export class AngularMaterialModule { }
