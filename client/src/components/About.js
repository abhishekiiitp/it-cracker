import React, {useEffect, useState}  from 'react'
import abhishekpic from "../images/abhishek.jpeg";
import Abouthead from './Abouthead';
import { useHistory } from "react-router-dom";
const About = () => {
    const history = useHistory();
    const [userData, setUserData] = useState({});

    const callcoursePage = async () => {
        try {
            const res = await fetch('/course', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        callcoursePage();
    }, []);

    
    return (
        <>
            <Abouthead />
            <div className="container emp-profile">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                  <img src={abhishekpic} alt="thapa" />
                            </div>
                          
                        </div>

                         <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Abhishek kumar</h5>
                                <h6>Sophomore</h6>
                                <h6>Indian Institute Of Information Technology, Pune</h6>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                   <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    
                                </ul>
                           </div>
                        </div>
                    </div>



                    <div className="row">
                        {/* left side url  */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p> WORK LINK</p>
                                
                                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Instagram</a> <br />
                                
                                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Github</a> <br />
                                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Web Developer</a> <br />
                                
                                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">LinkedIn</a> <br />
                                
                                
                            </div>
                        </div> 

                        {/* right side data toogle  */}

                     <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                               <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                            <p>111915003</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6 ">
                                                <p>Abhishek</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>aibiikumar358@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>7007159289</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Comptetive programmmer ||  MERN Web developer </p>
                                            </div>
                                        </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>

                </form>
           </div>
        </>
    )
}

export default About
