import { Component, OnInit, Input } from '@angular/core';
import { ProductsServiceService } from '../service/products-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
@Input() productName: string;
@Input() Id: number;

  constructor(private productsService: ProductsServiceService) {}

  ngOnInit() {
  }

}
