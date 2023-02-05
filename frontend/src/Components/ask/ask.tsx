import React, { useEffect, useState } from 'react'
import './ask.css';
import {useNavigate} from "react-router";

export default function Questions() {
  const postQuestionUrl = "http://127.0.0.1:8000/ask/";
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function submitForm(event) {
    event.preventDefault();
    fetch(postQuestionUrl, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "title": title,
        "content": content
      }),
      credentials: 'include'
    })
    .then(() => navigate("/"))
  }

  return (
    <div className='ask'>
      <p>New Question</p>
      <form onSubmit={submitForm}>
      <label>
        <input type="text" 
              name="title" 
              value={title}
              placeholder='enter your question title'
              onChange={(e) => setTitle(e.target.value)}/>
      </label> <br/>
      <label>
        <textarea 
              name="content" 
              className='content'
              value={content}
              placeholder='write your question here'
              onChange={(e) => setContent(e.target.value)}/>
      </label>
      <input type="submit" value="Post" className='submit'/>
      </form>
    </div> 
  )
}
