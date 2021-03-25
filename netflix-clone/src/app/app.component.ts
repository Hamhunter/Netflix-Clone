import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from './models/movies';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit,OnDestroy {
  headerBGurl:string;
  ngOnInit(): void {
this.subs.push(this.movie.getTrending().subscribe((success)=>{
  this.trending = success;
  // console.log(this.trending,"trending");
  this.headerBGurl =  'https://image.tmdb.org/t/p/original' + this.trending.results[0].backdrop_path;
}))
this.subs.push(this.movie.getPopularMovies().subscribe((success)=>{this.popular = success;}))
this.subs.push(this.movie.getNowPlaying().subscribe((success)=>{this.now_playing = success;}))
this.subs.push(this.movie.getOriginals().subscribe((success)=>{this.originals = success;}))
this.subs.push(this.movie.getlatestMovie().subscribe((success)=>{this.latest = success;}))
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
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
  @ViewChild('#stickyHeader') header:ElementRef

  constructor(private movie:MovieService){

  }
  ngOnDestroy():void{
    this.subs.map(s=>s.unsubscribe())
    
  }
  @HostListener('window:scroll',['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll) {
      this.sticky = true;
    }
    else{
      this.sticky = false
    }
    
  }
  
 
}