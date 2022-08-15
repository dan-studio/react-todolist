import React, { useState } from "react";
import Form from "../form/Form";
import List from "../list/List";
import "./style.css";
const Layout = () => {
  const [input, setInput] = useState({
    title: "",
    body: "",
  });
  const { title, body } = input;

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(!input.title||!input.body) return;
    const num = todos.length;
    const todo = {
      id: num + 1,
      title,
      body,
      isDone: false,
    };
    //배열 항목 추가하기
    setTodos([...todos, todo]);
    // setTodos(todos.concat(todo)) concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
    setInput({
      title: "",
      body: "",
    });
  };
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "study React",
      body: "Finish todo list",
      isDone: false,
    },
    {
      id: 2,
      title: "wake up Early",
      body: "to study",
      isDone: true,
    },
  ]);
  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onToggle = (id) => {
    //todo.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = todo.id가 id인 것을 제거함
    setTodos(todos.map(
      todo => todo.id === id 
      ? {...todo, isDone: !todo.isDone} : todo
    ));
  };

  return (
    <div className="layOut">
      <Form
        title={title}
        body={body}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />
      <List todos={todos} remove={remove} onToggle={onToggle} />
    </div>
  );
};

export default Layout;
