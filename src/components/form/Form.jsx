import React from 'react';
import './style.css';
//나누지 말고 todo라는 state 하나 생성
//state 안에 value 값을 
const Form = ({title, body, onChangeHandler, onSubmitHandler}) => {
  return (
      <div className='formDiv'>
        <form className='todoInput'>
        <label>Title :</label>
        <input name='title' type='text' value={title} onChange={onChangeHandler}/>
        <label>Contents :</label>
        <input name='body' type='text' value={body} onChange={onChangeHandler}/>
        <button id="submit" type='submit' onClick={onSubmitHandler}>Submit</button>
        </form>
    </div>
  );
};

export default Form;