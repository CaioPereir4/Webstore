import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-box',
  templateUrl: './products-box.component.html',
})
export class ProductsBoxComponent implements OnInit {

  @Input()  fullWidthMode = false;

  product: Product | undefined = {
    id:1,
    tittle:'sneakers',
    price:150,
    category:'shoes',
    description:'Description',
    image:'https://via.placeholder.com/150'
  };

  @Output() addToCart = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onAddToCart():void{
    this.addToCart.emit(this.product)
  }
}
