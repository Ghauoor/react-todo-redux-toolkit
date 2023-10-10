import { createSlice, nanoid } from "@reduxjs/toolkit";

// initial state for store
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

// slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // reducer have property and func associate with it
  // if the func is create outside than just pass the ref sayHello donot call it like sayHello()
  // reducers always have access to the state and actions
  // state --> changes in initials state
  // actions --> new values
  // playload is object so can extract any thing from it
  reducers: {
    addTodo: (state, actions) => {
      const todo = {
        id: nanoid(),
        text: actions.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
