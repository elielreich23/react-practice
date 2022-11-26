import React from 'react'
import './style.scss'

const Todo = () => {
  return (
    <>
      <div className="todo">
        <div className="title">
          {/* to do title and after add task button */}
        </div>
        <div className="card">
          <div className="card-header">
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
      </div>
    </>
  )
}

export default Todo