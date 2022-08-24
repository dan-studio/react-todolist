import "./App.css";
import React from "react";
import TodoList from "./pages/TodoList";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/detail/Detail";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
