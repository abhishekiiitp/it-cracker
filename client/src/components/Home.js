import React, {useState, useEffect} from 'react'
import Crousal from './Crousal';
import Footer from "./footer"
const Home = () => {
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
    return (
        <>
          <Crousal />
            <div className="home-page">
           
                <div className="home-div">
                    <p className="pt-5 home_head">WELCOME 🙏</p>
                    <h1>{userName}</h1>
                    <h2> { show ? 'The fastest way to prepare for a Tech interview ' :  'Crack Your Interview Today' }</h2>
                    <br/>
                    <h5 >Check our curated list of full-stack, data structures & software architecture interview questions and answers for developers</h5>
                </div>
            </div>

            
            <Footer/>

        </>
    )
}

export default Home
