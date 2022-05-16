import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  baseUrl="https://api.themoviedb.org/3/";
  api_key="95d3da88e5f52180482c80448f6b7607";
  constructor(public myMovies:HttpClient) { }

  getPopularMovies(){
    return this.myMovies.get(`${this.baseUrl}discover/movie?sort_by=popularity.desc&api_key=${this.api_key}`);
  }
  getTopRated(){
    return this.myMovies.get(`${this.baseUrl}movie/top_rated?api_key=${this.api_key}`);
  }
  getNowPlaying(){
    return this.myMovies.get(`${this.baseUrl}movie/now_playing?api_key=${this.api_key}`);
  }
  getSimilarMovies(MovieID:any){
    return this.myMovies.get(`${this.baseUrl}movie/${MovieID}/similar?api_key=${this.api_key}`);
  }
  getTrendingMovies(){
    return this.myMovies.get(`${this.baseUrl}trending/movie/week?api_key=${this.api_key}`);
  }
  getMovieVideos(MovieID:any){
    return this.myMovies.get(`${this.baseUrl}movie/${MovieID}/videos?api_key=${this.api_key}`);
  }
  getMovieDetails(MovieID:any){
    return this.myMovies.get(`${this.baseUrl}movie/${MovieID}?api_key=${this.api_key}`);
  }
    getMoviecast(MovieID:any){
    return this.myMovies.get(`${this.baseUrl}movie/${MovieID}/credits?api_key=${this.api_key}`);
  }
   getMovieImages(MovieID:any){
    return this.myMovies.get(`${this.baseUrl}movie/${MovieID}/images?api_key=${this.api_key}`);
  }
  getPopularKidsMovie(){
    return this.myMovies.get(`${this.baseUrl}discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.api_key}`)
  }
}
