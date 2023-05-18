import React from 'react'
import './style.scss'
import { AiOutlineCalendar } from "react-icons/ai"
import { IoSearch } from "react-icons/io5"
import { FaRegBell } from "react-icons/fa"
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <div className="text">Welcome back, Vincent <span> 👋</span>
            {/* create a function to collect user name upon signup */}
          
          </div>
          <div className="header-icons">
            <IoSearch />
            <FaRegBell />
            <AiOutlineCalendar />
            <span>
              {/* this will be change to a dynamic date picked from  */}
              19 May 2022
            </span>
          </div>
          <div className="profile">
            <Link to="/profile" className="toggleColor no-underline hover-no-underline font-bold text-2xl lg:text-4xl">
              <img src={require("./Image.png")} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="subheader">
        <div className="right">
          <img src="./1.png" alt="" />
          <div className="board">
            <div className="rec">
            <p className="one"></p>
            <p className="two" ></p>
            </div>
            <img src="" alt="" />
            <h4>Board view</h4>
          </div>

          <div className="add-view">
            {/* adjust plus sign in circle and create logic for adding new wiew */}
            <div className="circle">
              <span>+</span>
            </div>
            <h3>Add view</h3>
          </div>
        </div>
        <div className="left">
          <h5 className="bold" >Filter</h5>
          <h5>
            <span>Sort</span>
          </h5>
          <div className="dots-container"></div>
          <p>...</p>
          <button>
            <span>New Template</span>
          </button>
        </div>
        <div className="line"></div>
      </div>
    </>
  )
}
