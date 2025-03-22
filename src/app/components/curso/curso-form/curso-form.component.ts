import { Component, inject } from '@angular/core';
import { Curso } from '../../../models/curso';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.scss'
})
export class CursoFormComponent {
  curso: Curso = new Curso();
  
  
    rotaAtivada = inject(ActivatedRoute);
  
    constructor() {
      let id = this.rotaAtivada.snapshot.params['id'];
      if(id) {
        //Chama find by id
        let curso1 = new Curso();
  
        curso1.id = 1;
        curso1.nome = 'Tecnologia da Info.';
  
        this.curso = curso1; //coloca objeto no formulário
      }
    }
  
    save() {
      if(this.curso.id > 0) {
        //update
        alert('estou atualizando...');
      }else {
        //save
        alert('estou salvando...');
      }
    }
}
