import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/modules/todos";
const Form = () => {
  const titleRefree = useRef(null);
  const bodyRefree = useRef(null);
  const dispatch = useDispatch();
  return (
    <FormDiv>
      <form className="todoInput">
        <label>Title :</label>
        <Input ref={titleRefree} name="title" type="text" />
        <label>Contents :</label>
        <Input ref={bodyRefree} name="body" type="text" />
        <Submit
          id="submit"
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            if(!titleRefree.current.value||!bodyRefree.current.value) return
            dispatch(
              createTodo({
                id: Date.now(),
                title: titleRefree.current.value,
                body: bodyRefree.current.value,
                isDone: false,
              })
            );
            titleRefree.current.value=''
            bodyRefree.current.value=''
          }}
        >
          Submit
        </Submit>
      </form>
    </FormDiv>
  );
};

const FormDiv = styled.div`
  height: 80px;
  border-radius: 15px;
  background-color: rgba(18, 183, 248, 0.13);
  margin: 50px auto;
`;
const Input = styled.input`
  outline: 0;
  border-width: 0 0 1px;
  border-bottom: 3px solid white;
  background-color: transparent;
  margin: 30px 30px 0 10px;
  transition: 1s;
  width: 200px;
  &:focus {
    color: 00a6ff;
    border-bottom: 5px solid #00a6ff;
    width: 230px;
  }
`;
const Submit = styled.button`
  background-color: transparent;
  border-radius: 15px;
  border: none;
  font-size: 20px;
  transition: 0.5s;
  &:hover {
    color: white;
    background-color: #00a6ff;
  }
`;

export default Form;
