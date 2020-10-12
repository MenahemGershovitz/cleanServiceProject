import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '../service/products-service.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  
name : string;
models: any[];


  constructor(private productsService: ProductsServiceService,
     private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.productsService.getProductById(+id).name;
    this.models = this.productsService.getProductById(+id).model;
  }

  addProduct(model){
    let lastProd = JSON.parse(localStorage.getItem('products')) || {};  //lis les produits de la clef products dans le localStorage et si undefined alor tu m'affiche un objet vide 
    const product = {
      type:model.name,
      name:this.name
    }
    let id = this.guidGenerator(); //genere un id compliquer et long pour ne pas avoir 2 produits de meme id
    lastProd[id]=product;
    localStorage.setItem('products',JSON.stringify(lastProd)); //stock les valeurs de lastProd dans la clef products
  }

  guidGenerator() { //fonction qui retourne un string compliquer pour l'id
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

}
