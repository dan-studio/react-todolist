import React ,{useState} from 'react';
import './style.css';

const Form = () => {
  
  return (
      <div className='formDiv'>
        <form className='todoInput'>
        <label>Title :</label>
        <input type='text'/>
        <label>Contents :</label>
        <input type='text'/>
        <button id="submit" type='submit' onClick={function(){console.log('a')}}>submit</button>
        </form>
    </div>
  );
};

export default Form;