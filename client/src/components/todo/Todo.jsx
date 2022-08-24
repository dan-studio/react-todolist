import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../../redux/modules/todos";
const Todo = ({ todo }) => {
  const { id, title, body, isDone } = todo;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(id)
  return (
    <Container>
      {!isDone? (
        <Todos background="rgba(18, 183, 248, 0.13)">
          <Todotitle>{title}</Todotitle>
          <Todobody>{body}</Todobody>
          <Buttons>
            <Todobutton onClick={() => navigate('/detail/'+id)}>Detail</Todobutton>
            <Todobutton onClick={()=>{
              dispatch(updateTodo(id))
            }}>Nailed it! <span role="img" aria-label="Check Mark">✅</span></Todobutton>
            <Todobutton onClick={()=>{
              dispatch(deleteTodo(id))
            }}>remove <span role="img" aria-label="Cross Mark">❌</span></Todobutton>
          </Buttons>
        </Todos>
      ) : (
        <Todos background="rgba(248, 102, 18, 0.13);">
          <Todotitle>{title}</Todotitle>
          <Todobody>{body}</Todobody>
          <Buttons>
            <Todobutton onClick={() => navigate('/detail/'+id)}>Detail</Todobutton>
            <Todobutton onClick={()=>{
              dispatch(updateTodo(id))
            }}>Cancel <span role="img" aria-label="Check Mark">⛔️</span></Todobutton>
            <Todobutton onClick={()=>{
              dispatch(deleteTodo(id))
            }}>remove <span role="img" aria-label="Cross Mark">❌</span></Todobutton>
          </Buttons>
        </Todos>
      )}
    </Container>
  );
};
const Container = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;
const Todos = styled.div`
  height: 200px;
  width: 280px;
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
