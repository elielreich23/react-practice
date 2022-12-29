import React from 'react'
import "../index.css"
import reactLogo from "../images/reactjs-icon.png"

function Header() {
    return (
      <nav>
        <img src={reactLogo} width="60px "alt="" className="nav--icon"/>
        <h3 className="nav--logo_txt">ReactFacts</h3>
        <h4 className="nav--title">React course - Project 1</h4>
      </nav>
    )
}

export default Header