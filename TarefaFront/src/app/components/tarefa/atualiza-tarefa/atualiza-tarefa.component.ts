import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/models/modulos';
import { TarefasService } from 'src/app/services.service';

  @Component({
    selector: 'app-atualiza-tarefa',
    templateUrl: './atualiza-tarefa.component.html',
    styleUrls: ['./atualiza-tarefa.component.scss']
  })


  export class AtualizaTarefaComponent implements OnInit {


    urlId: string = '';

    tarefa: Tarefa = {

      title : '',
      description : ''


    }



    constructor(private service : TarefasService, private router: Router,
      private id: ActivatedRoute) { }

    ngOnInit(): void {
      const pegaId = this.id.snapshot.paramMap.get('id');
      this.service.lerPorId(String(pegaId)).subscribe((tarefa:Tarefa) => {
        this.tarefa = tarefa;
      });
    }



    atualizarTarefa():void{

      if(this.tarefa.description == ''){
        return;
      }
     this.service.editaTarefa(this.tarefa).subscribe(() => {
       console.log('tarefa atualizada');

     });
     setTimeout(() => {
       location.reload();

     }, 300)
     this.cancel();


    }

    cancel(): void {
      this.router.navigate(['/']);
    }




  }
