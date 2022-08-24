import React from 'react';
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
      <button onClick={()=>{navigate(-1)}}>go back</button>
    </div>
  );
};

export default Detail;