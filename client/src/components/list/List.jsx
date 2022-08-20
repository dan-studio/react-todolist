import React from "react";
import Todo from "../todo/Todo";
import styled from "styled-components";

const List = ({ todos, remove, onToggle }) => {
  //component별로 진행중, 진행완료로 나눈다.
  // working -> todo components 호출 (false)
  // done -> todo components 호출 (true)

  return (
    <div className="lists">
      <Status>Work in progress . . 🫡</Status>
      <TodoItems>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo, idx) => (
            <Todo todo={todo} key={idx} remove={remove} onToggle={onToggle} />
          ))}
      </TodoItems>
      <Status>Done ! 😎</Status>
      <TodoItems backgroundColor='red'>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo, idx) => (
            <Todo todo={todo} key={idx} remove={remove} onToggle={onToggle} />
          ))}
      </TodoItems>
    </div>
  );
};
const Status = styled.h2`
  color: #444;
`;
const TodoItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default List;
