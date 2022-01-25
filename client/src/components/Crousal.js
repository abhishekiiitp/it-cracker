import { Link, NavLink } from 'react-router-dom';

import React, {useState, useEffect} from 'react'
// import img1 from '../images/bg.svg'
const Crousal=(props)=>{
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);
            setShow(true);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);
    return(
        <>
        <div className="crousal">
         <div id="by">
        <div id="heading">Crack Your Interview Today with IT-Cracker
        </div>
        
    </div>
    </div>
        </>
    )
}

export default Crousal;