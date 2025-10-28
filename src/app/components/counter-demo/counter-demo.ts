import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, reset } from '../../ngrx/actions/counter.actions';

@Component({
  selector: 'app-counter-demo',
  imports: [CommonModule],
  templateUrl: './counter-demo.html',
  styleUrl: './counter-demo.css'
})
export class CounterDemo {
  count$: Observable<number> | undefined;

  constructor(private store: Store) {
    this.count$ = store.select((state: any) => state.counterReducer); // Selector
  }
  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch({ type: '[Counter] Decrement' });
  }
  reset() {
    this.store.dispatch(reset());
  }
}
