import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ActivatedRoute } from '@angular/router';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-turma-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './turma-form.component.html',
  styleUrl: './turma-form.component.scss'
})
export class TurmaFormComponent {

  turma: Turma = new Turma();


  rotaAtivada = inject(ActivatedRoute);

  constructor() {
    let id = this.rotaAtivada.snapshot.params['id'];
    if(id) {
      //Chama find by id
      let turma1 = new Turma();

      turma1.id = 1;
      turma1.nome = 'Turma 1';
      turma1.semestre = '40o semestre';
      turma1.ano = 1;
      turma1.turno = 'sei la... das 10 até as 3?';
      turma1.curso = 'Tecnologias eu acho?';
      
      

      this.turma = turma1; //coloca objeto no formulário
    }
  }

  save() {
    if(this.turma.id > 0) {
      //update
      alert('estou atualizando...');
    }else {
      //save
      alert('estou salvando...');
    }
  }
}