import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number;
  todo:Todo;

  constructor(
    private service:TodoDataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    // pega o id que vem na URL
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1,'',false, new Date());
    this.service.retrieveTodo('gigi',this.id).subscribe(
      data => this.todo = data;
    )
  }

  saveTodo(){
    this.service.updateTodo('gigi', this.id, this.todo).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['todos']);
      }
    )
  }

}
