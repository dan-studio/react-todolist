import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { readTodo } from '../../redux/modules/todos';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  dispatch(readTodo(parseInt(id)))
  const navigate = useNavigate()
  const todo = useSelector(state=>state.todos.current)
  console.log(todo)
  return (
    <div>
      <h3>id: {id}</h3>
      <h1>{todo.title}</h1>
      <h2>{todo.body}</h2>
      <GoBackButton onClick={()=>{navigate(-1)}}>go back  <span role="img" aria-label="goback">⏪</span></GoBackButton>
    </div>
  );
};
const GoBackButton = styled.button`
  margin: 10px;
  font-size: 15px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    color: white;
    background-color: #00a6ff;
  }
`;

export default Detail;