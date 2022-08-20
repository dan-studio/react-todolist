import React from "react";
import styled from "styled-components";

const Form = ({ title, body, onChangeHandler, onSubmitHandler }) => {
  return (
    <FormDiv>
      <form className="todoInput">
        <label>Title :</label>
        <Input
          name="title"
          type="text"
          value={title}
          onChange={onChangeHandler}
        />
        <label>Contents :</label>
        <Input
          name="body"
          type="text"
          value={body}
          onChange={onChangeHandler}
        />
        <Submit id="submit" type="submit" onClick={onSubmitHandler}>
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
  border-radius:  15px;
  border: none;
  font-size: 20px;
  transition: .5s;
  &:hover{
    color: white;
    background-color: #00a6ff;
  }
  `

export default Form;
