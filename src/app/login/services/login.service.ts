import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login,Usuario } from '../model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router) { }

  login(login:Login){
    return this.http.post<Usuario>(environment.API+'usuarios/login',login)
  }

  isLogin(){
    if (localStorage.getItem('isLogin')=='False' || localStorage.getItem('isLogin')=='false' || localStorage.getItem('isLogin')=='' || localStorage.getItem('isLogin')==undefined) {
      return false
    }
    return true
  }

  closeSession(){
    localStorage.removeItem('isLogin')
    this.router.navigate(['login'])
  }
}
