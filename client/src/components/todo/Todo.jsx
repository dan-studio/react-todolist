import React from "react";
import styled from "styled-components";
const Todo = ({ todo, remove, onToggle }) => {
  const { id, title, body } = todo;
  return (
    <Container>
      {todo.isDone === false ? (
        <Todos background="rgba(18, 183, 248, 0.13)">
          <Todotitle>{title}</Todotitle>
          <Todobody>{body}</Todobody>
          <Buttons>
            <Todobutton onClick={() => onToggle(id)}>Nailed it! ✅</Todobutton>
            <Todobutton onClick={() => remove(id)}>remove ❌</Todobutton>
          </Buttons>
        </Todos>
      ) : (
        <Todos background="rgba(248, 102, 18, 0.13);">
          <Todotitle>{title}</Todotitle>
          <Todobody>{body}</Todobody>
          <Buttons>
            <Todobutton onClick={() => onToggle(id)}>Cancel ⛔️</Todobutton>
            <Todobutton onClick={() => remove(id)}>remove ❌</Todobutton>
          </Buttons>
        </Todos>
      )}
    </Container>
  );
};
const Container = styled.div`
  margin: auto;
`;
const Todos = styled.div`
  height: 200px;
  width: 300px;
  background-color: ${(props)=>props.background};
  border-radius: 15px;
  position: relative;
`;
const Todotitle = styled.h3`
  margin: 20px 0 0 0;
  padding: 10px 0 0 0;
`;
const Todobody = styled.h4`
  margin: 20px;
  word-break: break-all;
`;
const Buttons = styled.div`
  position: absolute;
  bottom: 0px;
  width: 300px;
  margin: auto;
`;
const Todobutton = styled.button`
  margin: 10px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    color: white;
    background-color: #00a6ff;
  }
`;

export default Todo;
