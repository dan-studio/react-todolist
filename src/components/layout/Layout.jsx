import React, {useState} from 'react';
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';
import './style.css'
const Layout = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Watch React tutorial video',
      content: 'aasdasdajslkdjaw;',
      checked: true
    },
    {
      id: 2,
      title: 'do the homework',
      content: 'aasdasdajslkdjaw;',
      checked: false
    },
    {
      id: 3,
      title: 'go to the gym',
      content: 'aasdasdajslkdjaw;',
      checked: false
    },
    {
      id: 4,
      text: 'commit on github',
      content: 'aasdasdajslkdjaw;',
      checked: true
    }
  ])
  return (
    <div className='layOut'>
      <Header/>
      <Form/>
      <List todos={todos}/>
    </div>
  );
};

export default Layout;