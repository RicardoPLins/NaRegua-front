import { Component } from '@angular/core';
import {Salao} from '../../shared/modelo/salao';
import {SALOES} from '../../shared/modelo/SALOES';
import {ActivatedRoute, Router} from '@angular/router';
import {SalaoService} from "../../shared/services/salao.service";
import {IMensagem} from "../../shared/modelo/IMensagem";

@Component({
  selector: 'app-mantem-salao',
  templateUrl: './mantem-salao.component.html',
  styleUrls: ['./mantem-salao.component.css']
})
export class MantemSalaoComponent {

  salaoDeManutencao: Salao;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  saloes = SALOES;
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, private SalaoService: SalaoService, private mensagemService :IMensagem) {
    this.salaoDeManutencao = new Salao();
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      this.SalaoService.pesquisarPorId(idParaEdicao).subscribe(
        salaoEncontrado => {
          this.salaoDeManutencao = salaoEncontrado
          this.estahCadastrando = false;
          this.nomeBotaoManutencao = 'Salvar'
        }
      );
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }
  manter(): void{
    if(this.estahCadastrando && this.salaoDeManutencao) {
      this.SalaoService.inserir(this.salaoDeManutencao).subscribe(
        salaoInserido => this.mensagemService.sucesso('Salão cadastrado com sucesso!')
      );
    } else{
      this.SalaoService.atualizar(this.salaoDeManutencao).subscribe(
        salaoAtualizado => this.mensagemService.sucesso('Salão atualizado com sucesso!')
      )
    }
    this.salaoDeManutencao = new Salao();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemsaloestabela']);

  }
}

