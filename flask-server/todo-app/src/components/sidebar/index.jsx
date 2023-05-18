// import { useState } from 'react'
import './style.scss';
import { Header } from "../Header/index";

const Sidebar = () => {
    // const [btnstate, setBtnstate] = useState(false)
    // function handleClick() {
    //     setBtnstate = (btnstate >= !btnstate)
    // }
    // let toggleClass = btnstate ? 'active' : null;

    return (
        <>
            {/* correct display of sidebar on larger screen */}
            {/* <FontAwesomeIcon icon={solid('user-secret=*')}/> */}
            <div className="container">
                
                {/* <div className="dots">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div> */}
                {/* logo */}
                <div className="img"></div>
                <div className="icons-container">
                    {/*  projects this toggle on click of icon */}
                    {/* <div className={`icon1${toggleClass}`}
                    onClick={handleClick}
                    > */}
                    <div className="icon1">
                        <div className="outer-circle"></div>
                    </div>
                    {/* profile */}
                    <div className="icon2"></div>
                    {/* calendar */}
                    <div className="icon3"></div>
                    {/* statistics */}
                    <div className="icon4"></div>
                    {/* upload */}
                    <div className="icon5"></div>
                    {/* still deciding on what to put here */}
                    <div className="icon6"></div>
                    {/* Setting */}
                    <div className="icon7"></div>
                </div>
                {/* logout */}
                <div className="icon8"></div>
            </div>
            <div className="activeSidebar" id="Sidebar">
                {/* create rules to display the project sidebar */}
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
                <div className="dark-mode">
                    <div className="light">
                        <span className="sun">

                        </span>
                        <h4>Light</h4>
                    </div>
                    <div className="dark">
                        <span className="moon">

                        </span>
                        <h4 className="dark-txt ">Dark</h4>
                    </div>
                </div>
                <Header />
            </div>

        </>
    )
}

export default Sidebar