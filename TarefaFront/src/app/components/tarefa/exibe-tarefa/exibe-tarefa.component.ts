
import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/modulos';
import { TarefasService } from 'src/app/services.service';




@Component({
  selector: 'app-exibe-tarefa',
  templateUrl: './exibe-tarefa.component.html',
  styleUrls: ['./exibe-tarefa.component.css']



  
})
export class ExibeTarefaComponent implements OnInit {

   listar_task : Tarefa[] = []

   displayedColumns = ["title", "text", "status", "editar","apagar","marcar"];
   

  constructor(private service: TarefasService) {

  }

  ngOnInit(): void {

    this.service.lerTodas().subscribe(list => {
      this.listar_task = list;
    });
  }

  deletaTarefa(tarefa: Tarefa){
    this.service.deletaTarefas(tarefa.id).subscribe()
    setTimeout(() => {
      location.reload();

    }, 300)

  }

  concluiTarefa(tarefa: Tarefa){
    this.service.concluirTarefa(tarefa.id, tarefa).subscribe()
    setTimeout(() => {
      location.reload();

    }, 300)
  }

}
