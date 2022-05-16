import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVSeriesService } from '../Services/tvseries.service';

@Component({
  selector: 'app-detail-series',
  templateUrl: './detail-series.component.html',
  styleUrls: ['./detail-series.component.css']
})
export class DetailSeriesComponent implements OnInit {
 TvID:any;
DetialTv:any=[];
crew:any=[];
images:any;
videos:any;
similarTv:any;
prefix="https://image.tmdb.org/t/p/w500/";
prefixvideo="https://www.youtube.com/embed/";

  constructor(private tv:TVSeriesService,public myActivated:ActivatedRoute) {
    this.TvID=this.myActivated.snapshot.params[`id`];
   }

   ngOnInit(): void {
    this.tv.getTvDetails(this.TvID).subscribe(
      (response)=>{
        this.DetialTv=response;
        console.log(this.DetialTv);
      },
      (error)=>{
        console.log(this.DetialTv);
      }
    )

    this.tv.getTvcast(this.TvID).subscribe(
      (response)=>{
        this.crew=response;
        console.log(this.crew);
      },
      (error)=>{
        console.log(this.TvID);
      }
    )

    this.tv.getTvImages(this.TvID).subscribe(
      (response)=>{
        this.images=response;
        console.log(this.images);
      },
      (error)=>{
        console.log(this.TvID);
      }
    )
    this.tv.getTvVideos(this.TvID).subscribe(
      (response:any)=>{
        this.videos=response.results.slice(3,9);
        console.log(this.videos);
      },
      (error)=>{
        console.log(this.TvID);
      }
    )
    this.tv.getSimilarTv(this.TvID).subscribe(
      (response:any)=>{
        this.similarTv=response.results.slice(7,14);
        console.log(this.similarTv);
      },
      (error)=>{
        console.log(this.TvID);
      }
    )
  }

}
