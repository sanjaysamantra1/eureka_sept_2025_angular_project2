import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css'
})
export class Demo1 {
  add(a: number, b: number) {
    return a + b;
  }
  mul(a: number, b: number) {
    return a * b;
  }
  sumOfDigits(n: number) { // 125 = 8

  }
}
