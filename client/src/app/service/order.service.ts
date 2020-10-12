import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductOrder } from '../interfaces/products.interface';
import { Orders } from '../interfaces/orders.interface';
import { PressingData } from '../interfaces/pressing.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  orderService(userId: string, address: string, products: ProductOrder[]) {
    return this.http.post("http://localhost:3000/api/orders", { userId:userId, address:address, products:products});
  }

  getOrders(){
    return this.http.get<Orders[]>("http://localhost:3000/api/orders");
  }

  getAllPressing(){
    return this.http.get<PressingData[]>("http://localhost:3000/api/pressing/allPressings");
  }
} 