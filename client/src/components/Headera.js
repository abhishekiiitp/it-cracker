import React from 'react';
import haedimg from '../images/about-us.jpg';
import Collapsible from 'react-collapsible';
const sty={
  padding:'2%',
  fontSize:'23px'
}

const Headera=(props)=>{

    return(
        <>
        <div class="col-md-6" style={sty}>
           <Collapsible trigger={props.heading}>
            <p style={{fontSize:'20px',fontColor:'red'}}>{props.contentText}</p>
            
           </Collapsible>
          </div>
        </>
    )
}
export default Headera; 