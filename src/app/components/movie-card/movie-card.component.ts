import { Favorites } from './../../models/favorites';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { AuthService, AuthData } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movies;
  movies!: Movies[];
  sub!: Subscription;
  userLog!: AuthData | null;
  favoriti!: Favorites[];
  baseUrl = 'http://localhost:4201/api';
  fav: boolean = false;

  constructor(private movieSrv: MoviesService, private authSrv: AuthService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((user) => {
      this.userLog = user;
    });
  }

  async addFav(userId: number, movieId: number) {
    await this.movieSrv.addFavorites(userId, movieId).subscribe();
    this.fav = true;
  }

  async remFav(id: number) {
    await this.movieSrv.removeFavorites(id);
    this.fav = false;
  }
}
