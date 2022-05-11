
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaTarefaComponent } from './components/tarefa/atualiza-tarefa/atualiza-tarefa.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'atualizaTarefa/:id', component: AtualizaTarefaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
