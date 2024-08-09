import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../feature/TodoSlice/TodoSlice";
import { deleteTodoHandler } from "../../feature/TodoSlice/TodoSlice";
const SingleTodo = ({ id, title, isCompleted }) => {
  const dispatch = useDispatch();
  // const editTodoHandler = () => {};

  return (
    <>
      <div>
        <p>Id : {id}</p>
        <p>Title : {title}</p>
        <p>
          <input
            type="checkbox"
            name="isCompleted"
            id="isCompleted"
            checked={isCompleted}
            onChange={(e) => dispatch(toggleTodo({ id }))}
          />{" "}
          Status : {isCompleted ? "Done" : "Pending"}
        </p>
      </div>
      <div>
        {/* <button onClick={editTodoHandler}>Edit</button> */}
        <button onClick={() => dispatch(deleteTodoHandler(id))}>Delete</button>
      </div>
    </>
  );
};

export default SingleTodo;
