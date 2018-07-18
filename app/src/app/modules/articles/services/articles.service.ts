import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticlesService implements OnInit {
  public articles = [ {name: 'sds'}, {name: 'other'} ];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  public getArticles(section, period) {
    const url = '/articles';

    return this.http.get(url);
  }
}
