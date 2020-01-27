import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [];
  /*[
    new Todo(1, 'Aprender dançar', false, new Date()),
    new Todo(2, 'Aprender cantar', false, new Date()),
    new Todo(3, 'Aprender nadar', false, new Date())
  ]*/

  /*todo = {
    id : 1,
    description: 'Learn to Dance'
  }*/

  message:string;

  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.atualizarTarefas();
  }

  atualizarTarefas(){
    this.todoService.retrieveAllTodos('gigi').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete ${id}`);
    this.todoService.deleteTodo('gigi', id).subscribe(
      response => {
        console.log(response);
        this.message =`Tarefa (id: ${id}) removida com sucesso!`;
        this.atualizarTarefas();
      }
    )
  }

  atualizarTodo(id){
    console.log(`atualizar ${id}`);
    this.router.navigate(['todos',id]);
  }

}
