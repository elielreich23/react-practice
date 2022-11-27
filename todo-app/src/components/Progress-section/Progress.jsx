import React from 'react'
import './style.scss'

const Progress = () => {
    return (
        <>
            <section className="progress-title">
                {/* the number in nthe bracket should be gotten from the number of task in the section */}
                <h3>In progress(5)</h3>
            </section>

            <div className="progress">
                <div className="card1">
                    <div className="card-header1">
                        <h3>Design system update</h3>
                        <h4>Oreo website project</h4>
                        <div className="more">
                            <p>...</p>
                        </div>
                    </div>
                    <div className="card-progress">
                        <img src="../../assets/ham.png" alt="" />
                        <div className="progress-title">
                            <h4>Progress</h4>
                            <h6>3/10</h6>
                        </div>
                        <div className="box">
                            <div className="fill"></div>
                        </div>
                    </div>
                    <div className="infos">
                        <div className="date">
                            <h3>25 Aug 2022</h3>
                        </div>
                        {/* should change from comment to and files to icon of contributor if card has contributors */}
                        {/* <div className="comments">
                            <span className="comm-stats">7</span>
                        </div>
                        <div className="files">
                            <span className="file-img"></span>
                            <div className="files-stats">2</div>
                        </div> */}
                        <div className="contributors">
                            <div className="item"></div>
                            <div className="item2"></div>
                            <div className="stats">
                                <span>+2</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* <div className="progress">
                
                <div className="card1">
                    <div className="card-header1">
                        <h3>Design new ui presentation</h3>
                        <h4>Dribbble marketing</h4>
                        <div className="more">
                            <p>...</p>
                        </div>
                    </div>
                    <div className="card-progress">
                        <img src="../../assets/ham.png" alt="" />
                        <div className="progress-title">
                            <h4>Progress</h4>
                            <h6>7/10</h6>
                        </div>
                        <div className="box">
                            <div className="fill"></div>
                        </div>
                    </div>
                    <div className="infos">
                        <div className="date">
                            <h3>25 Aug 2022</h3>
                        </div>
                        <div className="comments">
                            <span className="comm-stats">7</span>
                        </div>
                        <div className="files">
                            <span className="file-img"></span>
                            <div className="files-stats">2</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Progress