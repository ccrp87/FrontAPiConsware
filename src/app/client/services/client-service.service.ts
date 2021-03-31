import { Injectable } from '@angular/core';
import { Client } from "../model";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get<Client[]>(environment.API+'Clientes')
  }

  getClient(id:number){
    return this.http.get<Client>(environment.API+'Clientes/'+id)
  }

  updateClient(client:Client){
    return this.http.put(environment.API+'Clientes/'+client.id,client)
  }

  createClient(client:Client){
    return this.http.post(environment.API+'Clientes/',client)
  }

  deleteClient(id:number){
    return this.http.delete(environment.API+"Clientes/"+id)
  }
  searchClient(key:string){
    return this.http.get<Client[]>(environment.API+"Clientes/search"+key)
  }
}
