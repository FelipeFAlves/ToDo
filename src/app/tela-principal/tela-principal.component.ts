import { AuthService } from './../shared/services/auth.service';
import { FirestoreService } from './../shared/services/firestore.service';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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
  async ngOnInit(): Promise<void> {
    this.Tabela();
    this.Opcoes();
  }

  opcao:any =  [];
  displayedColumns: string[] = ['Estado', 'Titulo', 'Descrição','Categoria','Excluir'];
  @ViewChild(MatTable) table!: MatTable<any>;
  

  Enviar(tarefa:string,tipo:any,opcao: any){
    //Pegar o id do usuário
    
    var opcaoTraduzida = JSON.stringify(opcao['nome'])
    
    var usuario = JSON.parse(localStorage.getItem('user')!)['uid'];
    this.afs.addTarefa(tarefa,tipo,usuario,opcaoTraduzida)
    window.confirm('Cadastrado com sucesso');
  }

  Tabela(){
    //Pegar o id do usuário
    var usuario = JSON.parse(localStorage.getItem('user')!)['uid'];
    this.afs.trabalho(usuario).subscribe((trabalhos) =>{
      trabalhos.forEach((trabalho:any) =>{
        this.dataSource.data.push(trabalho.data())
        console.log(this.dataSource)
      })
    })
    this.afs.pessoal(usuario).subscribe((tarefas) =>{
      tarefas.forEach((tarefa:any) =>{
        this.dataSource.data.push(tarefa.data())
        console.log(this.dataSource)
      })
    })
    this.afs.faculdade(usuario).subscribe((tarefas) =>{
      tarefas.forEach((tarefa:any) =>{
        this.dataSource.data.push(tarefa.data())
        console.log(this.dataSource)
      })
    })
    this.afs.casa(usuario).subscribe((tarefas) =>{
      tarefas.forEach((tarefa:any) =>{
        this.dataSource.data.push(tarefa.data())
        console.log(this.dataSource)
      })
      this.table.renderRows();
    })
  }

  Excluir(id:string){
    this.afs.excluir(id);
  }

  Opcoes(){
    var usuario = JSON.parse(localStorage.getItem('user')!)['uid'];
    this.afs.tarefas(usuario).subscribe((tarefas) =>{
      tarefas.forEach((tarefa:any) =>[
        this.opcao.push(tarefa.data())
      ])
    })
  }



}
