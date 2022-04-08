import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies!: Movies[];
  sub!: Subscription;
  constructor(private movieSrv: MoviesService) {}

  ngOnInit(): void {
    this.sub = this.movieSrv.getMovies().subscribe((f) => {
      this.movies = f;
    });
  }
}
