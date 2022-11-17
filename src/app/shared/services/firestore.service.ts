import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore:AngularFirestore) { }

  addTarefa(tarefa:string,tipo:any){
    let id = this.firestore.createId()
    this.firestore.collection('Tarefas').doc(id ).set({
      uid:id,
      nome:tarefa,
      tipo:tipo,
      stado:false
    })
    window.alert('Cadastrado com sucesso')
  }
}
