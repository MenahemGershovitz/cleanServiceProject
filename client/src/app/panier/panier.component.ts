import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from '../service/products-service.service';
import { ProductOrder } from '../interfaces/products.interface';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  models: ProductOrder[];
  constructor(private productService: ProductsServiceService) { }


  ngOnInit() {
    let lastProd = JSON.parse(localStorage.getItem('products')) || {};
    this.models = Object.keys(lastProd).map(key => {
      return lastProd[key];
    });
  }

  getProductPrice(name: string, type: string, isFirstPrice: boolean) {  //va aller chercher le prix puisque le prix n'est pas stocker dans le localstorage
    for(let prod of this.productService.AllProducts){
      if (prod.name === name) {
        return isFirstPrice ?
        prod.model.find(model => model.name === type).prix
        : prod.model.find(model => model.name === type).prix2 || '';
      }
    };
  }

  removeItem(model,index){
    let lastProd = JSON.parse(localStorage.getItem('products'));
    Object.keys(lastProd).forEach((key,keyIdx) => {  //object.keys va te renvoyer les du tableau sous form de tableau
      if(lastProd[key].name === model.name && lastProd[key].type === model.type && keyIdx===index){
        delete lastProd[key];
      }
    })
    this.models = Object.keys(lastProd).map(key => {
      return lastProd[key];
    });
    localStorage.setItem('products',JSON.stringify(lastProd));
  }

}
