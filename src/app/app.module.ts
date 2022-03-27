import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomePageComponent} from './components/home-page/home-page.component';
import {AboutPageComponent} from './components/about-page/about-page.component';

// Dev Extreme imports
import {
  DxButtonModule,
  DxGalleryModule
} from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DxButtonModule,
        DxGalleryModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
