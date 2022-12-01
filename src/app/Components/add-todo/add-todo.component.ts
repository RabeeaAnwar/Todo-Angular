import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  descrip:string="";
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo ={
      id:Math.floor(Math.random() * 100),
      note:this.descrip,
      active:true
    }
    this.todoAdd.emit(todo);
    this.descrip="";
  }
}
