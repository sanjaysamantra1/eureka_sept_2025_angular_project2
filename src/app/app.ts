import { Component, signal } from '@angular/core';
import { Demo1 } from './components/demo1/demo1';
import { MaterialDemo } from './components/material-demo/material-demo';

@Component({
  selector: 'app-root',
  imports: [
    Demo1,
    MaterialDemo
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eureka_sept_2025_angular_project2');
}
