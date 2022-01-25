import React, {useReducer, createContext} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Course from './components/Course';
import Discussion from './components/Discussion';
import Login from './components/Login';
import Signup from './components/Signup';
import {Route,Switch} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Errorpage from './components/Errorpage';
import Logout from './components/Logout'
import { initialState, reducer } from "./reducer/UseReducer";
import Html from '../src/components/Explore/Html';
import Reacxt from '../src/components/Explore/Reacxt';
import Appdev from '../src/components/Explore/Appdev';
import Cpp from '../src/components/Explore/Cpp';
import Dsa from '../src/components/Explore/Dsa';
import Java from '../src/components/Explore/Java';
import Javascript from '../src/components/Explore/Javascript';
import Lr from '../src/components/Explore/Lr';
import Node from '../src/components/Explore/Node';
import Oop from '../src/components/Explore/Oop';
import Python from '../src/components/Explore/Python';
import Sql from '../src/components/Explore/Sql';
import Compilerdesign from '../src/components/Explore/Compilerdesign';
import Angular from '../src/components/Explore/Angular';
import Php from '../src/components/Explore/Php';
import Jquery from '../src/components/Explore/Jquery';
import Os from '../src/components/Explore/Os';
import Ai from '../src/components/Explore/Ai';
import Ml from '../src/components/Explore/Ml';
import Datascience from '../src/components/Explore/Datascience';
import Deeplearning from '../src/components/Explore/Deeplearning';
import Dbms from '../src/components/Explore/Dbms';
import Cn from '../src/components/Explore/Cn';
import Se from '../src/components/Explore/Se';
import Mongodb from '../src/components/Explore/Mongodb';
import Aws from '../src/components/Explore/Aws';
import Nlp from '../src/components/Explore/Nlp';
import Kotlin from '../src/components/Explore/Kotlin';
import Digitalimage from '../src/components/Explore/Digitalimage';
import Cloudcomputing from '../src/components/Explore/Cloudcomputing';
import Iot from '../src/components/Explore/Iot';
import Devops from '../src/components/Explore/Devops';
import Django from '../src/components/Explore/Django';
import Dataanalysis from '../src/components/Explore/Dataanalysis';
import Matlab from '../src/components/Explore/Matlab';
import Cybersecurity from '../src/components/Explore/Cybersecurity';
import QuizMain from '../src/components/QuizMain';
import Html_q from '../src/components/Quiz/html_q';
import React_q from '../src/components/Quiz/react_q';
import Appdev_q from '../src/components/Quiz/appdev_q';
import Cpp_q from '../src/components/Quiz/cpp_q';
import Dsa_q from '../src/components/Quiz/dsa_q';
import Java_q from '../src/components/Quiz/java_q';
import Javascript_q from '../src/components/Quiz/javascript_q';
import Lr_q from '../src/components/Quiz/lr_q';
import Node_q from '../src/components/Quiz/node_q';
import Oop_q from '../src/components/Quiz/oop_q';
import Python_q from '../src/components/Quiz/python_q';
import Sql_q from '../src/components/Quiz/sql_q';
import Compiler_q from '../src/components/Quiz/compiler_q';
import Angular_q from '../src/components/Quiz/angular_q';
import Php_q from '../src/components/Quiz/php_q';
import Jquery_q from '../src/components/Quiz/jquery_q';
import Operatingsystem_q from '../src/components/Quiz/operatingsystem_q';
import Artificial_q from '../src/components/Quiz/artificial_q';
import Ml_q from '../src/components/Quiz/ml_q';
import Datascience_q from '../src/components/Quiz/datascience_q';
import Deeplearning_q from '../src/components/Quiz/deeplearning_q';
import Dbms_q from '../src/components/Quiz/dbms_q';
import Cn_q from '../src/components/Quiz/cn_q';
import Software_q from '../src/components/Quiz/software_q';
import Mongodb_q from '../src/components/Quiz/mongodb_q';
import Aws_q from '../src/components/Quiz/aws_q';
import Nlp_q from '../src/components/Quiz/nlp_q';
import Kotlin_q from '../src/components/Quiz/kotlin_q';
import Digitalimage_q from '../src/components/Quiz/digitalimage_q';
import Cloudcomputing_q from '../src/components/Quiz/cloudcomputing_q';
import Iot_q from '../src/components/Quiz/iot_q';
import Devops_q from '../src/components/Quiz/devops_q';
import Django_q from '../src/components/Quiz/django_q';
import Dataanalysis_q from '../src/components/Quiz/dataanalysis_q';
import Matlab_q from '../src/components/Quiz/matlab_q';
import Cybersecurity_q from '../src/components/Quiz/cybersecurity_q';
// we create a contextAPI 
export const UserContext = createContext();

  

