import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  AuthService } from '../auth/auth.service';
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
  baseUrl = 'http://localhost:4201/api'
  constructor(private http: HttpClient, private authSrv: AuthService) {}


  getMovies(){
    return this.http.get<Movies[]>(`${this.baseUrl}/movie/popular`)
  }
}
