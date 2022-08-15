import React from 'react';
import './style.css';

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