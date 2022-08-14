import React from 'react';
import './style.css';
const Todo = ({todo, remove}) => {
  const {id, title, body, isDone} = todo;
  return (
    <div className='container'>
    <div className='todos'>
      <h3 className='todoTitle'>{title}</h3>
      <h4 className='todoContents'>{body}</h4>
      <div className='todoButtons'>
      <button className='todoButton'>Nailed it! ✅</button>
      <button className='todoButton' onClick={() => remove(id)}>remove ❌</button>
      </div>
    </div>
    </div>
  );
};

export default Todo;