import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../models/article.model';
import * as _ from  'lodash';
import { MatDialog } from '@angular/material'
import { EditArticleComponent } from  '../edit-article/edit-article.component';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  public articles;
  public str;
  constructor(
    public dialog: MatDialog,
    private articlesService: ArticlesService
  ) {
  }
  ngOnInit() {
    this.articles = this.articlesService.getArticles('Technology', 7).subscribe((data) => {
      this.articles = _.map(data, article => new Article(article.name, article.category, article.article_text));
    });
  }

  public editArticle(article) {
    const dialogRef = this.dialog.open(EditArticleComponent, {
      width: '250px',
      data: article
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
