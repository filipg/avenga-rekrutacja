import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { MainNavComponent } from './features-components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SpecialOfferComponent } from './features-components/special-offer/special-offer.component';
import { VodComponent } from './features-components/vod/vod.component';
import { PackagesComponent } from './features-components/packages/packages.component';
import { NowInTvComponent } from './features-components/now-in-tv/now-in-tv.component';
import { MoreInfoComponent } from './features-components/more-info/more-info.component';
import { FooterComponent } from './features-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SpecialOfferComponent,
    VodComponent,
    PackagesComponent,
    NowInTvComponent,
    MoreInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
