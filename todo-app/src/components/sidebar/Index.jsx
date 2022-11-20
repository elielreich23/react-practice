import React from 'react'
import './style.scss'
import Header from '../header/Index'

const Index = () => {
    return (
        <>

            {/* <FontAwesomeIcon icon={solid('user-secret=*')}/> */}
            <div className="container">
                <div className="dots">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <div className="img"></div>
                <div className="icons-container">
                    <div className="icon1">
                        <div className="outer-circle"></div>
                    </div>
                    <div className="icon2"></div>
                    <div className="icon3"></div>
                    <div className="icon4"></div>
                    <div className="icon5"></div>
                    <div className="icon6"></div>
                    <div className="icon7"></div>
                </div>
                <div className="icon8"></div>
            </div>
            <div className="active">
                <div className="project">
                    <h1>Projects</h1>
                    <div className="new">
                    </div>
                    <span>+</span>
                </div>
                <div className="menus">
                    {/* create dropdown and sub menus */}
                    <div className="team">
                        <h3>Team </h3>
                        <p>&#62;</p>
                    </div>
                    <div className="projects">
                        <h3>Projects</h3>
                        <p>&#62;</p>
                    </div>
                    <div className="task">
                        <h3>Tasks</h3>
                        <p>&#62;</p>
                    </div>
                    <div className="reminders">
                        <h3>Reminders</h3>
                        <p>&#62;</p>
                    </div>
                    <div className="message">
                        <h3>Messengers</h3>
                        <p>&#62;</p>
                    </div>
                </div>
            <Header />
            </div>
        </>
    )
}

export default Index