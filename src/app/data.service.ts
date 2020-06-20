import { Injectable } from '@angular/core';
import { PackagesResponse } from './interfaces/packages';
import { of, Observable, interval } from 'rxjs';
import { Movie } from './interfaces/movie';
import { InTv } from './interfaces/tv';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private packages: PackagesResponse = {
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


  private movies: Movie[] = [
    {
      title: 'Kapitan Amerika:',
      subtitle: 'Zimowy żołnierz',
      category: ['nowość', 'akcja'],
      price: '14,00 zł',
      numberWatched: 125,
      url: 'capitan.png'
    },
    {
      title: 'Igrzyska śmierci:',
      subtitle: 'W pierścieniu ognia',
      category: ['przygodowy'],
      price: '10,00 zł',
      numberWatched: 728,
      url: 'specialOfferLayerTwo.png'
    },
    {
      title: 'Anatomia magii',
      category: ['nowość', 'akcja', 'przygoda'],
      price: '24,00 zł',
      numberWatched: 250,
      url: 'nowInTvBig.png'
    },
  ];

  source = interval(5000);

  private tv: InTv[] = [
    {
      title: 'Anatomia magii',
      chanel: 'discovery chanel',
      url: 'nowInTvBig.png'
    },
    {
      title: 'Kapitan Amerika',
      chanel: 'Polsat film',
      url: 'capitan.png'
    },
    {
      title: 'Igrzyska śmierci',
      chanel: 'HBO',
      url: 'specialOfferLayerTwo.png'
    }
  ];

  getPackages(): Observable<PackagesResponse> {
    // fake http request - of returns observable
    return of(this.packages);
  }

  getMovies(): Observable<Movie[]> {
    // fake http request - of returns observable
    return of(this.movies);
  }

  getWhatInTv(): Observable<InTv[]> {
    // fake http request - of returns observable
    return of(this.tv);
  }

  getNumberOfWatching() {
    // fake http request - of returns observable ---> return number of people currently watching tv
     return this.source.pipe(map(el => Math.floor(Math.random() * (1000 - 50)) + 50));
  }
}
