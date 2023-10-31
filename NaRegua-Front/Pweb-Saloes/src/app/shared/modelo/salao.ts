export class Salao {
  id?: string;
  nome = '';
  endereco:string = '';
  dono: string = '';
  funcionarios?: number;

  constructor(id?: string, salao: Salao = {nome: '', endereco: '', dono: ''}) {
    this.id = id;
    this.nome = salao.nome;
    this.endereco = salao.endereco;
    this.dono = salao.dono;
    this.funcionarios = salao.funcionarios;
  }
}
