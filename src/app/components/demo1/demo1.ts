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
    let sum = 0;
    while (n != 0) {
      let rem = n % 10;
      sum = sum + rem;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  cars = ['Tata', 'Honda'];
  addNewCar(newCar: string) {
    this.cars.push(newCar);
  }
}
