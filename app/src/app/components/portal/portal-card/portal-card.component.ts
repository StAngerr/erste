import { Component, HostBinding, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portal-card',
  templateUrl: './portal-card.component.html',
  styleUrls: ['./portal-card.component.css']
})
export class PortalCardComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'test-class';
  @Input() portal;

  public votes: number = 0;
  constructor() {

  }

  ngOnInit() {
  }

  public voteUp() {
    this.portal.voteUp();
  }

  public voteDown() {
    this.portal.voteDown();
  }
}
