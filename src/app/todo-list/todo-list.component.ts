import { Component } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  taskTitle: string = '';
  taskDate: Date = new Date();

  maintask: Task = { id: 1, title: 'First Task', date: new Date('2026-03-31') };
  tasks: Task[] = [];
}
