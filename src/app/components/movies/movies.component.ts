import { AuthService } from 'src/app/auth/auth.service';
import { AuthData } from './../../auth/auth.service';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { Favorites } from 'src/app/models/favorites';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies!: Movies[];
  sub!: Subscription;
  favoriti!: Favorites[];
  userLog!: AuthData | null;

  constructor(private movieSrv: MoviesService, private authSrv: AuthService) {}

  ngOnInit(): void {
    this.sub = this.movieSrv.getMovies().subscribe((f) => {
      this.movies = f;
    });

    this.authSrv.user$.subscribe((user) => {
      this.userLog = user;
    });

    this.sub = this.movieSrv
      .getFavorites(this.userLog!.user.id)
      .subscribe((x) => {
        console.log(x);
        this.favoriti = x;
        console.log(this.favoriti);
      });
  }
}
