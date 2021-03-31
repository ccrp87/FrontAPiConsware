import { Component, OnInit } from '@angular/core';
import { FormComponent } from './form/form.component';
import { Client } from './model';
import { ClientServiceService } from './services/client-service.service';
import { MatDialog } from "@angular/material/dialog";
import { LoginService } from '../login/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cliente',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public clients:Client[]=[]
  constructor(private clientService:ClientServiceService, private dialog:MatDialog,private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    if(!this.loginService.isLogin()){
      this.router.navigate(['login'])
    }
       this.listClients()
  }

  searchClient(key){
    if (key!="") {
      this.clientService.searchClient(key).subscribe(result=>{
        this.clients = result
      })
    }else{
      this.listClients()
    }
  }

  listClients(){
    this.clientService.getClients().subscribe((results)=>{
      this.clients = results
    })
  }
  openFormNewClient(){
    let client:Client = {apellido:'',correo:'',direccion:'',nombre:'',telefono:'',id:0}
    let dialogRef = this.dialog.open(FormComponent, {
      data:client,
      width: '600px',
    });
  }
  openFormEditClient(id:number){
    this.clientService.getClient(id).subscribe((result)=>{
      console.log(result);

      let dialogRef = this.dialog.open(FormComponent, {
        data:result,
        width: '600px',
      });
    })

}
deleteClient(id:number){
  if (confirm("Desea eliminar el cliente?")) {
    this.clientService.deleteClient(id).subscribe(result=>{
      this.listClients()
    }, error=>{
      alert('Se ha producido un error al intentar eliminar el cliente')
    })
  }
}

}
