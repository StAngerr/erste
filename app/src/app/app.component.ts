import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/thumbs-up.svg'));
    iconRegistry.addSvgIcon('thumbs-down', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/thumbs-down.svg'));
  }
}
