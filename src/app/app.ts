import { Component, signal } from '@angular/core';
import { Demo1 } from './components/demo1/demo1';

@Component({
  selector: 'app-root',
  imports: [
    Demo1
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eureka_sept_2025_angular_project2');
}
