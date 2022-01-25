import React from 'react';
import './Background.css';
const Background = (props)=>{
    return(
        <>
        <div className="maindiv">
            <div className="photo">
           <img className="imgg" src={props.imgsrc} alt=" saj" />

            </div>
            <div className="heading11">
              <h1>{props.heading}</h1>
            </div>
        </div>
        </>
    )
};

export default Background;