import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/modulos';
import { TarefasService } from 'src/app/services.service';


@Component({
  selector: 'app-tarefas-concluidas',
  templateUrl: './tarefas-concluidas.component.html',
  styleUrls: ['./tarefas-concluidas.component.scss']
})
export class TarefasConcluidasComponent implements OnInit {

  listar_task : Tarefa[] = []

  constructor(private service: TarefasService) { }

  ngOnInit(): void {

    this.service.lerConcluidas().subscribe(list => {
      this.listar_task = list;
    });
  }

  deletaTarefa(tarefa: Tarefa){
    this.service.deletaTarefas(tarefa.id).subscribe()
    setTimeout(() => {
      location.reload();

    }, 300)

  }

  desmarcaTarefa(tarefa: Tarefa){
    this.service.desmarcaTarefa(tarefa.id, tarefa).subscribe()
    setTimeout(() => {
      location.reload();

    }, 300)
  }


}
