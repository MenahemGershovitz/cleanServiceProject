import { Component, OnInit, Input } from '@angular/core';
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
   
    // this.model = this.productsService.getProductById(+id).model[this.name].name;
    // this.prix = this.productsService.getProductById(+id).model[this.name].prix;
    // this.prix2 = this.productsService.getProductById(+id).model[this.name].prix2;
  }

}
