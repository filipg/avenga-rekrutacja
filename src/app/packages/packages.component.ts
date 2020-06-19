import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  header = 'Stwórz swój własny pakiet';
  packages = ['telewizja', 'internet', 'telefon'];
  packageItems = [
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
  ];

  constructor() { }

  ngOnInit() {
  }

  getUrl(icon: string) {
    console.log(icon);
    return `url('../../assets/icons/${icon}') no-repeat`;
  }
}
