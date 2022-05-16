import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../Services/movie-service.service';

@Component({
  selector: 'app-kid-movies',
  templateUrl: './kid-movies.component.html',
  styleUrls: ['./kid-movies.component.css']
})
export class KidMoviesComponent implements OnInit {
KidMovies: any=[];
  prefix="https://image.tmdb.org/t/p/w500/";

  constructor(public Movies:MovieServiceService) { }

  ngOnInit(): void {
    this.Movies.getPopularKidsMovie().subscribe(
      (Response)=>{
        this.KidMovies=Response;
        console.log(this.KidMovies);
      }
    )
  }

}
