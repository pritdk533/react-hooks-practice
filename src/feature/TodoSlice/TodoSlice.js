import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "TodoSlice",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      return state;
    },

    deleteTodo: (state, action) => {
      return state;
    },

    toggleTodo: (state, action) => {
      return state;
    },

    editTodo: (state, action) => {
      return state;
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
