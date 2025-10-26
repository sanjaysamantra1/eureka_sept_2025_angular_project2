import { Component, signal } from '@angular/core';
import { Demo1 } from './components/demo1/demo1';
import { MaterialDemo } from './components/material-demo/material-demo';
import { CounterDemo } from './components/counter-demo/counter-demo';
import { TodoCrud } from './components/todo-crud/todo-crud';

@Component({
  selector: 'app-root',
  imports: [
    // Demo1,
    // MaterialDemo
    // CounterDemo
    TodoCrud
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eureka_sept_2025_angular_project2');
}
