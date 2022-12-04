import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FirestoreService } from '../shared/services/firestore.service';

@Component({
  selector: 'app-tela-casa',
  templateUrl: './tela-casa.component.html',
  styleUrls: ['./tela-casa.component.css'],
})
export class TelaCasaComponent implements OnInit {
  data = new Date().toLocaleDateString();

  constructor(
    private afs: FirestoreService
  ) {}

  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
    this.Tabela();
    this.Opcoes();
  }

  opcao: any = [];
  displayedColumns: string[] = [
    'Estado',
    'Titulo',
    'Descrição',
    'Categoria',
    'Data',
    'Excluir',
  ];
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;

  Enviar(tarefa: string, tipo: any, opcao: any, data: string) {
    let opcaoTraduzida = JSON.stringify(opcao['nome']);
    let novoTexto = opcaoTraduzida.replace(/"/g, '');
    //Pegar o id do usuário
    var usuario = JSON.parse(localStorage.getItem('user')!)['uid'];
    this.afs.addTarefa(tarefa, tipo, usuario, novoTexto, data);
    this.dataSource.data = [];
    this.Tabela();
  }

  Tabela() {
    //Pegar o id do usuário
    var usuario = JSON.parse(localStorage.getItem('user')!)['uid'];
    this.afs.casa(usuario).subscribe((tarefas) => {
      tarefas.forEach((tarefa: any) => {
        this.dataSource.data.push(tarefa.data());
      });
      this.table.renderRows();
      this.sortData({ active: 'data', direction: 'desc' });
    });
  }

  Excluir(categoria: string, id: string) {
    this.afs.excluir(categoria, id);
    this.dataSource.data = [];
    this.Tabela();
  }

  Opcoes() {
    this.afs.tarefas().subscribe((tarefas) => {
      tarefas.forEach((tarefa: any) => [this.opcao.push(tarefa.data())]);
    });
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

function compare(a: string, b: string, isAsc: boolean) {
  var aa = a.split('/').reverse().join();
  var bb = b.split('/').reverse().join();
  return (aa < bb ? -1 : 1) * (isAsc ? 1 : -1);
}
