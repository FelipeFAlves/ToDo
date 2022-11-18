import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore:AngularFirestore) { }

  addTarefa(tarefa:string,descricao:any,quem:any){
    let id = this.firestore.createId()
    this.firestore.collection(`users/${quem}/Tarefas`).doc(id).set({
      uid:id,
      nome:tarefa,
      descricao:descricao,
      stado:false
    })
    window.alert('Cadastrado com sucesso')
  }

  tarefas(quem:any){
    return this.firestore.collection(`users/${quem}/Tarefas`).get()
  }

}
