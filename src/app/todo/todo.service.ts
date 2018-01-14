import { Injectable } from '@angular/core';
let todos =[ 
  { _id: 1,title:'Todo task-1',isDone:true},
  { _id: 2,title:'Todo task-2',isDone:false},
  { _id: 3,title:'Todo task-3',isDone:true},
  { _id: 4,title:'Todo task-4',isDone:false},
  { _id: 5,title:'Todo task-5',isDone:false},
  { _id: 6,title:'Todo task-6',isDone:false}

];
@Injectable()
export class TodoService {

  constructor() { }
  get(query=''){

    return new Promise((resolve)=>
    {
      let data;
      if(query === 'completed' || query === 'active'){
        if(query === 'completed')
        var isCompleted = true;
        else if(query === 'active')
        var isCompleted = false;
        
        data= todos.filter(todo => todo.isDone === isCompleted);
      }else {
        data= todos;
      }
      resolve(data);        
      
    
    
    
    });
  }

  add(data){
    return new Promise((resolve=>{
      todos.push(data);
      resolve(todos);
    }))

  }
  put(data){
    return new Promise((resolve)=>{
      console.log(data);
      let index = todos.findIndex(todo=>todo._id === data._id);//alert(index);
      todos[index].title = data.title;
      resolve(todos);
    })
  }

  delete(id)
  {
    return new Promise((resolve)=>{

        let index =todos.findIndex(todo=>todo._id === id);
        todos.splice(index,1);
        resolve(true);
    });
  }
  clearallCompleted(){
    return new Promise((resolve)=>{
      todos=todos.filter(todo=>todo.isDone===false);
      resolve(todos);
    })
  }

}
