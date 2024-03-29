import React,{ useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
import {UserContext} from "../App";
const Navbar=()=>{
  const { state, dispatch } = useContext(UserContext);
  const NavbarMenu=()=>{

    if(state)
    {
      return(
        <>
        <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/Contact">Contact us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/course">Courses</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/discuss">Discussion</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/logout">Logout</NavLink>
      </li>
      </>
      )
    }
    else{
      return(
        <>
        <li className="nav-item ">
        <NavLink className="nav-link" exact to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/Contact">Contact us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/course">Courses</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/discuss">Discussion</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/signup">Registration</NavLink>
      </li>
      </>
      )
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" exact to="/user/home">
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <NavbarMenu />
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;