import React from 'react'
import styles from './Dashboard.module.css';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
const Dashboard = () => {
  const history=useHistory();

  const userClick=()=>{
    history.push('/user/home')
  }

  const adminClick=()=>{
    history.push('/admin/home')
  }
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
    <div className={styles.dashboard_cont}>
        <div className={styles.left_cont}>
           <span className={styles.welcome_text}>Welcome to IT-Cracker</span> 
           <span className={styles.crack}>Crack Your Interview Today</span>
           <span className={styles.below_text}>The fastest way to prepare for a Tech interview</span>
        </div>
        <div className={styles.right_cont}>
            <div onClick={adminClick} className={styles.admin_box}>
              <PersonIcon style={{fontSize:"103px",marginLeft:"35%",marginTop:"5%"}}/>
              <span style={{margin:"auto",fontSize:"20px",fontWeight:"bold"}}>Are you a Admin ?</span>
            </div>
            <div onClick={userClick} className={styles.user_box}>
              <PersonIcon style={{fontSize:"103px",marginLeft:"35%",marginTop:"5%"}}/>
              <span style={{margin:"auto",fontSize:"20px",fontWeight:"bold"}}>Are you a User ?</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard