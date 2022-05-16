import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../Services/movie-service.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent implements OnInit {
  trendingMovies: any=[];
  prefix="https://image.tmdb.org/t/p/w500/";

  constructor(public Movies:MovieServiceService) { }

  ngOnInit(): void {
    this.Movies.getTrendingMovies().subscribe(
      (Response)=>{
        this.trendingMovies=Response;
        console.log(this.trendingMovies);
      }
    )
  }

}
