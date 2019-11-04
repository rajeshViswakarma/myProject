import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
//import {PagerComponent } from '../pager/pager.component'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {


  public blogs = {}
  allItem : any[];
  pages : any[];

  pager : any = {}

  constructor(private config : ConfigService){}
  // constructor(private config : ConfigService, private  pagerService : PagerComponent) { }

  ngOnInit() {
    this.blogs = this.getBlog();

    // this.allItem = this.blogs.post;
    // this.setPage(1);  
  }

  getBlog (){
    return this.config.getConfig().blogs;
  }

//  setPage (pageNumber : number){

//  }

}

