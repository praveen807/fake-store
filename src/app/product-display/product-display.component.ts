import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  products? : any[];
  selectedProduct? : Product;
  constructor(private productService : ProductService){
    this.getDataFromApi();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  getDataFromApi() {
    this.productService.getProdcuts().subscribe({
      next: (data) => { 
        this.products = data;
      }
    })
  }

  delete(productdelete : Product){
   this.products =  this.products?.filter(product => product.id !== productdelete.id);
  }

  edit(product : Product){
    this.selectedProduct = product;
  }

}
