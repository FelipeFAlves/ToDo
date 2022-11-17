import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-verificar-email',
  templateUrl: './verificar-email.component.html',
  styleUrls: ['./verificar-email.component.css']
})
export class VerificarEmailComponent implements OnInit {

  constructor(public authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigate(['login']);
  }

}
