import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Market, Product } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(environment.API+"Productos")
  }

  deleteProduct(id:number){
    return this.http.delete(environment.API+"Productos/"+id)
  }

  createProduct(product:Product){
    return this.http.post(environment.API+"Productos",product)
  }

  updateProduct(product:Product){
    return this.http.put(environment.API+"Productos/"+product.id,product)
  }

  getProduct(id:number){
    return this.http.get<Product>(environment.API+"Productos/"+id)
  }

  searchProduct(key:string){
    return this.http.get<Product[]>(environment.API+"Productos/search/"+key)
  }

  getMarkets(){
    return this.http.get<Market[]>(environment.API+"tiendas/")
  }
}
