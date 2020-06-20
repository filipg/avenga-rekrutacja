import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { PackagesResponse } from '../interfaces/packages';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit, OnDestroy {

  packages: PackagesResponse;
  loading = true;
  subscribe: Subscription;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getPackages();
  }

  private getPackages() {
    this.subscribe = this.dataService.getPackages().subscribe(data => {
      this.packages = data;
      this.loading = false;
    });
  }

  getUrl(icon: string) {
    return `url('../../assets/icons/${icon}') no-repeat`;
  }

  createCustomPackage() {
    console.log('create custom package - user click');
  }

  createOurPackage() {
    console.log('create our package - user click');
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
