import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './componetns/articles-list/articles-list.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ArticlesService } from './services/articles.service';
import { ResourceInfoPanelComponent } from './componetns/resource-info-panel/resource-info-panel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [ArticlesService],
  declarations: [ArticlesListComponent, ResourceInfoPanelComponent]
})
export class ArticlesModule { }
