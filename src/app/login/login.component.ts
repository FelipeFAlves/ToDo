import {Router } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public AuthService:AuthService,public router: Router) { }

  ngOnInit(): void {
  }
  hide = true;

  cadastrar(){
    this.router.navigate(['cadastrar']);
  }

  entrar(email:string,password:string){
    this.AuthService.SignIn(email,password);
  }
  entrarG(email:string,password:string){
    this.AuthService.GoogleAuth();
  }

  esquecisenha(){
    this.router.navigate(['senha'])
  }

}
