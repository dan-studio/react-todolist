import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

const Done = ({todos, remove, onToggle}) => {
  return (
    <div className="done">
      {todos
        .filter((todo) => todo.isDone === true)
        .map((todo, idx) => (
          <Todo todo={todo} key={idx} remove={remove} onToggle={onToggle}/>
        ))}
    </div>
  );
};

export default Done;
