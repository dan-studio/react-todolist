import React from "react";
import Done from "./Done";
import Working from "./Working";
import "./style.css";

const List = ({ todos, remove, onToggle }) => {
  //component별로 진행중, 진행완료로 나눈다.
  // working -> todo components 호출 (false)
  // done -> todo components 호출 (true)

  return (
    <div className="lists">
      <h2 className="status">Work in progress . . 🫡</h2>
      <Working todos={todos} remove={remove} onToggle={onToggle} />
      <h2 className="status">Done ! 😎</h2>
      <Done todos={todos} remove={remove} onToggle={onToggle} />
    </div>
  );
};

export default List;
