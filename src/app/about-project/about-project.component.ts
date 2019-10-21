import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.css']
})
export class AboutProjectComponent implements OnInit {

  public imagePath = "../assets/img/first-service-icon.png";
  public secondService = "../assets/img/second-service-icon.png";
  public thirdService = "../assets/img/third-service-icon.png";

  
  about = {}
  constructor(private config :  ConfigService ) {}

  ngOnInit() {
    this.about = this.getAbout();
  }

  getAbout (){
    return this.config.getConfig().about;
  }
}