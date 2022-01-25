import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Card=(props)=>{

    
    return(
        <>
        <div class="col">
          <div class="card shadow-sm">
            
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={props.imagec} alt=""/>
            <div class="card-body">
              <p class="card-text"><strong class="text-dark">{props.heading}</strong><strong> {props.name} </strong></p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <Link to={props.link}> 
                <button type="button" class="btn btn-sx btn-info btn-outline-secondary mr-4 text-dark">Explore</button>
                </Link>
                <Link to={props.link1}> 
                <button type="button" class="btn btn-info btn-sx btn-outline-secondary mr-4 text-dark">Quiz</button>
                </Link>
                  {/* <button type="button" class="btn btn-sm btn-info btn-outline-secondary mr-4 text-dark"> <a className="exp_link" href={}> Explore</a>  </button> */}
                  {/* <button type="button" class="btn btn-info btn-sx btn-outline-secondary mr-4 text-dark"><NavLink className="exp_link" to="/"> Quiz</NavLink></button> */}
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Card;