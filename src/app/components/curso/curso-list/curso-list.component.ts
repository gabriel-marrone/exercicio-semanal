import { Component } from '@angular/core';
import { Curso } from '../../../models/curso';

@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.scss'
})
export class CursoListComponent {
  
  

  lista: Curso[] = [];

  constructor() {
    this.findAll();
  }

  findAll() {
    //Adicionar o backzin maroto aqui.

    let curso1 = new Curso();
    curso1.id = 1;
    curso1.nome = 'Tecnologia da Informacao';

    let curso2 = new Curso();
    curso2.id = 2;
    curso2.nome = 'Engenharia da Pesca';

    let curso3 = new Curso();
    curso3.id = 3;
    curso3.nome = 'curos de faculdade super real';

    this.lista.push(curso1, curso2, curso3);
  }

  delete(curso:Curso) {
    let indice = this.lista.findIndex(x => {return x.id == curso.id});
    if(confirm('você vai deletar um cadastro! Está certo disso?')) {
      this.lista.splice(indice, 1); //deleta o objeto pelo indice.
    }
  }
}