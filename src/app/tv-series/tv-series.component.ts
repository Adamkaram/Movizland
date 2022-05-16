import { Component, OnInit } from '@angular/core';
import { TVSeriesService } from '../Services/tvseries.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent implements OnInit {

tv: any=[];
  prefix="https://image.tmdb.org/t/p/w500/";

  constructor(public Tv:TVSeriesService) { }

  ngOnInit(): void {
    this.Tv.getPopularTvSeries().subscribe(
      (Response)=>{
        this.tv=Response;
        console.log(this.tv);
      }
    )
  }

}
