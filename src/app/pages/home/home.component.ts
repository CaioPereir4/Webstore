import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT: {[id:number]:number} = {
  1:400,
  3:335,
  4:350
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  cols=3;
  rowHeight =ROWS_HEIGHT[this.cols]
  constructor() { }
  category:string | undefined;


  ngOnInit(): void {
  }

  onColumsCountChange(colsNumber:number):void{
    this.cols = colsNumber
    this.rowHeight =ROWS_HEIGHT[this.cols]
  }


  onShowCategory(newCategory:string):void{
    this.category = newCategory
  }
}