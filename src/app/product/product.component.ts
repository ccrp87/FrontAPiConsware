import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';
import { FormProductComponent } from './formProduct/formProduct.component';
import { Product } from './model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[] = []
  constructor(private productService:ProductService, private dialog:MatDialog, private loginService:LoginService,private router:Router) { }


  listProducts(){
    this.productService.getProducts().subscribe(results =>{
      this.products = results
    })
  }
  searchProduct(key:string){
    if (key!="") {
      this.productService.searchProduct(key).subscribe(result =>{
        this.products = result
      })
    }else{
      this.listProducts()
    }

  }
  ngOnInit(): void {
    if(!this.loginService.isLogin()){
      this.router.navigate(['login'])
    }
    this.listProducts()
  }

  deleteProduct(id:number){
    if (confirm("Desea eliminar el registro")) {
        this.productService.deleteProduct(id).subscribe(result=>{
          this.listProducts()
        },error=>{
          alert('Se presentó un error al intentar eliminar el producto')
        })
      }
    }


    openFormNewProduct(){

      let product:Product = {iva:null,stock:null,valor:null,nombre:'',id:0,tiendaId:0}
      let dialogRef = this.dialog.open(FormProductComponent, {
        data:product,
        width: '600px',
      });
    }
    openFormEditProduct(id:number){
      this.productService.getProduct(id).subscribe((result)=>{
        let dialogRef = this.dialog.open(FormProductComponent, {
          data:result,
          width: '600px',
        });
      })

  }


}
