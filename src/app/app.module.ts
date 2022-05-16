import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieServiceService } from './Services/movie-service.service';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from "swiper/angular";
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailMoviesComponent } from './detail-movies/detail-movies.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { NowplayingMoviesComponent } from './nowplaying-movies/nowplaying-movies.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { KidMoviesComponent } from './kid-movies/kid-movies.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { DetailSeriesComponent } from './detail-series/detail-series.component';
import { TVSeriesService } from './Services/tvseries.service';

var routes:Routes=[
  {path:"Home",component:HomeComponent},
  {path:"Trending",component:TrendingMoviesComponent},
  {path:"NowPlaying",component:NowplayingMoviesComponent},
  {path:"TopRated",component:TopRatedComponent},
  {path:"Kid",component:KidMoviesComponent},
  {path:"TvSeries",component:TvSeriesComponent},
  {path:"TV/:id",component:DetailSeriesComponent},
  {path:"Movie/:id",component:DetailMoviesComponent},
  // {path:"**",component:ErrorComponent},
  {path:'',redirectTo:'Home', pathMatch: 'full' },


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailMoviesComponent,
    TrendingMoviesComponent,
    NowplayingMoviesComponent,
    TopRatedComponent,
    KidMoviesComponent,
    TvSeriesComponent,
    DetailSeriesComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,SwiperModule,RouterModule.forRoot(routes),CommonModule,YouTubePlayerModule,
  ],
  providers: [MovieServiceService,TVSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
