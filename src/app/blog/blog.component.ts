import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {


  public blogs = {}

  constructor(private config : ConfigService) { }

  ngOnInit() {
    this.blogs = this.getBlog();
  }

  getBlog (){
    return this.config.getConfig().blogs;
  }

}

