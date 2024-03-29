import { HttpClient } from '@angular/common/http';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cart.model';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: Cart = {
    items:[{
      product:'https://via.placeholder.com/150',
    name:'sneakers',
    price:150,
    quantity:1,
    id:1,
    },{
      product:'https://via.placeholder.com/150',
    name:'sneakers',
    price:150,
    quantity:1,
    id:1,
    }]
  };

  dataSource: Array<CartItem> = [];
  displayedColumns : Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
   'action'
  ]

  getTotal(items: Array<CartItem>):number{
    return this.CartService.getTotal(items)
  }

  onClearCart():void{
    this.CartService.clearCart()
  }

 
  onRemoveFromCart(item:CartItem):void{
    this.CartService.onRemoveFromCart(item);


  }

  onAddQuantity(item: CartItem):void{
    this.CartService.addToCart(item)
  }

  onRemoveQuantity(item:CartItem):void{
    this.CartService.removeQuantity(item)
  }

  onCheckout():void{
   alert('It is not possible to checkout, because this site is for learning purposes')
  }

  constructor(private CartService:CartService, private httpClient:HttpClient) { }

  ngOnInit() {
    
    this.CartService.cart.subscribe((_cart:Cart)=>{
      this.cart = _cart
      this.dataSource = this.cart.items;
    })
  }

}
