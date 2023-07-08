import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Home.module.css'
const Home = () => {
  return (
   <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" exact to="#">
          {" "}
          <div>
            <span style={{position: "relative",display: "inline-block",fontSize: "30px",fontWeight: "bold",color: "purple",}}>
              IT-<span style={{ color: "green" }}>C</span>racker
              <span style={{position: "absolute",bottom: "0px",left: "0px",right: "0px",height: "4px",backgroundColor: "#FF007D"}}></span>
            </span>
          </div>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      
   </>
  )
}

export default Home