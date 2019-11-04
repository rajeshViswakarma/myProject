import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPager(totalItems : number , currentPager : number = 1 , pageSIze: number =10 ){
        let totalPages = Math.ceil (totalItems / pageSIze);

        if (currentPager < 1 ){
          currentPager =1;
        } else if (currentPager > totalPages){
          currentPager = totalPages;
        }

        let startPage: number;
        let endPage : number;

        if (totalPages <= 10){
          startPage = 1;
          endPage  = totalPages;
        }else {
          // if more than 10 pages 
          if (currentPager <=6 ){
            startPage = 1; 
            endPage = 10;
          }else if (currentPager + 4 >= totalPages) {
             startPage = totalPages - 9;
             endPage= totalPages;
          }else {
            startPage = currentPager - 5;
            endPage = currentPager + 5;
          }
        }

        // calculate start and end index items
        let startIndex = (currentPager - 1) * pageSIze;
        let endIndex = Math.min((startIndex + pageSIze -1), (totalItems -1));

        // create array and pages 
        let pages = Array.from(Array((endPage - 1 ) - startPage).keys()).map(i => startPage + 1);
       
        return {
          totalItems : totalPages,
          currentPager : currentPager,
          pageSIze : pageSIze,
          totalPages : totalPages,
          startPage: startPage,
          startIndex : startIndex,
          endIndex : endIndex,
          pages : pages

        }
  }

}
