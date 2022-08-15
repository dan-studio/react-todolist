import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

const Working = ({todos, remove, onToggle}) => {
  return (
    <div className="working">
      {todos
        .filter((todo) => todo.isDone === false)
        .map((todo, idx) => (
          <Todo todo={todo} key={idx} remove={remove} onToggle={onToggle}/>
        ))}
    </div>
  );
};

export default Working;
