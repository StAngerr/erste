import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import {Article} from '../../models/article.model';
import * as _ from  'lodash';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  public articles;
  public str;
  constructor(
    private articlesService: ArticlesService
  ) {
  }
  ngOnInit() {
    this.articles = this.articlesService.getArticles('Technology', 7).subscribe((data) => {
      this.articles = _.map(data, article => new Article(article.name, article.category, article.article_text));
    });
  }
}
