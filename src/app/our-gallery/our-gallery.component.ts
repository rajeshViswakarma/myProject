import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-our-gallery',
  templateUrl: './our-gallery.component.html',
  styleUrls: ['./our-gallery.component.css']
})
export class OurGalleryComponent implements OnInit {
  public gallery = {}
  constructor( private config : ConfigService) { }

  ngOnInit() {
     this.gallery = this.getGalleryItem();
  }
  getGalleryItem (){
    return this.config.getConfig().gallery;
  }
}


