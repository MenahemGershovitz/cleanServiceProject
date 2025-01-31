import { Component, OnInit } from '@angular/core';
import { Orders } from '../interfaces/orders.interface';
import { OrderService } from '../service/order.service';
import { ProductOrder } from '../interfaces/products.interface';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css']
})
export class EspaceAdminComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  orders: Orders[];
  products: ProductOrder[];

  ngOnInit() {
    this.orderService.getOrders().subscribe( (orders) => {
      this.orders = orders;
      console.log(orders);
    });
  }

  showProduct(products){
    this.products = products;
  }

}
