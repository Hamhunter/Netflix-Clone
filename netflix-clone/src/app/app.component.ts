import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from './models/movies';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit,OnDestroy {
  ngOnInit(): void {
this.subs.push(this.movie.getTrending().subscribe((success)=>{this.trending = success;}))
this.subs.push(this.movie.getPopupalMovies().subscribe((success)=>{this.popular = success;}))
this.subs.push(this.movie.getNowPlaying().subscribe((success)=>{this.now_playing = success;}))
this.subs.push(this.movie.getOriginals().subscribe((success)=>{this.originals = success;}))
this.subs.push(this.movie.getlatestMovie().subscribe((success)=>{this.latest = success;}))
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy():void{
    this.subs.map(s=>s.unsubscribe())
    
  }
  title = 'netflix-clone';
  sticky = false;
  subs:Subscription[]=[];
  trending:Movies;
  top_rated:Movies;
  originals:Movies;
  popular:Movies;
  latest:Movies;
  now_playing:Movies;
  slider_config={
    slidesToShow:9,
    slidesToScroll:2,
    arrows:true,
    autoplay:false
  }
  @ViewChild('stickheader') header:ElementRef

  constructor(private movie:MovieService){

  }
 
}