import { Component, OnInit, Input } from '@angular/core';
import { ProductsServiceService } from '../service/products-service.service';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {
 products: any[];

  constructor(private productsService: ProductsServiceService) {
    
   }
 
  ngOnInit() {
    this.products = this.productsService.AllProducts;
    
  }

}

 
