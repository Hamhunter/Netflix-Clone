import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private movieservice:MovieService) { }
  @Input() sliderConfig;
  @Input() movies:Movies;
  @Input() title:string;


  ngOnInit(): void {
    this.getMovies();

  }
 getMovies(){
   this.movieservice.getlatestMovie().subscribe((success)=>{
     console.log(success);
   })
 }

}
