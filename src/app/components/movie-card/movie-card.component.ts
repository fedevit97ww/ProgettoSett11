
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from 'src/app/models/movies';
import { FavMovies, MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies!:Movies[]
  sub!:Subscription
  constructor(private movieSrv:MoviesService,) { }

   ngOnInit():void{
    this.sub = this.movieSrv.getMovies().subscribe(f=>{
      this.movies = f
    });
  }


}
