import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { InTv } from '../interfaces/tv';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-now-in-tv',
  templateUrl: './now-in-tv.component.html',
  styleUrls: ['./now-in-tv.component.scss']
})
export class NowInTvComponent implements OnInit, OnDestroy {

  movie: InTv;
  movies: InTv[] = [];
  loading = true;
  subscribtionMovies: Subscription;
  subscriptionNumberOfWatching: Subscription;
  nowWatching = Math.floor(Math.random() * (1000 - 50)) + 50;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getInTv();
    this.getNowWatching();
  }

  getInTv() {
    this.subscribtionMovies = this.dataService.getWhatInTv().subscribe(data => {
      console.log('aaa');
      this.movie = data[0];
      this.movies = data;
      this.loading = false;
    });
  }

  getNowWatching() {
    this.subscriptionNumberOfWatching = this.dataService.getNumberOfWatching().subscribe(data => this.nowWatching = data);
  }

  getUrl(icon: string) {
    return `url('../../assets/icons/${icon}') no-repeat`;
  }

  changeContent(option) {

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
    this.subscribtionMovies.unsubscribe();
    this.subscriptionNumberOfWatching.unsubscribe();
  }
}
