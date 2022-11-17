import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {

  constructor(private afs:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  senha(email:string){
    this.afs.ForgotPassword(email);
  }
  voltar(){
    this.router.navigate(['login'])
  }


}
