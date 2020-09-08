
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import star1 from './images/star1.png'
import star2 from './images/star2.png'
import star3 from './images/star3.png'
import styles from './index.css';

function App( ) {
  return (
    <div className="nav">
      <div className="navElement">
        <h1>Art</h1>
        <img className="artButton"src={star1}/>
      </div>
      <div className="navElement">
        <h1>Business</h1>
        <img className="businessButton"src={star2}/>
      </div>
      <div className="navElement">
        <h1>Computer</h1>
        <img className="computerButton"src={star3}/>
      </div>
    </div>
  )
}

ReactDOM.render( <App />, document.getElementById("root"))
