import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../Services/movie-service.service';

@Component({
  selector: 'app-nowplaying-movies',
  templateUrl: './nowplaying-movies.component.html',
  styleUrls: ['./nowplaying-movies.component.css']
})
export class NowplayingMoviesComponent implements OnInit {
PlayingMovies: any=[];
  prefix="https://image.tmdb.org/t/p/w500/";

  constructor(public Movies:MovieServiceService) { }

  ngOnInit(): void {
    this.Movies.getNowPlaying().subscribe(
      (Response)=>{
        this.PlayingMovies=Response;
        console.log(this.PlayingMovies);
      }
    )
  }
}
