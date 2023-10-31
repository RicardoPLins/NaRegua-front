import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {RouterLink} from '@angular/router';
import { MantemSalaoComponent } from './mantem-salao/mantem-salao.component';
import { ListagemSalaoComponent } from './listagem-salao/listagem-salao.component';
import { ListagemSalaoTabelaComponent } from './listagem-salao-tabela/listagem-salao-tabela.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    ListagemSalaoComponent,
    MantemSalaoComponent,
    ListagemSalaoComponent,
    ListagemSalaoTabelaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    RouterLink,
    MatTableModule
  ],
  exports: [
    MantemSalaoComponent,
    ListagemSalaoComponent
  ]
})
export class SalaoModule { }
