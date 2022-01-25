import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Reacxt=()=>{

    const[addItem,setAddItem]=useState([]);
    const addNote=(comment)=>{
        //alert('i m clicked');
        setAddItem((prevData)=>{
            return [...prevData,comment];
        })
        console.log(comment);
    }

    const onDelete=(id)=>{
        setAddItem((oldData)=>oldData.filter((currdata,indx)=>{
            return indx!==id;
        }))
    }

    
    return(


        <>

<div className="top_img">
         <div id="by">
        <div id="heading">Interview Question for ReactJs
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}


        <Question 
        question="What is React?" 
        answer=" React is a front-end JavaScript library that mainly follows the component-based approach for building a user interface (UI) components for a single page application. It is also used for handling the view layer in both mobile and web apps. Moreover, react plays a crucial role in developing interactive mobile and web UIs. It was created and developed by Jordan Walke; it was deployed first on the Facebook newsfeed in 2011."

        />

       <Question 
        question="Why React is used?" 
        answer="The following reasons make one to use React for building User Interfaces (UI), and they are:"  

         answer1= "->Easy to learn nature"
         answer2= "->Simplicity"
         answer3="-> High scalability"
         answer4="->Increase performance"
         flag="1"

        />
        
       <Question 
        question="Does React use HTML?" 
        answer="No, It uses JSX, which is similar to HTML."

        />
        
       <Question 
        question="What is JSX?" 
        answer="It is basically a novel dialect of the popular JavaScript that simply integrates the HTML templates into the code of JavaScript. The browser is not capable to read the code simply and thus there is a need for this integration. Generally, WebPack or Babel tools are considered for this task. It has become a very popular approach in the present scenario among the developers."
        />
        
       <Question 
        question="What are the life Cycles of ReactJS?" 
        answer = "1. Initialization"
	    answer1 = "2. State/Property Updates"
      	answer2 = "3. Destruction"
	    flag="1"
        />
        
       <Question 
        question="How is React JS different from Angular JS?" 
        answer="The first difference between both of them is their code dependency. ReactJS depends less on the code whereas AngularJS needs a lot of coding to be done. The packaging on React is quite strong as compared to the AngularJS. Another difference is React is equipped with Virtual Dom while the Angular has a Regular DOM. ReactJS is all about the components whereas AngularJS focus mainly on the Models, View as well as on Controllers. AngularJS was developed by Google while the ReactJS is the outcome of facebook. These are some of the common differences between the two."

        />
        
       <Question 
        question="What is Flux Concept In React?" 
        answer="Facebook widely uses flux architecture concept for developing client-side web applications. It is not a framework or a library. It is simply a new kind of architecture that complements React and the concept of Unidirectional Data Flow."

        />
        
       <Question 
        question=" Define the term Redux in React" 
        answer="Redux is a library used for front end development. It is a state container for JavaScript applications which should be used for the applications state management. You can test and run an application developed with Redux in different environments."

        />
        
       <Question 
        question=" What is the ‘Store’ feature in Redux?" 
        answer="Redux has a feature called ‘Store’ which allows you to save the application’s entire State at one place. Therefore all it’s component’s State are stored in the Store so that you will get regular updates directly from the Store. The single state tree helps you to keep track of changes over time and debug or inspect the application."

        />
        
       <Question 
        question="What is an action in Redux?" 
        answer="It is a function which returns an action object. The action-type and the action data are always stored in the action object. Actions can send data between the Store and the software application. All information retrieved by the Store is produced by the actions."

        />
        
       <Question 
        question="What is Use of Redux thunk?" 
        answer="Redux thunk acts as middleware which allows an individual to write action creators that return functions instead of actions. This is also used as a delay function in order to delay dispatch of an action if a certain condition is met. The two store methods getState() and dispatch() are provided as parameters to the inner function."

        />
        
       <Question 
        question="What do you know about Flux?" 
        answer="Basically, Flux is a basic illustration that is helpful in maintaining the unidirectional data stream.  It is meant to control construed data unique fragments to make them interface with that data without creating issues. Flux configuration is insipid; it's not specific to React applications, nor is it required to collect a React application.  Flux is basically a straightforward idea, however in you have to exhibit a profound comprehension of its usage"

        />
        
       <Question 
        question="How the parent and child components exchange information?" 
        answer="This task is generally performed with the help of functions. Actually, there are several functions which are provided to both parent and child components. They simply make use of them through props. Their communication should be accurate and reliable. The need of same can be there anytime and therefore functions are considered for this task. They always make sure that information can be exchanged easily and in an efficient manner among the parent and child components."

        />
        
       <Question 
        question=" Explain the term stateless components" 
        answer="Stateless components are pure functions that render DOM-based solely on the properties provided to them."

        />
        
       <Question 
        question="Explain React Router" 
        answer="React Router is a routing library which allows you to add new screen flows to your application, and it also keeps URL in sync with what’s being shown on the page."

        />
        
       <Question 
        question="What is dispatcher?" 
        answer="A dispatcher is a central hub of app where you will receive actions and broadcast payload to registered callbacks."

        />
        
       <Question 
        question="What is meant by callback function? What is its purpose?" 
        answer="A callback function should be called when setState has finished, and the component is re-rendered."
        answer1="As the setState is asynchronous, which is why it takes in a second callback function."
         flag="1"
        />
        
       <Question 
        question=" What are Props in react js?" 
        answer="Props mean properties, which is a way of passing data from parent to child. We can say that props are just a  communication channel between components. It is always moving from parent to child component."

        />
        
       <Question 
        question="What is a State in React and How is it used?" 
        answer="In React, State is an object that represents how the component renders and behaves. States are the sources of data and allow you to create dynamic and interactive components. They are accessed using this.state(). For changing a value in the state object, call it using this.setState() method."

        />
        
       <Question 
        question="What is class component ?" 
        answer="Syntax->This component requests you to extend from React. Component to create render function that in turn returns a react element"
        
        answer1="Life Cycle Hooks ->Lifecycle hooks are created from the React Component. This class component makes lifecycle hooks available in it."
        answer2="Readability->They are very difficult to test and read"
        flag="1"
        />
        
       <Question 
        question="What is functional component ?" 
        answer="Syntax->It is just a plain JavaScript function that accepts props as their arguments and returns the react element."
        
        answer1="Life Cycle Hooks ->We cannot use lifecycle hooks in a functional component."
        answer2="Readability->They are much easier to test and read"
        flag="1"
        />
        
       <Question 
        question="What is the higher-order component?" 
        answer=" In ReactJS high order component can be defined as the function that is mainly used to collect the component and returns a new component. These components are the patterns that are extracted from the React’s compositional nature. One important aspect of this component is that it is used as a reusable component logic in the React. It provides us with the best way to share behaviour between different React components."

        />
        
       <Question 
        question="Give one basic difference between pros and state?" 
        answer="Pros are immutable while the state is mutable. Both of them can update themselves easily."

        />
        
       <Question 
        question="How do you tell React to build in Production mode and what will that do?" 
        answer="Ordinarily, you'd utilize Webpack's DefinePlugin strategy to set NODE_ENV to production. This will strip out things like prototype approval and additional notices. Over that, it's likewise a smart thought to minify your code in light of the fact that React utilizes Uglify's dead-code end to strip out advancement just code and remarks, which will radically diminish the measure of your package. "

        />
        
       <Question 
        question="Explain the use of the arrow function in React" 
        answer="The arrow function helps you to predict the behavior of bugs when passed as a callback. Therefore, it prevents bug caused by this all together."

        />
        
       <Question 
        question="What is the use of a super keyword in React?" 
        answer="The super keyword helps you to access and call functions on an object’s parent."

        />
        
       <Question 
        question="Explain the use of ‘key’ in react list" 
        answer="Keys allow you to provide each list element with a stable identity. The keys should be unique."

        />
        
       <Question 
        question="What are children prop?" 
        answer="Children props are used to pass component to other components as properties. You can access it by using  {props.children}"

        />
        
       <Question 
        question="Explain error boundaries?" 
        answer="Error boundaries help you to catch Javascript error anywhere in the child components. They are most used to log the error and show a fallback UI."

        />
        
       <Question 
        question="What is the use of empty tags <> </>?" 
        answer="Empty tags are used in React for declaring fragments."

        />
        
       <Question 
        question="Explain strict mode" 
        answer="StrictMode allows you to run checks and warnings for react components. It runs only on development build. It helps you to highlight the issues without rendering any visible UI."

        />
        
       <Question 
        question="What is Context?" 
        answer="React context helps you to pass data using the tree of react components. It helps you to share data globally between various react components."

        />
        
       <Question 
        question="What is the use of Webpack?" 
        answer="Webpack in basically is a module builder. It is mainly runs during the development process."

        />
        
       <Question 
        question="What is Babel in React js?" 
        answer="Babel, is a JavaScript compiler that converts latest JavaScript like ES6, ES7 into plain old ES5 JavaScript that most browsers understand."

        />
        
       <Question 
        question="How can a browser read JSX file?" 
        answer="If you want the browser to read JSX, then that JSX file should be replaced using a JSX transformer like Babel and then send back to the browser."

        />
        
       <Question 
        question="Explain the term synthetic events" 
        answer="It is actually a cross-browser wrapper around the browser’s native event. These events have interface stopPropagation() and preventDefault()."

        />
        
       <Question 
        question=" Can you update props in react?" 
        answer="You can’t update props in react js because props are read-only. Moreover, you can not modify props received from parent to child."

        />
        
       <Question 
        question=" Explain the term ‘Restructuring.’" 
        answer="Restructuring is extraction process of array objects. Once the process is completed, you can separate each object in a separate variable."

        />
        
       <Question 
        question="What do you mean by virtual DOM?" 
        answer="For all the available DOM objects in ReactJS, there is a parallel virtual DOM object. It is nothing but can be considered as the lighter version of the true copy and is powerful in eliminating the complex code. It is also used as a Blue Print for performing several basic experiments. Many developers also use it while practising this technology."

        />
        
       <Question 
        question="What is the difference between createElement and cloneElement?" 
        answer="createElement is the thing that JSX gets transpiled to and is the thing that React uses to make React Elements (protest representations of some UI). cloneElement is utilized as a part of request to clone a component and pass it new props. They nailed the naming on these two."

        />
        
       <Question 
        question=" What is meant by event handling?" 
        answer="To capture the user’s information and other similar data, the event handling system is considered. It is generally done through DOM elements which are present in the code. This task is simple to accomplish. Two-way communication is considered in this approach."

        />
        
       <Question 
        question="How many outermost elements can be there in a JSX expression?" 
        answer=" It must have one JSX element present so that the task can be accomplished easily. Having more than one expression is not an issue but probably it will slow down the process. There are also chances of confusion with more than one expression if you are new to this technology."

        />
        
       <Question 
        question="What exactly you can do if the expression contains more than one line?" 
        answer=" In such a situation, enclosing the multi-line JSX expression is an option. If you are a first time user, it may seem awkward but later you can understand everything very easily. Many times it becomes necessary to avoid multi-lines to perform the task reliably and for getting the results as expected."

        />
        
       <Question 
        question=" In ReactJS, why there is a need to capitalize on the components?" 
        answer="It is necessary because components are not the DOM element but they are constructors. If they are not capitalized, they can cause various issues and can confuse developers with several elements. At the same time, the problem of integration of some elements and commands can be there."

        />
        
       <Question 
        question="Is it possible to nest JSX elements into other JSX elements? " 
        answer=" It is possible. The process is quite similar to that of nesting the HTML elements. However, there are certain things that are different in this. You must be familiar with the source and destination elements to perform this task simply."

        />
        
       <Question 
        question="How to dispatch the data in-store?" 
        answer="We can dispatch the data to another component which should be based on the action which stores the parent component."

        />

       {/* Question-answer part end  */}

        <Comment passComment={addNote} />
       
        {
            addItem.map((val,index)=>{
                return(
                    <Note 
                    key={index}
                    id={index}
                    name={val.name}
                    content={val.content}
                    deleteItem={onDelete}
                    />
                )
            })
        }
        </>
    )
}
export default Reacxt;