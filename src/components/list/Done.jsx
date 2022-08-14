import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

const Done = ({ todos, remove }) => {
  return (
    <div className="done">
      {todos.filter((todo)=>todo.isDone===true)
      .map((todo)=>
      <Todo todo={todo} key={todo.id} remove={remove} />
      )}
    </div>
  );
};

export default Done;
