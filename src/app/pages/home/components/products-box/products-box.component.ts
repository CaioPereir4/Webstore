import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-box',
  templateUrl: './products-box.component.html',
})
export class ProductsBoxComponent implements OnInit {

  @Input()  fullWidthMode = false;

  @Input() product: Product| undefined;



  @Output() addToCart = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onAddToCart():void{
    this.addToCart.emit(this.product)
  }
}
