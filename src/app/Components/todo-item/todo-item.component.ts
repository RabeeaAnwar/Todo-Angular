import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  contenteditable : boolean =false;
  @Input()
  todo!: Todo;
  @Output() todoDelete :EventEmitter<Todo> = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(todo:Todo){
    this.todoDelete.emit(todo);
  }
 
}
