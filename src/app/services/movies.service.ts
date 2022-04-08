import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Favorites } from '../models/favorites';
import { Movies } from '../models/movies';

export interface FavMovies {
  data: Movies;
  favId?: number;
  favIsLoading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl = 'http://localhost:4201/api';
  constructor(private http: HttpClient, private authSrv: AuthService) {}

  getMovies() {
    return this.http.get<Movies[]>(`${this.baseUrl}/movie/popular`);
  }

  addFavorites(userId: number, movieId: number) {
    const favorite: Favorites = {
      movieId,
      userId,
    };
    return this.http.post<Favorites>(`${this.baseUrl}/favorites`, favorite);
  }
}
