import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from './models/movies';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
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
    autoplay:false,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
  }

  constructor(private movie:MovieService){

  }
  @ViewChild('#stickyHeader') header:ElementRef

  headerBGurl:string;
  ngOnInit(): void {
this.subs.push(this.movie.getTrending().subscribe((success)=>{
  this.trending = success;
  this.headerBGurl =  'https://image.tmdb.org/t/p/original' + this.trending.results[2].backdrop_path;
console.log(success,"trending");

}))
this.subs.push(this.movie.getPopularMovies().subscribe((success)=>{this.popular = success;
console.log(success,"popular");
}))
this.subs.push(this.movie.getNowPlaying().subscribe((success)=>{this.now_playing = success;
  console.log(success,"nowplaying");

}))
this.subs.push(this.movie.getToprated().subscribe((success)=>{this.top_rated = success;
  console.log(success,"toprated");

}))
this.subs.push(this.movie.getOriginals().subscribe((success)=>{this.originals = success;
  console.log(success,"Originals");

}))
this.subs.push(this.movie.getlatestMovie().subscribe((success)=>{this.latest = success;
  console.log(success,"latest");
}))
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