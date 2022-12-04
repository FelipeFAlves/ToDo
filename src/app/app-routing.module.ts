import { NavbarComponent } from './navbar/navbar.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { VerificarEmailComponent } from './verificar-email/verificar-email.component';
import { SignupComponent } from './signup/signup.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path:'login',component:LoginComponent
},
{
  path:'cadastrar',component:SignupComponent
},
{
  path:'verificarEmail',component:VerificarEmailComponent
},
{
  path:'senha',component:EsqueciSenhaComponent
},
{
  path:'home',component:NavbarComponent,
    children:[
      {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full'
      },
      {
        path:'principal',component:TelaPrincipalComponent
      }
    ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
