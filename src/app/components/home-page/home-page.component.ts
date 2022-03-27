import { Component, OnInit } from '@angular/core';
import {generate} from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  galleryData: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.galleryData = this.createGalleryUrlList();
  }

  createGalleryUrlList(): string[]{
    let urlList: string[] = [];
    for (let i = 1; i < 18; i++) {
      urlList.push(`/assets/images/ods/${i}.png`)
    }
    return urlList;
  }

}
