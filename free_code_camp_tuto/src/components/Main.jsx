import React from 'react'
import sideLogo from "../images/2.png"

function Main() {
  return (
    <main>
        <h1 className="main-title">Fun facts about React</h1>
        <ul className="facts">
          <li>Was released in 2013</li>
          <li>was originally created by Jordan Walke</li>
          <li>Has well over 100k stars  on Github</li>
          <li>It's maintain by Facebook</li>
          <li> Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <img className="img" src={sideLogo} alt="" />
    </main>
  )
}

export default Main