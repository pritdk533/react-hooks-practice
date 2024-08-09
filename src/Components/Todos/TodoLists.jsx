import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleTodo from "./SingleTodo";
import { fetchTodosHandler } from "../../feature/TodoSlice/TodoSlice";

const TodoLists = () => {
  const { data } = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosHandler());
  }, []);

  return (
    <>
      {data &&
        data.map((todo) => {
          return <SingleTodo key={todo.id} {...todo} />;
        })}
    </>
  );
};

export default TodoLists;
