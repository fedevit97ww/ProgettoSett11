import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movies;
  constructor() {}

  ngOnInit(): void {}
}
