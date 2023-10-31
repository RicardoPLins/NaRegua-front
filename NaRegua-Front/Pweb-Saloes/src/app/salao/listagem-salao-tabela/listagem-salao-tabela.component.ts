import { Component, OnInit } from '@angular/core';
import { Salao } from 'src/app/shared/modelo/salao';
import {MatTableDataSource} from '@angular/material/table';
import {SalaoService} from '../../shared/services/salao.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listagem-salao-tabela',
  templateUrl: './listagem-salao-tabela.component.html',
  styleUrls: ['./listagem-salao-tabela.component.css']
})
export class ListagemSalaoTabelaComponent implements OnInit {
  dataSource: MatTableDataSource<Salao>;
  mostrarColunas = ['nome', 'endereco', 'dono', 'funcionarios', 'acoes'];

  constructor(private salaoService: SalaoService, private roteador: Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.salaoService.listar().subscribe(
      saloes => this.dataSource = new MatTableDataSource(saloes)
    );
  }

  filtrar(texto: string): void {
    this.dataSource.filter = texto.trim().toLowerCase();
  }

  apagar(id: string): void {
    console.log('apagando');
    this.salaoService.apagar(id).subscribe(
      apagado => {
        const indx = this.dataSource.data.findIndex(salao => salao.id === id);
        if (indx > -1) {
          this.dataSource.data.splice(indx, 1);
          this.dataSource = new MatTableDataSource<Salao>(this.dataSource.data);
        }
      }
    );
  }

  editar(salao: Salao): void {
    console.log('editando');
    this.roteador.navigate(['editasalao', salao.id]);
  }
  // listagem(){
  //   this.salaoService.listarMaioresDe1Funcionario().subscribe(
  //     saloes => this.dataSource = new MatTableDataSource(saloes)
  //   );
  // }
}
