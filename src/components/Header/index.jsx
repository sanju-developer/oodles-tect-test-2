import React from 'react'
import './Header.css'

export const Header = () => {
  return <div className="header-container">
  <div className="logo">Logo</div>
  <div className="header-item">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Candidate</li>
      <li>Blog</li>
      <li><button classname="purple">Post a job</button></li>
      <li><button classname="purple">Want a job</button></li>
    </ul>
  </div>
  </div>
}