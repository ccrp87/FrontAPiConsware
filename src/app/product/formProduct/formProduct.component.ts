import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, Market } from '../model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './formProduct.component.html',
  styleUrls: ['./formProduct.component.css']
})
export class FormProductComponent implements OnInit {
  productForm:FormGroup
  isNew:boolean
  markets:Market[]=[]

  constructor(private productService:ProductService,@Inject(MAT_DIALOG_DATA) data:Product, private fb:FormBuilder,matDialog:MatDialog) {
    this.isNew=!data.id
    this.productForm = fb.group({
      id:[data.id],
      nombre:[data.nombre,Validators.required],
      iva:[data.iva,Validators.required],
      stock:[data.stock,Validators.required],
      valor:[data.valor,Validators.required],
      tiendaId:[data.tiendaId,Validators.required],
    })
  }

  ngOnInit(): void {
    this.getMarkets()
  }
  getMarkets(){
    this.productService.getMarkets().subscribe(result=>{
      this.markets = result
    })
  }

  createProduct(){
    this.productService.createProduct(this.productForm.value).subscribe(result=>{
      alert("Registro exitoso")
      location.reload()
    },error=>{
      alert("Se presentó un error al intentar crear el producto")
    })
  }


  updateProduct(){
    this.productService.updateProduct(this.productForm.value).subscribe(result=>{
      alert("Se actualizó el producto exitosamente")
      location.reload()
    },error=>{
      alert("Se presentó un error al intentar actualizar el producto")
    })
  }


}
