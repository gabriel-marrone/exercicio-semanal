import { Component } from '@angular/core';
import { Professor } from '../../../models/professor';

@Component({
  selector: 'app-professor-list',
  standalone: true,
  imports: [],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.scss'
})
export class ProfessorListComponent {
  
  

  lista: Professor[] = [];

  constructor() {
    this.findAll();
  }

  findAll() {
    //Adicionar o backzin maroto aqui.

    let professor1 = new Professor();
    professor1.id = 1;
    professor1.nome = 'Rodney';
    professor1.cpf = '123.123.123-45';
    professor1.email = 'professor@email.com'
    professor1.especialidade = 'especialidade'
    professor1.turmas = '10'

    let professor2 = new Professor();
    professor2.id = 1;
    professor2.nome = 'Carlinhos';
    professor2.cpf = '123.123.123-45';
    professor2.email = 'professor@email.com'
    professor2.especialidade = 'especialidade'
    professor2.turmas = '11'

    let professor3 = new Professor();
    professor3.id = 1;
    professor3.nome = 'Sprelson';
    professor3.cpf = '123.123.123-45';
    professor3.email = 'professor@email.com'
    professor3.especialidade = 'especialidade'
    professor3.turmas = '12'

    this.lista.push(professor1, professor2, professor3);
  }

  delete(professor:Professor) {
    let indice = this.lista.findIndex(x => {return x.id == professor.id});
    if(confirm('você vai deletar um cadastro! Está certo disso?')) {
      this.lista.splice(indice, 1); //deleta o objeto pelo indice.
    }
  }
}
