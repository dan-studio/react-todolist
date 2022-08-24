import React from "react";
import Todo from "../todo/Todo";
import styled from "styled-components";
import { useSelector } from "react-redux";

const List = ({ todos, remove, onToggle }) => {
  //component별로 진행중, 진행완료로 나눈다.
  // working -> todo components 호출 (false)
  // done -> todo components 호출 (true)
  const todosList = useSelector(state=>state.todos.list)
  console.log(todosList)
  return (
    <div className="lists">
      <Status>Work in progress . . 🫡</Status>
      <TodoItems>
        {todosList
          .filter((todo) => todo.isDone === false)
          .map((todo) => (
            <Todo todo={todo} key={todo.id}/>
          ))}
      </TodoItems>
      <Status>Done ! <span role="img" aria-label="Smiling Face with Sunglasses">😎</span></Status>
      <TodoItems>
        {todosList
          .filter((todo) => todo.isDone === true)
          .map((todo) => (
            <Todo todo={todo} key={todo.id}/>
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
