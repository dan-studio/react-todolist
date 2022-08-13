import React from 'react';
import Todo from '../todo/Todo';
import './style.css'

const List = ({todos}) => {
  return (
    <div className='lists'>
    <h2 className='status'>Work in progress . .  🫡</h2>
    <div className='progress'>
      {todos.map((todo)=>(
        <Todo 
          todo={todo}
          key={todo.id}/>
      ))}
    </div>
    <h2 className='status'>Done !  😎</h2>
    <div className='done'>
      
    </div>
    </div>
  );
};

export default List;