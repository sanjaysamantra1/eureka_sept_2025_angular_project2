import { counterReducer } from "../reducers/counter.reducer";
import { todoReducer } from "../reducers/todo.reducer";

export const myStore = {
  counterReducer: counterReducer,
  todoReducer: todoReducer,
}
