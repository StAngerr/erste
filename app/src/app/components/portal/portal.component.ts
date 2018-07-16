import { Component, OnInit } from '@angular/core';
import { Portal } from  '../../classes/portal.class'
@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  public portal;
  constructor() {
    this.portal = new Portal('US news', 0, 'www.usnews.com');
  }

  ngOnInit() {
  }

}