const Routing = () => {
  
  return (
    <>
       <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/discuss">
        <Discussion />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/course">
        <Course />
      </Route>
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
        
      <Route path="/logout">
        <Logout />
      </Route>

      <Route path="/html">
        <Html />
      </Route>
      
      <Route path="/reacxt">
        <Reacxt />
      </Route>

      <Route path="/appdev">
        <Appdev />
      </Route>
      
      <Route path="/cpp">
        <Cpp />
      </Route>
      
      <Route path="/Dsa">
        <Dsa />
      </Route>
      
      <Route path="/java">
        <Java />
      </Route>
      
      <Route path="/javascript">
        <Javascript />
      </Route>
      
      <Route path="/logical">
        <Lr />
      </Route>
      
      <Route path="/node">
        <Node />
      </Route>
      
      <Route path="/oop">
        <Oop />
      </Route>
      
      <Route path="/python">
        <Python />
      </Route>
      
      <Route path="/sql">
        <Sql />
      </Route>

      <Route path="/compilerdesign">
        <Compilerdesign />
      </Route>
      <Route path="/angular">
        <Angular />
      </Route>
      <Route path="/php">
        <Php />
      </Route>
      <Route path="/jquery">
        <Jquery />
      </Route>
      <Route path="/os">
        <Os />
      </Route>
      <Route path="/ai">
        <Ai />
      </Route>
      <Route path="/ml">
        <Ml />
      </Route>
      <Route path="/datascience">
        <Datascience />
      </Route>
      <Route path="/deeplearning">
        <Deeplearning />
      </Route>
      <Route path="/dbms">
        <Dbms />
      </Route>
      <Route path="/cn">
        <Cn />
      </Route>
      <Route path="/se">
        <Se />
      </Route>
      <Route path="/mongodb">
        <Mongodb />
      </Route>
      <Route path="/aws">
        <Aws />
      </Route>
      <Route path="/nlp">
        <Nlp />
      </Route>
       
      <Route path="/kotlin">
        <Kotlin />
      </Route>
      <Route path="/digitalimage">
        <Digitalimage />
      </Route>
      <Route path="/cloudcomputing">
        <Cloudcomputing />
      </Route>
      <Route path="/iot">
        <Iot />
      </Route>
      <Route path="/devops">
        <Devops />
      </Route>
      <Route path="/django">
        <Django />
      </Route>
      <Route path="/dataanalysis">
        <Dataanalysis />
      </Route>
      <Route path="/matlab">
        <Matlab />
      </Route>
      <Route path="/cybersecurity">
        <Cybersecurity />
      </Route>

      <Route path="/quizmain">
        <QuizMain />
      </Route>
      
      <Route path="/html_q">
        <Html_q />
      </Route>

      <Route path="/react_q">
        <React_q />
      </Route>
       
      <Route path="/appdev_q">
        <Appdev_q />
      </Route>

      <Route path="/cpp_q">
        <Cpp_q />
      </Route>
      <Route path="/dsa_q">
        <Dsa_q />
      </Route>
      <Route path="/react_q">
        <React_q />
      </Route>
      <Route path="/java_q">
        <Java_q />
      </Route>
      <Route path="/javascript_q">
        <Javascript_q />
      </Route>
      <Route path="/lr_q">
        <Lr_q />
      </Route>
      <Route path="/node_q">
        <Node_q />
      </Route>
      <Route path="/oop_q">
        <Oop_q />
      </Route>
      <Route path="/python_q">
        <Python_q />
      </Route>
      <Route path="/sql_q">
        <Sql_q />
      </Route>
      <Route path="/compiler_q">
        <Compiler_q />
      </Route>
      <Route path="/angular_q">
        <Angular_q />
      </Route>
      <Route path="/php_q">
        <Php_q />
      </Route>
      <Route path="/jquery_q">
        <Jquery_q />
      </Route>
      <Route path="/operatingsystem_q">
        <Operatingsystem_q />
      </Route>
      <Route path="/artificial_q">
        <Artificial_q />
      </Route>
      <Route path="/ml_q">
        <Ml_q />
      </Route>
      <Route path="/datascience_q">
        <Datascience_q />
      </Route>
      <Route path="/deeplearning_q">
        <Deeplearning_q />
      </Route>
      <Route path="/dbms_q">
        <Dbms_q />
      </Route>
      <Route path="/cn_q">
        <Cn_q />
      </Route>
      <Route path="/software_q">
        <Software_q />
      </Route>
      <Route path="/mongodb_q">
        <Mongodb_q />
      </Route>
      <Route path="/aws_q">
        <Aws_q />
      </Route>
      <Route path="/nlp_q">
        <Nlp_q />
      </Route>
      <Route path="/kotlin_q">
        <Kotlin_q />
      </Route>
      <Route path="/digitalimage_q">
        <Digitalimage_q />
      </Route>
      <Route path="/cloudcomputing_q">
        <Cloudcomputing_q />
      </Route>
      <Route path="/iot_q">
        <Iot_q />
      </Route>
      <Route path="/devops_q">
        <Devops_q />
      </Route>
      <Route path="/django_q">
        <Django_q />
      </Route>
      <Route path="/dataanalysis_q">
        <Dataanalysis_q />
      </Route>
      <Route path="/matlab_q">
        <Matlab_q />
      </Route>
      <Route path="/cybersecurity_q">
        <Cybersecurity_q />
      </Route>
      <Route>
        <Errorpage />
      </Route>
    </Switch>
    </>
  )
}

const App = () => {

  //* we use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <UserContext.Provider value={{state, dispatch}}>
        
        <Navbar />
        <Routing />

      </UserContext.Provider>
  )
}

export default App;