import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',redirectTo:'producto',pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  { path: 'client', component:ClientComponent},
  { path: 'product', component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
