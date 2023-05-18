import React from 'react'
import './style.scss'

const Done = () => {
    return (
        <>
            <section className="done-title">
                {/* the number in nthe bracket should be gotten from the number of task in the section */}
                <h3>Done(3)</h3>
            </section>

            <div className="done">
                <div className="card1">
                    <div className="card-header1">
                        <h3>Add product to the market</h3>
                        <h4>Ui8 marketplace</h4>
                        <div className="more">
                            <p>...</p>
                        </div>
                    </div>
                    <div className="card-progress">
                        <img src={require("../../assets/ham.png")} alt="" />
                        <div className="progress-title">
                            <h4>Progress</h4>
                            {/* changes bass on completion of task */}
                            <h6>10/10</h6>
                        </div>
                        <div className="box">
                            <div className="done-fill"></div>
                        </div>
                    </div>
                    <div className="infos">
                        <div className="date">
                            {/* changes base on edited/created date */}
                            <h3>25 Aug 2022</h3>
                        </div>
                        {/* should change from comment to and files to icon of contributor if card has contributors */}
                        <div className="comments">
                        {/* changes based on comments added */}
                            <span className="comm-stats">7</span>
                        </div>
                        <div className="files">
                            <span className="file-img"></span>
                        {/* changes based on files added */}
                            <div className="files-stats">2</div>
                        </div>
                        {/* <div className="contributors">
                            
                        </div> */}
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Done