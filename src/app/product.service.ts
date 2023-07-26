import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serviceUrl = 'https://fakestoreapi.com';
  constructor( private http : HttpClient) { }

  getProdcuts(limit : number  = 5): Observable<Product[]> {
    const url = `${this.serviceUrl}/products?limit=${limit}`;
    return this.http.get<Product[]>(url);
  }

  saveProduct(product : Product): Observable<Product>{
    const url = `${this.serviceUrl}/products`;
    return this.http.post<Product>(url,product);
  }


}
