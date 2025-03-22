import { Component } from '@angular/core';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-turma-list',
  standalone: true,
  imports: [],
  templateUrl: './turma-list.component.html',
  styleUrl: './turma-list.component.scss'
})
export class TurmaListComponent {
  
  

  lista: Turma[] = [];

  constructor() {
    this.findAll();
  }

  findAll() {
    //Adicionar o backzin maroto aqui.

    let turma1 = new Turma();
    turma1.id = 1;
    turma1.nome = 'Turma 1';
    turma1.semestre = '40o semestre';
    turma1.ano = 1;
    turma1.turno = 'sei la... das 10 até as 3?';
    turma1.curso = 'Tecnologias eu acho?';

    let turma2 = new Turma();
    turma2.id = 2;
    turma2.nome = 'Turma 2';
    turma2.semestre = '2o semestre';
    turma2.ano = 3;
    turma2.turno = 'noturno';
    turma2.curso = 'Psicologia';

    let turma3 = new Turma();
    turma1.id = 3;
    turma1.nome = 'Turma 3';
    turma1.semestre = '4o semestre';
    turma1.ano = 7;
    turma1.turno = 'Matutino';
    turma1.curso = 'Administração';

    this.lista.push(turma1, turma2, turma3);
  }

  delete(turma:Turma) {
    let indice = this.lista.findIndex(x => {return x.id == turma.id});
    if(confirm('você vai deletar um cadastro! Está certo disso?')) {
      this.lista.splice(indice, 1); //deleta o objeto pelo indice.
    }
  }
}
