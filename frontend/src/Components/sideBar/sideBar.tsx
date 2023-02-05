import React from 'react'
import './sideBar.css';

export default function SideBar() {
  return (
    <div>
      <div className='about'>
        <h1>About</h1>
        <ul>
          <li>246 experts</li>
          <li>100k+ questions and answers</li>
          <li>50K upvotes</li>
          <li>145 tokens award</li>
        </ul>  
      </div> 
      <div className='experts'>
      <h1>top experts</h1>
        <ul>
          <li>pseudo </li>
          <li>near experts</li>
          <li>bitcoin</li>
          <li>ethereum maxi</li>
        </ul>  
      </div>
    </div>

  )
}
