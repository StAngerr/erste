import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service'
@Component({
  selector: 'app-resource-info-panel',
  templateUrl: './resource-info-panel.component.html',
  styleUrls: ['./resource-info-panel.component.css']
})
export class ResourceInfoPanelComponent implements OnInit {
  private str;
  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
  }

}
