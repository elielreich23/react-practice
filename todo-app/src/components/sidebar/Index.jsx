import React from 'react'
import './style.scss'


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
            <div className="active"></div>
        </>
    )
}

export default Index