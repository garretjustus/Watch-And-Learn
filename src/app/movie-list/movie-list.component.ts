import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() movieRef: any;

  baseUrl: string = 'https://image.tmdb.org/t/p/w154';

  constructor() {}

  ngOnInit(): void {}
}
