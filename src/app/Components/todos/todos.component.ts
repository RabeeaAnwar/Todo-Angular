import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  localItem:string |null;
  todos:Todo[];
  constructor() {
    this.localItem =localStorage.getItem("todos");
    if(this.localItem === null){
    this.todos=[];
    }
    else{
       this.todos=JSON.parse(this.localItem)
    }
  
   }

  ngOnInit(): void {
  }

  addNote(todo:Todo){
    
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

 

  deleteNote(todo:Todo){
    const index= this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
