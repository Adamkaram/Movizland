import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../Services/movie-service.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
TopRatedMovies: any=[];
  prefix="https://image.tmdb.org/t/p/w500/";

  constructor(public Movies:MovieServiceService) { }

  ngOnInit(): void {
    this.Movies.getTopRated().subscribe(
      (Response)=>{
        this.TopRatedMovies=Response;
        console.log(this.TopRatedMovies);
      }
    )
  }
}
