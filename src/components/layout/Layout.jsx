import React, {useState, useRef} from 'react';
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';
import './style.css'
const Layout = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'study React',
      body: 'finish todo list',
      isDone: false
    },
    {
      id: 2,
      title: 'go to gym',
      body: 'leg day',
      isDone: false
    },
    {
      id: 3,
      title: 'commit on github',
      body: 'every commit each day',
      isDone: true
    },
    {
      id: 4,
      title: 'enjoy weekends',
      body: 'yeaaaay',
      isDone: true
    }
  ])
  const nextId = useRef(0)//함수형 component에서 ref를 쉽게 사용하기 위해 쓰이는 hook이다.
  //ref: 리액트 프로젝트 내부에서 특정 DOM에 이름을 다는 방법으로, 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동함
  const handleSubmit = (title, body) =>{
    const todo = {
      id: nextId.current,
      title,
      body,
      isDone: false
    }
    setTodos(todos.concat(todo))
    nextId.current +=1;
  }
  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='layOut'>
      <Header/>
      <Form onSubmit = {handleSubmit}/>
      <List todos={todos} remove={remove} todo={setTodos}/>
    </div>
  );
};

export default Layout;