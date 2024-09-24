import { Component, OnInit } from '@angular/core';  

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {

  constructor() { }

  employees = [
    {
      "id": "1",
      "firstName": "Tom",
      "lastName": "Cruise"
    },
    {
      "id": "2",
      "firstName": "Maria",
      "lastName": "Sharapova"
    },
    {
      "id": "3",
      "firstName": "Sonia",
      "lastName": "morty"
    }, 
    {
      "id": "4",
      "firstName": "Rajesh",
      "lastName": "Gaur"
    }
  ]

  ngOnInit() {
  }

}
