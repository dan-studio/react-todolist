import React from 'react';
import './style.css';
const Todo = ({todo}) => {
  const {id, title, content, checked} = todo;
  return (
    <div className='todos'>
      <h2 className='todoTitle'>{title}</h2>
      <h4 className='todoContents'>{content}</h4>
      <div className='todoButtons'>
      <button className='todoButton'>Nailed it! ✅</button>
      <button className='todoButton'>remove ❌</button>
      </div>
    </div>
  );
};

export default Todo;