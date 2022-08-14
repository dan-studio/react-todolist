import React from "react";
import Todo from "../todo/Todo";
import "./style.css";


const Working = ({ todos, remove }) => {
  return (
    <div className="progress">
      {todos.filter((todo) => todo.isDone === false)
    .map((todo) => 
      <Todo todo={todo} key={todo.id} remove={remove} />
    )}
    </div>
  );
};

export default Working;
