import { Component } from '@angular/core';

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
  title = 'app';
  tiles: Tile[] = [
    { cols: 4, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 3, rows: 1 },
    { cols: 4, rows: 1 },
  ];
}
