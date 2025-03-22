import { Component } from '@angular/core';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {
  
  

  lista: Aluno[] = [];

  constructor() {
    this.findAll();
  }

  findAll() {
    //Adicionar o backzin maroto aqui.

    let aluno1 = new Aluno();
    aluno1.id = 1;
    aluno1.nome = 'Robscreuzo';
    aluno1.cpf = '123.123.123-45'
    aluno1.telefone = '45 1234-1234'

    let aluno2 = new Aluno();
    aluno2.id = 2;
    aluno2.nome = 'Dagoberto';
    aluno2.cpf = '123.123.123-45'
    aluno2.telefone = '45 1234-1234'

    let aluno3 = new Aluno();
    aluno3.id = 3;
    aluno3.nome = 'Epaminondas';
    aluno3.cpf = '123.123.123-45'
    aluno3.telefone = '45 1234-1234'

    this.lista.push(aluno1, aluno2, aluno3);
  }

  delete(aluno:Aluno) {
    let indice = this.lista.findIndex(x => {return x.id == aluno.id});
    if(confirm('você vai deletar um cadastro! Está certo disso?')) {
      this.lista.splice(indice, 1); //deleta o objeto pelo indice.
    }
  }
}
