import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent {

  aluno: Aluno = new Aluno();


  rotaAtivada = inject(ActivatedRoute);

  constructor() {
    let id = this.rotaAtivada.snapshot.params['id'];
    if(id) {
      //Chama find by id
      let aluno1 = new Aluno();

      aluno1.id = 1;
      aluno1.nome = 'Rodney';
      aluno1.cpf = '123.123.123-45';
      aluno1.telefone = '45 1234-1234';

      this.aluno = aluno1; //coloca objeto no formulário
    }
  }

  save() {
    if(this.aluno.id > 0) {
      //update
      alert('estou atualizando...');
    }else {
      //save
      alert('estou salvando...');
    }
  }
}
