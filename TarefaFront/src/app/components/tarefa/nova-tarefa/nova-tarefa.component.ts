
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarefa } from 'src/app/models/modulos';
import { TarefasService } from 'src/app/services.service';


@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.scss']
})


export class NovaTarefaComponent implements OnInit {

  tarefa: Tarefa = {

    title : '',
    description : ''

  }

  showMessage: boolean = false;

  constructor(private service: TarefasService) {}


  ngOnInit(): void {

  }


  novaTarefa(): void {

    if (this.tarefa.description == '') {
      this.showMessage = true;
      return;
    }



    if (this.tarefa.title == '') {
      this.tarefa = { ...this.tarefa, title: 'Sem titulo' };
    }


    this.service.adicionarTarefa(this.tarefa).subscribe(() => {

     location.reload();
    });

    this.cleanInput();

  }



  onShowMessagError(){
    this.showMessage = false;

  }

  cleanInput() {
    this.tarefa.title = '';
    this.tarefa.description = '';

  }




}
