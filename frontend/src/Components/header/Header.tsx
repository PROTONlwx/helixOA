import React from 'react'
import './header.css'
import {useNavigate} from "react-router";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className='top'>
        <button onClick={ () => navigate("/ask") }>Ask a question</button>
      </div>
      <div className='badge'>
        <h1>Near Protocol</h1>
      </div>
    </>
  )
}
