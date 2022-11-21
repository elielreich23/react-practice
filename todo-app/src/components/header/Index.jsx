import React from 'react'
import './style.scss'
import {AiOutlineCalendar} from "react-icons/ai"
import {IoSearch} from "react-icons/io5"
import {FaRegBell} from "react-icons/fa"


const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <div className="text">Welcome back, Vincent <span> 👋</span>
            {/* create a function to collect user name upon signup */}
          </div>
          <div className="header-icons">
            <IoSearch/>
            <FaRegBell/>
            <AiOutlineCalendar/>
            <span>
              {/* this will be change to a dynamic date picked from  */}
              19 May 2022
            </span>
          </div>
          <div className="profile">
            <img src="../../assets/Image.png" alt="" />
          </div>
        </div>
      </div>
      <div className="subheader">
        
      </div>
    </>
  )
}

export default Header