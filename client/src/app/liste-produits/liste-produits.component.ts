import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '../service/products-service.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  
products: any[];
name : string;
models: any[];


  constructor(private productsService: ProductsServiceService,
     private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.products = this.productsService.AllProducts;
    this.name = this.productsService.getProductById(+id).name;
    this.models = this.productsService.getProductById(+id).model;
  }

  addProduct(model){
    let lastProd;
    try{
      lastProd = JSON.parse(localStorage.getItem('products'));
    }
    catch{
      lastProd = {};
    }
    const product = {
      type:model.name,
      name:this.name
    }
    let id = this.guidGenerator();
    lastProd[id]=product;
    localStorage.setItem('products',JSON.stringify(lastProd));
  }

  guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

}
