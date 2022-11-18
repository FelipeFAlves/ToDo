import { AuthService } from './../shared/services/auth.service';
import { FirestoreService } from './../shared/services/firestore.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {
  data = new Date().toLocaleDateString()
  
  constructor(private afs:FirestoreService,private AuthService:AuthService) { }

  dataSource= new MatTableDataSource<any>();
  ngOnInit(): void {
    this.Tabela()
  }

  displayedColumns: string[] = ['Estado', 'Titulo', 'Descrição'];
  @ViewChild(MatTable) table!: MatTable<any>;
  

  Enviar(tarefa:string,tipo:any){
    this.afs.addTarefa(tarefa,tipo,this.AuthService.userData.uid)
  }

  Tabela(){
    this.afs.tarefas(this.AuthService.userData.uid).subscribe((tarefas) =>{
      tarefas.forEach((tarefa:any) =>{
        this.dataSource.data.push(tarefa.data())
        console.log(this.dataSource)
      })
      this.table.renderRows();
    })
  }



}
