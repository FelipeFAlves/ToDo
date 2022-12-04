import { AuthService } from './../shared/services/auth.service';
import { FirestoreService } from './../shared/services/firestore.service';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {
  data = new Date().toLocaleDateString()

  
  
  constructor(private afs:FirestoreService,private AuthService:AuthService) { }

  dataSource= new MatTableDataSource<any>();
  
  ngOnInit():void{
    this.Tabela();
    this.Opcoes();  
  }

  opcao:any =  [];
  displayedColumns: string[] = ['Estado', 'Titulo', 'Descrição','Categoria','Data','Excluir'];
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;
  

  Enviar(tarefa:string,tipo:any,opcao: any,data:string){
    let opcaoTraduzida = JSON.stringify(opcao['nome'])
    let novoTexto = opcaoTraduzida.replace(/"/g,'')
    //Pegar o id do usuário
    var usuario = JSON.parse(localStorage.getItem('user')!)['uid'];
    this.afs.addTarefa(tarefa,tipo,usuario,novoTexto,data)
    this.dataSource.data = []
    this.Tabela();
  }

  Tabela(){
    //Pegar o id do usuário
    var usuario = JSON.parse(localStorage.getItem('user')!)['uid'];
    this.afs.trabalho(usuario).subscribe((trabalhos) =>{
      trabalhos.forEach((trabalho:any) =>{
        if(trabalho.data()['data'] == this.data){
          this.dataSource.data.push(trabalho.data())
        }
      });
    })

    this.afs.pessoal(usuario).subscribe((tarefas) =>{
      tarefas.forEach((tarefa:any) =>{
        if(tarefa.data()['data'] ==  this.data){
          this.dataSource.data.push(tarefa.data())
        }
      });
    })

    this.afs.faculdade(usuario).subscribe((tarefas) =>{
      tarefas.forEach((tarefa:any) =>{
        if(tarefa.data()['data'] ==  this.data){
          this.dataSource.data.push(tarefa.data())
        }
      });
    })

    this.afs.casa(usuario).subscribe((tarefas) =>{
      tarefas.forEach((tarefa:any) =>{
        if(tarefa.data()['data'] ==  this.data){
          this.dataSource.data.push(tarefa.data())
        }
      });
      
      var aux: any[] = []
      this.dataSource.data.forEach((titulo =>{
        aux.push(titulo['nome'])
      }))

      if(this.dataSource.data.length != 0){
        if(Notification.permission === 'granted'){
          showNotification(aux);
        } else if(Notification.permission !=='denied'){
          Notification.requestPermission().then(permission =>{
            if(permission === 'granted'){
              showNotification(1);
            }
          })
        }
      }

      this.table.renderRows();
      this.sortData({active:'data', direction:'desc'})
    })
  }

  Excluir(categoria:string,id:string){
    this.afs.excluir(categoria,id);
    this.dataSource.data = []
    this.Tabela();
  }

  Opcoes(){
    this.afs.tarefas().subscribe((tarefas) =>{
      tarefas.forEach((tarefa:any) =>[
        this.opcao.push(tarefa.data())
      ])
    })
  }

  sortData(sort: Sort) {
    const data = this.dataSource.data;
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'data':
          return compare(a.data, b.data, isAsc);
        default:
          return 0;
      }
    });
  }


}

function compare(a: string, b:string, isAsc: boolean) {
  var aa = a.split('/').reverse().join();
  var bb = b.split('/').reverse().join();
  return (aa < bb ? -1 : 1) * (isAsc ? 1 : -1);
}

function showNotification(aaa:any){
  const notification = new Notification('Você tem tarefas para hoje!',{
    body: `${aaa.length} Tarefas Pendentes`
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      // The tab has become visible so clear the now-stale Notification.
      notification.close();
    }
  });
}
