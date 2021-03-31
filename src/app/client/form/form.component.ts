import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../model';
import { ClientServiceService } from '../services/client-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public client:Client
  clientForm:FormGroup
  isNew:boolean

  constructor(private clientService:ClientServiceService,  @Inject(MAT_DIALOG_DATA) data:Client, private fb:FormBuilder,private dialog:MatDialog
  ) {
    this.isNew=!data.id
    this.clientForm = fb.group({
      id:[data.id],
      nombre:[data.nombre,Validators.required],
      apellido:[data.apellido,Validators.required],
      direccion:[data.direccion,Validators.required],
      telefono:[data.telefono,Validators.required],
      correo:[data.correo,Validators.required],
    })
  }

  updateClient(){
    this.clientService.updateClient(this.clientForm.value).subscribe(result=>{
      alert('Registro actualizado')
      this.dialog.closeAll()
    },error=>{
      alert('Se ha producido un error al intentar actualizar el cliente')
    })
  }

  createClient(){
    this.clientService.createClient(this.clientForm.value).subscribe(result=>{
      alert('Cliente registrado')
      location.reload()
    },error=>{
      alert('Se ha producido un error al intentar registar el cliente')
    })
  }

  ngOnInit(): void {
  }



}
