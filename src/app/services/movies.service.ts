import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Favorites } from '../models/favorites';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl = 'http://localhost:4201/api';
  constructor(private http: HttpClient, private authSrv: AuthService) {}

  getMovies() {
    return this.http.get<Movies[]>(`${this.baseUrl}/movie/popular`);
  }

  getFavorites(id: number ) {
    return this.http.get<Favorites[]>(`${this.baseUrl}/favorites?userId=${id}`)
  }

  addFavorites(userId: number, movieId: number) {
    const favorite: Favorites = {
      userId,
      movieId,
    };
    return this.http.post<Favorites>(`${this.baseUrl}/favorites`, favorite);
  }
  removeFavorites(id: number) {
    return this.http.delete<Favorites>(`${this.baseUrl}/favorites/${id}`);
  }
}
