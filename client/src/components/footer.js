import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
const Footer=()=>{
    return(
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <h2>Resources</h2>
                                    <ul>
                                        <li>
                                            <a href="#"> About </a>
                                        </li>
                                        <li>
                                            <a href="#"> About </a>
                                        </li>
                                        <li>
                                            <a href="#"> About </a>
                                        </li>
                                        <li>
                                            <a href="#"> About </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h2>Support</h2>
                                    <ul>
                                        <li>
                                            <a href="#"> About </a>
                                        </li>
                                        <li>
                                            <a href="#"> About </a>
                                        </li>
                                        <li>
                                            <a href="#"> About </a>
                                        </li>
                                        <li>
                                            <a href="#"> About </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h2>Services</h2>
                                    <ul>
                                        <li>
                                            <a href="#"> About </a>
                                        </li>
                                        <li>
                                            <a href="#"> About </a>
                                        </li>
                                        <li>
                                            <a href="#"> About </a>
                                        </li>
                                        <li>
                                            <a href="#"> About </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h2>Follow us</h2>
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <a href="https://www.facebook.com/profile.php?id=100013427592201" target="_blank">
                                                
                                                <FacebookIcon/>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="https://www.instagram.com/_abhishek___.18/" target="_blank">
                                               
                                                <InstagramIcon/>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="https://www.linkedin.com/in/abhishek-kumar-051853206" target="_blank">
                                                
                                                <LinkedInIcon/>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="https://github.com/abhishekiiitp" target="_abhishek">
                                               
                                                <GitHubIcon/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="mt-5">
                                <p className="main-hero-para text-center w-100">Made with ❤️ by Abhishek kumar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;