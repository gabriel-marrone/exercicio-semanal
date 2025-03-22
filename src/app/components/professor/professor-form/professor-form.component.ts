import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ActivatedRoute } from '@angular/router';
import { Professor } from '../../../models/professor';

@Component({
  selector: 'app-professor-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.scss'
})
export class ProfessorFormComponent {

    professor: Professor = new Professor();
  
  
    rotaAtivada = inject(ActivatedRoute);
  
    constructor() {
      let id = this.rotaAtivada.snapshot.params['id'];
      if(id) {
        //Chama find by id
        let professor1 = new Professor();
  
        professor1.id = 1;
        professor1.nome = 'Rodney';
        professor1.cpf = '123.123.123-45';
        professor1.email = 'professor@email.com'
        professor1.especialidade = 'especialidade'
        professor1.turmas = '10'
  
        this.professor = professor1; //coloca objeto no formulário
      }
    }
  
    save() {
      if(this.professor.id > 0) {
        //update
        alert('estou atualizando...');
      }else {
        //save
        alert('estou salvando...');
      }
    }
}
