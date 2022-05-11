import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';


import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';

import { ExibeTarefaComponent } from './components/tarefa/exibe-tarefa/exibe-tarefa.component';
import { NovaTarefaComponent } from './components/tarefa/nova-tarefa/nova-tarefa.component';
import { TarefasConcluidasComponent } from './components/tarefa/tarefas-concluidas/tarefas-concluidas.component';
import { AtualizaTarefaComponent } from './components/tarefa/atualiza-tarefa/atualiza-tarefa.component';
import { HomeComponent } from './home/home.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AtualizaTarefaComponent,
    ExibeTarefaComponent,
    NovaTarefaComponent,
    TarefasConcluidasComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
