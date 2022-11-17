import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {

  constructor(private afs:AuthService) { }

  ngOnInit(): void {
  }

  sair(){
    this.afs.SignOut()
  }

}
