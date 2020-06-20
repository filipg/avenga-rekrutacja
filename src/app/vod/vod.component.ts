import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vod',
  templateUrl: './vod.component.html',
  styleUrls: ['./vod.component.scss']
})
export class VodComponent implements OnInit, OnDestroy {

  movie: Movie;
  loading = true;
  subscribe: Subscription;
  movies: Movie[] = [];
  sliderInterval: ReturnType<typeof setInterval>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  private getMovies() {
    this.subscribe = this.dataService.getMovies().subscribe(data => {
      this.movie = data[0];
      this.movies = data;
      this.startInterval();
      this.loading = false;
    });
  }

  private startInterval() {
    this.sliderInterval = setInterval(() => {
      this.changeContent('up');
    }, 4500);
  }

  getUrl(icon: string) {
    return `url('../../assets/icons/${icon}') no-repeat`;
  }

  changeContent(option) {
    clearInterval(this.sliderInterval);
    this.startInterval();

    let index = this.movies.findIndex(el => el === this.movie);

    (option === 'up') ? index++ : index--;

    if (index >= this.movies.length) {
      this.movie = this.movies[0];
    } else if (index === -1) {
      this.movie = this.movies[this.movies.length - 1];
    } else {
      this.movie = this.movies[index];
    }
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
