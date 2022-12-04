import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public status: AuthService,public router:Router) { }

  ngOnInit(): void {
  }

  sair(){
    this.status.SignOut()
  }

  pessoal(){
    this.router.navigate(['home/pessoal'])
  }

  casa(){
    this.router.navigate(['home/casa'])
  }

  faculdade(){
    this.router.navigate(['home/faculdade'])
  }

  trabalho(){
    this.router.navigate(['home/trabalho'])
  }

  principal(){
    this.router.navigate(['home/principal'])
  }
}
