import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit{

constructor(private productService : ProductService){}

  ngOnInit(): void {
    
  }

    product: Product ={
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      rating: {
        rate: 0,
        count: 0
      }
    };

    saveProduct(){
      this.productService.saveProduct(this.product).subscribe({
        next: (data) => { 
          console.log(data);
        }
      })
    }
    

}
