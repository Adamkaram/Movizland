import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../Services/movie-service.service';
import SwiperCore , { SwiperOptions ,Navigation} from 'swiper';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-detail-movies',
  templateUrl: './detail-movies.component.html',
  styleUrls: ['./detail-movies.component.css']
})
export class DetailMoviesComponent implements OnInit {
 MovieID:any;
DetialMovie:any=[];
crew:any=[];
images:any;
videos:any;
similarMovies:any;
prefix="https://image.tmdb.org/t/p/w500/";
prefixvideo="https://www.youtube.com/embed/";

  constructor(private movie:MovieServiceService,public myActivated:ActivatedRoute) {
    this.MovieID=this.myActivated.snapshot.params[`id`];
   }

   ngOnInit(): void {
    this.movie.getMovieDetails(this.MovieID).subscribe(
      (response)=>{
        this.DetialMovie=response;
        console.log(this.DetialMovie);
      },
      (error)=>{
        console.log(this.MovieID);
      }
    )

    this.movie.getMoviecast(this.MovieID).subscribe(
      (response)=>{
        this.crew=response;
        console.log(this.crew);
      },
      (error)=>{
        console.log(this.MovieID);
      }
    )

    this.movie.getMovieImages(this.MovieID).subscribe(
      (response)=>{
        this.images=response;
        console.log(this.images);
      },
      (error)=>{
        console.log(this.MovieID);
      }
    )
    this.movie.getMovieVideos(this.MovieID).subscribe(
      (response:any)=>{
        this.videos=response.results.slice(3,9);
        console.log(this.videos);
      },
      (error)=>{
        console.log(this.MovieID);
      }
    )
    this.movie.getSimilarMovies(this.MovieID).subscribe(
      (response:any)=>{
        this.similarMovies=response.results.slice(7,14);
        console.log(this.similarMovies);
      },
      (error)=>{
        console.log(this.MovieID);
      }
    )
  }
}
