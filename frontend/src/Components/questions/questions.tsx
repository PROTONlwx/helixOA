import React, { useEffect, useState } from 'react'

import './questions.css';

export default function Questions() {
  const getQuestionUrl = "http://127.0.0.1:8000/";
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    fetch(getQuestionUrl)
    .then((res) => res.json()) 
    .then((res) => setQuestionsList(res));
  }, [])

  return (
    <div className='questions'>
      { questionsList.map(q =>
        <div key={JSON.stringify(q)} className="question">
          <b>{q.title}</b>
          <p>Content: {q.content}</p>
          <hr></hr>
          <p>Asked by</p>
          <p className='author'>Pseudo Near Expert</p>
          <p className='author-meta'>2 Answers . 1 question</p>
        </div>
      )}
    </div>
    
  )
}
