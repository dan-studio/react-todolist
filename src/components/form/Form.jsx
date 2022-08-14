import React ,{useState} from 'react';
import './style.css';
//나누지 말고 todo라는 state 하나 생성
//state 안에 value 값을 
const Form = (props) => {
  const [content, setContent] = useState({title: '', body: ''})
  const handleChange = (e) =>{
    setContent(e.target.value);
    console.log(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.title || !content.body) return;
    // 만약 input 창이 빈채로 submit을 하려고 할 땐 return시키기
    props.onSubmit(content);
    setContent({title: '', body: ''});
    // submit을 한 후에는 input 창을 비우기
  };

  return (
      <div className='formDiv'>
        <form className='todoInput'>
        <label>Title :</label>
        <input type='text' value={content.title||''} onChange={handleChange}/>
        <label>Contents :</label>
        <input type='text' value={content.body||''} onChange={handleChange}/>
        <button id="submit" type='submit' onClick={handleSubmit}>submit</button>
        </form>
    </div>
  );
};

export default Form;