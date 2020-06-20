import { Injectable } from '@angular/core';
import { PackagesResponse } from './interfaces/packages';
import { of, Observable } from 'rxjs';
import { Movie } from './interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  packages: PackagesResponse = {
    header: 'Stwórz swój własny pakiet',
    packages: ['telewizja', 'internet', 'telefon'],
    packageItems: [
      {
        icon: 'tvIcon.png',
        description: 'ulubione kanaly'
      },
      {
        icon: 'networkIcon.png',
        description: 'prędkość internetu'
      },
      {
        icon: 'handsetIcon.png',
        description: 'ilość minut na rozmowy'
      },
      {
        icon: 'mobileNetIcon.png',
        description: 'internet mobilny'
      }
    ]
  };


  movies: Movie[] = [
    {
      title: 'Kapitan Amerika:',
      subtitle: 'Zimowy żołnierz',
      category: ['nowość', 'akcja'],
      price: '14,00 zł',
      numberWatched: 125,
      url: 'capitan.png'
    },
    {
      title: 'Władca Pierścieni:',
      subtitle: 'Powrót króla',
      category: ['klasyka', 'przygodowy'],
      price: '10,00 zł',
      numberWatched: 728,
      url: 'specialOfferLayerTwo.png'
    },
    {
      title: 'Hobbit:',
      subtitle: 'Bitwa Pięciu Armii',
      category: ['nowość', 'akcja', 'przygoda'],
      price: '24,00 zł',
      numberWatched: 250,
      url: 'nowInTvBig.png'
    },
  ];

  getPackages(): Observable<PackagesResponse> {
    // fake http request - of returns observable
    return of(this.packages);
  }

  getMovies(): Observable<Movie[]> {
    // fake http request - of returns observable
    return of(this.movies);
  }
}
