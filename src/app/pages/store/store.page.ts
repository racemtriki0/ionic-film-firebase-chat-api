import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  products: Observable<any[]>
  constructor(private productService: ProductService) {}
 
  ngOnInit() {
   
    this.products = this.productService.getProducts();
  }





}
