import React from 'react';

const Abouthead=()=>{
    return(
        <>
        <div className="about-image">
      <div className="about-text">
        <h1 className="about_h1">About Us</h1>
        <br/>
        <p className="about_p">We are Group of creative Developers here to help you...</p>
      </div>
  </div>
  <br/>
  <br/>
  <div className="container">
    <div className="card" style={{width: "40rem"}}>
      <div className="card-body">
        <h1>About Us</h1>
    <mat-content>
      <p className="mat_p">“Our mission is to help job seekers
        <span className="mat_span"><b>grow careers</b></span>.We love helping people 
        stand out in their job search and get 
        hired faster.”</p>
    </mat-content>
      </div>
    </div>
  </div>
        </>
    )
};

export default Abouthead;