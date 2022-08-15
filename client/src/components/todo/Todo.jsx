import React from "react";
import "./style.css";
const Todo = ({ todo, remove, onToggle }) => {
  const { id, title, body } = todo;
  return (
    <div className="container">
      <div className="todos">
        <h3 className="todoTitle">{title}</h3>
        <h4 className="todoContents">{body}</h4>
        <div className="todoButtons">
          {todo.isDone === false ? (
            <button className="todoButton" onClick={() => onToggle(id)}>
              Nailed it! ✅
            </button>
          ) : (
            <button className="todoButton" onClick={() => onToggle(id)}>
              Cancel ⛔️
            </button>
          )}
          <button className="todoButton" onClick={() => remove(id)}>
            remove ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
