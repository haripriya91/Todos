import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {
  private todos;
  private activeTasks;
  private path;
  constructor(private todoService: TodoService,private route:ActivatedRoute) {}
   getTodos(query=''){
      return this.todoService.get(query).then(
        todos=>{this.todos=todos;
              this.activeTasks=this.todos.filter(todo=>todo.isDone).length;});
    }
   private newTodo;

   addTodo(){
     let count = this.todos.length;alert(count);count=count+1;
     this.todoService.add({_id:count,title:this.newTodo,isDone:false}).then(() => { return this.getTodos();})
     .then(()=>  { this.newTodo=""; })

     }
     updateTodo(todo,newValue){ 
          todo.title=newValue;
      this.todoService.put(todo).then(()=>{
        todo.editing= false;console.log(todo);
        return this.getTodos();
      })
     }
     destroyTodo(todo){
       console.log(todo);
       this.todoService.delete(todo._id).then(()=>{ return this.getTodos();})
     }
     clearallCompleted(){
         return this.todoService.clearallCompleted().then(()=>{return this.getTodos();})
     }
  ngOnInit() {
    this.route.params.subscribe(params=>{this.path=params['status'];
    this.getTodos(this.path);
    
  })  }
}
