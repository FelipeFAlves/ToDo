import { Router } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private afs:AuthService,private router:Router) { }

  hide = true;
  
  ngOnInit(): void {
  }

  cadastrar(email:string,senha:string){
    this.afs.SignUp(email,senha);
  }
  
  voltar(){
    this.router.navigate(['login']);
  }

}
