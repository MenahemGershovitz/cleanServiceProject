import { Component, OnInit } from '@angular/core';
import {OrderService} from '../service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  address: string;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  onOrder(){
    let lastProd = JSON.parse(localStorage.getItem('products'));
    const products = Object.keys(lastProd).map(key => {
      return lastProd[key];
    });
    this.orderService.orderService('5de02cfa2d0e912d89e3bcd5',this.address,products)
    .subscribe((res)=> {
      localStorage.removeItem('products');
      console.log(res)
    })
  }

}
