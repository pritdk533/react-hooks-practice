import React from "react";
import TodoForm from "./TodoForm";
import TodoLists from "./TodoLists";

const TodoApp = () => {
  return (
    <>
      <div>
        <TodoForm />
        <TodoLists />
      </div>
    </>
  );
};

export default TodoApp;
