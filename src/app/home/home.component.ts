import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../Services/movie-service.service';
import SwiperCore, { SwiperOptions } from 'swiper';
import { TVSeriesService } from '../Services/tvseries.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies: any=[];
  nowPlayingMovies: any=[];
  topRatedMovies: any=[];
  popularkids: any=[];

  prefix="https://image.tmdb.org/t/p/w500/";
  constructor(public movies: MovieServiceService) {

  } 

  ngOnInit(): void {
    this.movies.getNowPlaying().subscribe(
      (response) => {
        this.nowPlayingMovies = response;
        console.log(this.nowPlayingMovies);
      }
    )


    this.movies.getTrendingMovies().subscribe(
      (response) => {
        this.trendingMovies = response;
        console.log(this.trendingMovies);
      }
    )
    this.movies.getTopRated().subscribe(
      (response) => {
        this.topRatedMovies = response;
        console.log(this.topRatedMovies);
      }
    )

    this.movies.getPopularKidsMovie().subscribe(
      (response) => {
        this.popularkids = response;
        console.log(this.popularkids);
      }
    )


  }




}

