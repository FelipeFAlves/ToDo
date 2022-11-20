import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore:AngularFirestore,private auth:AuthService) { }

  addTarefa(tarefa:string,descricao:any,quem:any,opcao:string){
    let id = this.firestore.createId()
    this.firestore.collection(`users/${quem}/${opcao}`).doc(id).set({
      uid:id,
      nome:tarefa,
      descricao:descricao,
      stado:false,
      categoria:opcao,
    })
  }

  //lista de opções
  tarefas(quem:any){
    return this.firestore.collection(`users/${quem}/Tarefas`).get()
  }

  //Areas que pode agendar
  trabalho(quem:any){
    return this.firestore.collection(`users/${quem}/"Trabalho"`).get()
  }
  pessoal(quem:any){
    return this.firestore.collection(`users/${quem}/"Pessoal"`).get()
  }
  faculdade(quem:any){
    return this.firestore.collection(`users/${quem}/"Faculdade"`).get()
  }
  casa(quem:any){
    return this.firestore.collection(`users/${quem}/"Casa"`).get()
  }

  excluir(id:string){
    this.firestore.collection(`users/${this.auth.userData.uid}/Tarefas`).doc(id).delete()
    return
  }
}
