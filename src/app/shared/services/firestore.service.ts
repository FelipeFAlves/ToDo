import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore:AngularFirestore,private auth:AuthService) { }

  addTarefa(tarefa:string,descricao:any,quem:any,opcao:string,data:any){
    let id = this.firestore.createId()
    data = new Date(`${data} 03:00:00`).toLocaleDateString()
    this.firestore.collection(`users/${quem}/${opcao}`).doc(id).set({
      uid:id,
      nome:tarefa,
      descricao:descricao,
      stado:false,
      categoria:opcao,
      data:data
    })
    window.alert('Cadastrado com sucesso')
  }

  //lista de opções
  tarefas(){
    return this.firestore.collection(`Opcoes`).get()
  }

  //Opções que pode ter sido agendados
  trabalho(quem:any){
    return this.firestore.collection(`users/${quem}/Trabalho`).get()
  }
  pessoal(quem:any){
    return this.firestore.collection(`users/${quem}/Pessoal`).get()
  }
  faculdade(quem:any){
    return this.firestore.collection(`users/${quem}/Faculdade`).get()
  }
  casa(quem:any){
    return this.firestore.collection(`users/${quem}/Casa`).get()
  }

  excluir(categoria:string,id:string){
    var usuario = JSON.parse(localStorage.getItem('user')!)['uid'];
    this.firestore.collection(`users/${usuario}/${categoria}`).doc(id).delete()
    return
  }
}

