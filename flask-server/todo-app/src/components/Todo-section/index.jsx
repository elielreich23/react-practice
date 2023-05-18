import React, {useState} from 'react'
import {Form} from "../elements/Form.jsx"
import './style.scss'


const Todo = () => {
const [isToggled, setIsToggled] = useState(false) 

  return (
    <>
      <section className="todo-title">
        {/* the number in the bracket should be gotten from the number of task in the section */}
        {/* create  logic for card creation*/}
        <h2>To do(4)</h2>
        <div className="circle">
          <span>+</span>
          <h1>Add task</h1>
        </div>
      </section>
      <div className="todo">
        <div className="card" onClick={() => setIsToggled (!isToggled)}>
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
          {isToggled && <Form/>}
        </div>
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
      </div>
    </>
  )
}

export default Todo