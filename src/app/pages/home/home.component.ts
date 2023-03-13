import { Product } from './../../models/product.model';
import { CartService } from './../../services/cart.service';
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


  constructor(private cartService:CartService) { }
  
  
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

  onAddtoCart(product:Product):void{
    this.cartService.addToCart({
      product: product.image,
      name:product.tittle,
      price: product.price,
      quantity:1,
      id:product.id
    })
  }

}
