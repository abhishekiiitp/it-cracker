import React, {useState, useEffect} from 'react'
import Crousal from './Crousal';
import Footer from "./footer"
import im1 from "../images/re1.jpg";
import im2 from "../images/re2.jpg";
import im3 from "../images/re3.webp";
import im4 from "../images/re4.jpg";

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
            {/* here */}
            <div class="container marketing">

        {/* <!-- Three columns of text below the carousel --> */}
        <h2 class="" color="blue">You can be one of them !!</h2>
        <br/>
        <br/>
        <div class="col-lg">
            <img class="rounded-circle" src={im1} alt="Generic placeholder image" width="100" float="left" height="100" justifyContent="centre"/>
    
            <p float="right">IT-Cracker helped me a lot during my prepration for my placement. It provides a very good important questions on every topic that is i found useful and also the quiz feature is awesome .We can test our skills by taking their quiz where they puted good questions.</p>
            
          </div>
          <br/>
        <br/>
        <div class="col-lg">
            <img class="rounded-circle" src={im2} alt="Generic placeholder image" width="100" float="right" height="100" justifyContent="centre"/>
    
            <p float="right">IT-Cracker helped me a lot during my prepration for my placement. It provides a very good important questions on every topic that is i found useful and also the quiz feature is awesome .We can test our skills by taking their quiz where they puted good questions.</p>
            
          </div>
          <br/>
        <br/>
        <div class="col-lg">
            <img class="rounded-circle" src={im3} alt="Generic placeholder image" width="100" float="left" height="100" justifyContent="centre"/>
    
            <p float="right">IT-Cracker helped me a lot during my prepration for my placement. It provides a very good important questions on every topic that is i found useful and also the quiz feature is awesome .We can test our skills by taking their quiz where they puted good questions.</p>
            
          </div>
          <div class="col-lg">
            <img class="rounded-circle" src={im4} alt="Generic placeholder image" width="100" float="left" height="100" justifyContent="centre"/>
    
            <p float="right">IT-Cracker helped me a lot during my prepration for my placement. It provides a very good important questions on every topic that is i found useful and also the quiz feature is awesome .We can test our skills by taking their quiz where they puted good questions.</p>
            
          </div>

        </div>
            {/*end  */}
            
            <Footer/>

        </>
    )
}

export default Home
