import { FirestoreService } from './../shared/services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {
  data = new Date().toLocaleDateString()
  constructor(private afs:FirestoreService) { }

  ngOnInit(): void {
  }

  
  Enviar(tarefa:string,tipo:any){
    this.afs.addTarefa(tarefa,tipo)
  }


}
