import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TVSeriesService {
baseUrl="https://api.themoviedb.org/3/";
  api_key="95d3da88e5f52180482c80448f6b7607";
  constructor(public myTvSeries:HttpClient) { }

  getPopularTvSeries(){
    return this.myTvSeries.get(`${this.baseUrl}tv/popular?api_key=${this.api_key}`);
  }
    getTvVideos(TvID:any){
    return this.myTvSeries.get(`${this.baseUrl}tv/${TvID}/videos?api_key=${this.api_key}`);
  }
  getTvDetails(TvID:any){
    return this.myTvSeries.get(`${this.baseUrl}tv/${TvID}?api_key=${this.api_key}`);
  }
    getTvcast(TvID:any){
    return this.myTvSeries.get(`${this.baseUrl}tv/${TvID}/credits?api_key=${this.api_key}`);
  }
   getTvImages(TvID:any){
    return this.myTvSeries.get(`${this.baseUrl}tv/${TvID}/images?api_key=${this.api_key}`);
  }
  getSimilarTv(TvID:any){
    return this.myTvSeries.get(`${this.baseUrl}tv/${TvID}/similar?api_key=${this.api_key}`);
  }
}
