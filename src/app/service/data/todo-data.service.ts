import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`http://192.168.15.6:8080/users/${username}/todos`);
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`http://192.168.15.6:8080/users/${username}/todos/${id}`);
  }

  deleteTodo(username, id){
    return this.http.delete(`http://192.168.15.6:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put(`http://192.168.15.6:8080/users/${username}/todos/${id}`, todo);
  }

}
