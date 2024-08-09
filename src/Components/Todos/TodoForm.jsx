import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTodohandler } from "../../feature/TodoSlice/TodoSlice";
// import { addTodo } from "../../feature/TodoSlice/TodoSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const todoSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      setTitle("");
      return alert("Please enter your todo task");
    }
    const newTodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };
    console.log("newTodo", newTodo);
    // dispatch(addTodo(newTodo));
    dispatch(addTodohandler(newTodo));
    setTitle("");
  };
  return (
    <>
      <div>
        <h1>TodoForm</h1>
      </div>
      <div>
        <form onSubmit={todoSubmitHandler}>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Your Todo"
          />
          <button type="submit">
            {/* {!isEditAllowed ? <span>ADD TODO</span> : <span>UPDATE TODO</span>} */}
            <span>ADD TODO</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
