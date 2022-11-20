import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <div className="text">Welcome back, Vincent <span> 👋</span>
            {/* create a function to collect user name upon signup */}
          </div>
          <div className="header-icons">
            <div className="header icn1">
            <FontAwesomeIcon icon="fa-light fa-magnifying-glass"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header