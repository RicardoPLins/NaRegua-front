import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemSalaoComponent} from './salao/mantem-salao/mantem-salao.component';
import {ListagemSalaoComponent} from './salao/listagem-salao/listagem-salao.component';
import { ListagemSalaoTabelaComponent } from './salao/listagem-salao-tabela/listagem-salao-tabela.component';

const routes: Routes = [
  {
    path: 'cadastrosalao',
    component: MantemSalaoComponent
  },
  {
    path: 'editasalao/:id',
    component: MantemSalaoComponent
  },
  {
    path: 'listagemsaloes',
    component: ListagemSalaoComponent
  },
  {
    path: 'listagemsaloestabela',
    component: ListagemSalaoTabelaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
