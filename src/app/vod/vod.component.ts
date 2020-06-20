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

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  private getMovies() {
    this.subscribe = this.dataService.getMovies().subscribe(data => {
      this.movie = data[0];
      this.loading = false;
    });
  }

  getUrl(icon: string) {
    return `url('../../assets/icons/${icon}') no-repeat`;
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
