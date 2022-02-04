import React, {useEffect, useState}  from 'react'
import { useHistory } from "react-router-dom";
import Card from './Card';
import Footer from "./footer"
import html_q from '../components/Quiz/html_q'
import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import c3 from '../images/c3.jpg'
import c4 from '../images/c4.jpg'
import c5 from '../images/c5.jpg'
import c6 from '../images/c6.jpg'
import c7 from '../images/c7.jpg'
import c8 from '../images/c8.jpg'
import c9 from '../images/c9.jpg'
import c10 from '../images/c10.jpg'
import c11 from '../images/c11.jpg'
import c12 from '../images/c12.jpg'
import c13 from '../images/c13.jpg'
import c14 from '../images/c14.jpg'
import c15 from '../images/c15.jpg'
import c16 from '../images/c16.jpg'
import c17 from '../images/c17.jpg'
import c18 from '../images/c18.jpg'
import c19 from '../images/c19.jpg'
import c20 from '../images/c20.jpg'
import c21 from '../images/c21.jpg'
import c22 from '../images/c22.jpg'
import c23 from '../images/c23.jpg'
import c24 from '../images/c24.jpg'
import c25 from '../images/c25.jpg'
import c26 from '../images/c26.jpg'
import c27 from '../images/c27.jpg'
import c28 from '../images/c28.jpg'
import c29 from '../images/c29.jpg'
import c30 from '../images/c30.jpg'
import c31 from '../images/c31.jpg'
import c32 from '../images/c32.jpg'
import c33 from '../images/c33.jpg'
import c34 from '../images/c34.jpg'
import c35 from '../images/c35.jpg'
import c36 from '../images/c36.jpg'
const Course=()=>{
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

  return(
    <>
      <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Card imagec={c1} link1="/html_q" link="/html" heading="HTML & CSS:" name="HTML is the language in which most websites are written. This is used to create pages and make them functional. and  CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed." />
        <Card link1="/javascript_q" link="/javascript" imagec={c2} heading="JAVASCRIPT:" name="JAVASCRIPT is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform." />
        <Card link1="/react_q" link="/reacxt" imagec={c3} heading="REACT:" name="ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. It was initially developed and maintained by Facebook ."/>
        <Card link1="/node_q" link="/node" imagec={c4} heading="NODE.js:" name="Node.js is a very powerful JavaScript-based platform built on Google Chrome's JavaScript V8 Engine. It is used to develop I/O intensive web applications like video streaming sites, single-page applications, and other web applications. "/>
        <Card link1="/appdev_q" link="/appdev" imagec={c5} heading="APP DEVELOPMENT:" name="App Development refers to the creation of computer applications for use on mobile devices  such as tablets, smartphones and smart watches.  "/>
        <Card link1="/python_q" link="/python" imagec={c6} heading="PYTHON:" name="Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology"/>
        <Card link1="/cpp_q" link="/cpp" imagec={c7} heading="CPP:" name="About C++ Programming. Multi-paradigm Language - C++ supports at least seven different styles of programming."/>
        <Card link1="/oop_q" link="/oop" imagec={c8} heading="OOPS:" name="OOP is a programming paradigm based on the concept of OBJECTS, which may contain data, in the form of fields,"/>
        <Card link1="/java_q" link="/java" imagec={c9} heading="JAVA:" name="Java is a programming language and a platform. "/>
        <Card link1="/lr_q" link="/logical" imagec={c10} heading="LOGICAL REASONING:" name="Logical reasoning is the ability to recognize and determine the meaning of patterns using a variety of information. It is the primary tool used in solving problems of every kind, including maths problems."/>
        <Card link1="/dsa_q" link="/dsa" imagec={c11} heading="DATA STRUCTURE AND ALGO:" name="A data structure is a particular way of organizing data in a computer so that it can be used effectively. For example, we can store a list of items having the same data-type using the array data structure."/>
        <Card link1="/sql_q" link="/sql" imagec={c12} heading="SQL:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/compiler_q" link="/compilerdesign" imagec={c13} heading="COMPILER DESIGN:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/angular_q" link="/angular" imagec={c14} heading="ANGULAR:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/php_q" link="/php" imagec={c15} heading="PHP:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/jquery_q" link="/jquery" imagec={c16} heading="JQUERY:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/operatingsystem_q" link="/os" imagec={c17} heading="OPERATING SYSTEM:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/artificial_q" link="/ai" imagec={c18} heading="ARTIFICIAL INTELLIGENCE:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/ml_q" link="/ml" imagec={c19} heading="MACHINE LEARNING:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/datascience_q" link="/datascience" imagec={c20} heading="DATA SCIENCE:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/deeplearning_q" link="/deeplearning" imagec={c21} heading="DEEP LEARNING:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/dbms_q" link="/dbms" imagec={c22} heading="DBMS:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/cn_q" link="/cn" imagec={c23} heading="COMPUTER NETWORK:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/software_q" link="/se" imagec={c24} heading="SOFTWARE ENGINEERING:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/mongodb_q" link="/mongodb" imagec={c25} heading="MONGODB:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/aws_q" link="/aws" imagec={c26} heading="AWS:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/nlp_q" link="/nlp" imagec={c27} heading="NLP:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/kotlin_q" link="/kotlin" imagec={c28} heading="KOTLIN:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/digitalimage_q" link="/digitalimage" imagec={c29} heading="DIGITAL IMAGE PROCESSING:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/cloudcomputing_q" link="/cloudcomputing" imagec={c30} heading="CLOUD COMPUTING:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/iot_q" link="/iot" imagec={c31} heading="IOT:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/devops_q" link="/devops" imagec={c32} heading="DEVOPS:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/django_q" link="/django" imagec={c33} heading="DJANGO:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/dataanalysis_q" link="/dataanalysis" imagec={c34} heading="DATA ANALYSIS:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/matlab_q" link="/matlab" imagec={c35} heading="MAT LAB:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
        <Card link1="/cybersecurity_q" link="/cybersecurity" imagec={c36} heading="CYBER SECURITY:" name="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."/>
      </div>

      <html_q />
    </div>
  </div>

  <Footer/>
    </>
  )
}
export default Course;