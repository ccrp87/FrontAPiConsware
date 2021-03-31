import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup

  constructor(private serviceLogin:LoginService,fb:FormBuilder, private router:Router) {
    this.formLogin=fb.group(
      {
        correo:['',Validators.required],
        clave:['',Validators.required]
      }
      )
  }
  ngOnInit(): void {
    if(!this.serviceLogin.isLogin()){
      this.router.navigate(['login'])
    }
  }

  login(){
    this.serviceLogin.login(this.formLogin.value).subscribe(resp=>{
      this.router.navigate(['product'])
      localStorage.setItem('isLogin','true')
    },(error:Response)=>{
      if(error.status==404){
       alert("Usuario o contraseña invalida")
      }else{
        alert('Se presentó un error al intentar autenticar')
      }
    })
  }


}
