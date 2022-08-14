import React from "react";
import Done from "./Done";
import Working from "./Working";
import "./style.css";

const List = ({ todos, remove }) => {
  //component별로 진행중, 진행완료 나눈 후 if문을 사용해서 넣는다.
  // progressList -> todo components 호출 (false)
  // doneList -> todo components 호출 (true)
 
  
  return (
    <div className="lists">
      <h2 className="status">Work in progress . . 🫡</h2>
      <Working todos={todos} remove={remove}/>
      <h2 className="status">Done ! 😎</h2>
      <Done todos={todos} remove={remove}/>
    </div>
  );
};

export default List;
