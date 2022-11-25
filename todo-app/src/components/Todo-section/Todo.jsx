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
            <div className="progress-title">
              <span>
                <img src="" alt="" />
              </span>
              <h4>Progress</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo