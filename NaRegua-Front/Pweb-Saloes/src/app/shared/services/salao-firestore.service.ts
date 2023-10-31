import { Injectable } from '@angular/core';
import { Salao } from '../modelo/salao';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {from, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaoFirestoreService {

  colecaoSaloes: AngularFirestoreCollection<Salao>;
  NOME_COLECAO = 'saloes';

  constructor(private afs: AngularFirestore) {
    this.colecaoSaloes = afs.collection(this.NOME_COLECAO);
   }

   listar(): Observable<Salao[]> {
     return this.colecaoSaloes.valueChanges({idField: 'id'});
   }

    inserir(salao: Salao): Observable<object> {
      delete salao.id;
      return from(this.colecaoSaloes.add(Object.assign({...salao})));
     }

  apagar(id: string): Observable<void> {
    return from(this.colecaoSaloes.doc(id).delete());
  }


  pesquisarPorId(id: string): Observable<Salao> {
    // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
    //  para o tipo usuário
    return this.colecaoSaloes.doc(id).get().pipe(map(document => new Salao(document.id, document.data())));
  }


  atualizar(salao: Salao): Observable<void> {
// removendo id pois não vamos guardar nos dados do documento, mas sim usar apenas como id para recuperar o documento
    return from(this.colecaoSaloes.doc(salao.id).update(Object.assign({}, salao)));
    delete salao.id;

  }
  listarMaioresDe1Funcionario(): Observable<Salao[]> {
    let salaoMaisdeUm: AngularFirestoreCollection<Salao>;
    // fazendo pesquisas usando o where. Um where pode ser encadeado com outro
    salaoMaisdeUm = this.afs.collection(this.NOME_COLECAO, ref => ref.where('funcionarios', '>', '1'));
    return salaoMaisdeUm.valueChanges();
  }
}
