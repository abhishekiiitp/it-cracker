import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Se=()=>{

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
        <div id="heading">Interview Question for Software Engineering
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is Software Engineering?" 
        answer="Software engineering is defined as the function of the systematic, disciplined, quantified approach to the development, operations, and maintenance of software."

        />

       <Question 
        question="What is the main difference between a computer program and computer software?" 
        answer="A computer program is a piece of programming code. It performs a well-defined task. On the other hand, the software includes programming code, documentation and user guide."

        />
        
       <Question 
        question="What is software re-engineering?" 
        answer="It is a process of software development which is done to improve the maintainability of a software system."

        />
        
       <Question 
        question="Describe the software development process in brief:" 
        answer="The software development is a life cycle is composed of the following stages:"
        answer1="->Requirement analysis"
        answer2="->Specification"
        answer3="->Software architecture"
        answer4="->Implementation"
        flag="1"

        />
        
       <Question 
        question="What are SDLC models available?" 
        answer="Waterfall Model, Spiral Model, Big-bag model, Iterative Model, and V- Model are some of the famous SDLC models."

        />
        
       <Question 
        question="What is verification and validation?" 
        answer="Verification -> Verification is a term that refers to the set of activities which ensure that software implements a specific function."
        answer1="Validation ->It refers to the set of activities which ensure that software that has been built according to the need of clients."
        flag="1"

        />
        
       <Question 
        question=" In software development process what is the meaning of debugging?" 
        answer="Debugging is the process that results in the removal of error. It is very important part of the successful testing."

        />
        
       <Question 
        question="How can you make sure that your code is both safe and fast?" 
        answer="In the software, development security is always first. So if the execution of the program is slow then, I will try to identify the reason out ways to its time complexity."

        />
        
       <Question 
        question="Name two tools which are used for keeping track of software requirements?" 
        answer="Two commonly used are:"
        answer1="->Make a requirements specifications document to list all of the requirements."
        answer2="->Create an excel sheet the list down the requirement, type, dependency, priority, etc."
        flag="1"

        />
        
       <Question 
        question="What is the main difference between a stubs, a mock?" 
        answer="A stub is a minimal implementation of an interface which generally returns hardcoded data while mock usually verifies outputs against expectations. Those expectations are set in the test."

        />
        
       <Question 
        question="What language do you like to write programming algorithms?" 
        answer="Every developer has their views when it comes to the programming language choices. Though, one should prefer high-level languages because they are dynamic. Like C and C++ languages."

        />
        
       <Question 
        question=" What is computer software?" 
        answer="Computer software is a package which includes a software program, its documentation, and user guide on how to use the software."

        />
        
       <Question 
        question="According to you which SDLC model is the best?" 
        answer="There, is no such ranking, as SDLC Models are adopted as per the need for the development process. It may differ software-to-software."

        />
        
       <Question 
        question="Who is software project manager? What is his role?" 
        answer="A software project manager is a person responsible for managing the software development project."
        answer1="The project manager is doing the project planning, monitoring the progress, communication. He or she also manages risks and resources to deliver the project within time, cost, and quality constraints."
        flag="1"

        />
        
       <Question 
        question=" What is mean by software scope?" 
        answer="Software scope is a well-defined boundary. It includes all kind of activities that are done to develop and deliver the software product."
        answer1="The software scope defines all functionalities and artifacts to be delivered as a part of the software. The scope also identifies what the product will do? What is not the part of the project? What is project estimation?"
        answer2="This process is helpful to estimate various aspects of the software product. This estimation can be decided either consulting experts or by using pre-defined formulas."
        flag="1"

        />
        
       <Question 
        question=" How to find the size of a software product?" 
        answer="The size of software product can be calculated using by following two methods"
        answer1="Counting the lines of delivered code"
        answer2="Counting delivered function points"
        flag="1"

        />
        
       <Question 
        question="What are function points?" 
        answer="Function points are the features which are provided by the software product. It is considered as a most important measurement for software size."

        />
        
       <Question 
        question=" What are software project estimation techniques available?" 
        answer="Most widely used estimation techniques are:"
        answer1="Decomposition technique"
        answer2="Empirical technique"
        flag="1"

        />
        
       <Question 
        question="What is Software configuration management?" 
        answer="Software configuration management is a process of tracking and controlling changes that happen in the software."
        answer1="Change control is a function which ensures that all changes made into the software system are consistent and created using organizational rules and regulations."
        flag="1"

        />
        
       <Question 
        question="How can you measure project execution?" 
        answer="We can measure project execution using Activity Monitoring, Status Reports, and Milestone Checklists."

        />
        
       <Question 
        question="Tell me about some project management tools." 
        answer="There are many types of management tools used as per the need for a software project. Some of them are Pert Chart, Gantt Chart, Resource Histogram, Status Reports, etc."

        />
        
       <Question 
        question=" What are software requirements?" 
        answer="Software requirements are a functional description of a proposed software system. It is assumed to be the description of the target system, its functionalities, and features."

        />
        
       <Question 
        question=" What are functional and non-functional requirements?" 
        answer="Functional requirements are functional features which are expected by users from the proposed software product."
        answer1="Non-functional requirements are related to security, performance, look, and feel of the user interface."
        flag="1"

        />
        
       <Question 
        question="What is software metric?" 
        answer="Software Metrics offers measures for various aspects of software process which are divided into:"
        answer1="Requirement metrics: Length requirements, completeness"
        answer2="Product metrics: Number of coding Lines, Object-oriented metrics, design and test metrics."
        flag="1"

        />
        
       <Question 
        question="What is modularization?" 
        answer="Modularization is a technique which is used for dividing a software system into various discreet modules. That is expected to carry out the tasks independently."

        />
        
       <Question 
        question="What is cohesion?" 
        answer="Cohesion is a measure that defines the intra-dependability among the elements of the module."

        />
        
       <Question 
        question="Mentions some software analysis & design tools?" 
        answer="Some of the most important software analysis and designing tools are:"
        answer1="Data Flow Diagrams"
        answer2="Structured Charts"
        answer3="Structured English"
        answer4="Data Dictionary"
        flag="1"

        />
        
       <Question 
        question="What is mean by level-0 Data flow diagram?" 
        answer="Highest abstraction level is called Level 0 of DFD. It is also called context level DFD. It portrays the entire information system as one diagram."

        />
        
       <Question 
        question="What is the major difference between structured English and Pseudo Code?" 
        answer="Structured English is native English language. It is used to write the structure of a program module. It uses programming language keywords. On the other hand, Pseudo Code is more like to the programming language without syntax of any specific language."

        />
        
       <Question 
        question="What is structured design?" 
        answer="Structured design is a conceptualization of problem. It also called solution design and which is based on ‘divide and conquer’ strategy."

        />
        
       <Question 
        question="What is functional programming?" 
        answer="It is a programming method, which uses the concepts of a mathematical function. It provides means of computation as mathematical functions, which also produces results irrespective of program state."

        />
        
       <Question 
        question=" What is Quality Assurance vs. Quality Control?" 
        answer="Quality Assurance checks if proper process is followed while developing the software while Quality Control deals with maintaining the quality of software product."

        />
        
       <Question 
        question="What are CASE tools?" 
        answer="CASE means Computer Aided Software Engineering. They are set of automated software application programs, which are used to support, enhance and strengthen the SDLC activities."

        />
        
       <Question 
        question="Which process model removes defects before software get into trouble?" 
        answer="Clean room software engineering method removes defects before software gets into trouble."

        />
        
       <Question 
        question="There are twenty different socks of two types in a drawer in one dark room. What is the minimum number of socks you need to take to ensure you have a matching pair?" 
        answer="If you pick up three socks, they may be of the same type even if the odds are 50%. Odds never an equal reality. Therefore, the only way to 'ensure you have a matching pair' is to pick up at least 11 number of shocks."

        />
        
       <Question 
        question="How you can make sure that your written code which can handle various kinds of error situation?" 
        answer="I can write tests that define the expected error situations."

        />
        
       <Question 
        question=" Explain the differences between a Thread and a Process?" 
        answer="A process is instance of the computer program.In a single program it is possible to have one or more threads."

        />
        
       <Question 
        question="Tell me the difference between an EXE and a DLL?" 
        answer="An exe is an executable program while a DLL is a file that can be loaded and executed by programs dynamically. It is an external code repository for programs. As both are different programs, reuse the same DLL instead of having that code in their file. It also reduces required storage space."

        />
        
       <Question 
        question="What is strong-typing and weak-typing? Which is preferred? Why?" 
        answer="Strong typing checks the types of variables at compile time. On the other hand, weak typing checks the types of the system at run-time. Among them, Strong typing is always preferred because it minimizes the bugs."

        />
        
       <Question 
        question="What type of data is passed via HTTP Headers?" 
        answer="Script and metadata passed via HTTP headers."

        />
        
       <Question 
        question="How do you prioritize requirements?" 
        answer="First, you need to design a system by evaluating data structure. Then you should move on to the code structure needed to support it."

        />
        
       <Question 
        question="Give me differences between object-oriented and component-based design?" 
        answer="Object-oriented design can easily be encapsulated to some degree in component-based design."

        />
        
       <Question 
        question="When do you use polymorphism?" 
        answer="Polymorphism is used when there is a need for override functionality when inheriting class. It’s about shared classes and shared contracts."

        />
        
       <Question 
        question=" What is essential for testing the quality of the code?" 
        answer="According to me, the unit testing framework is essential for testing the quality of the code."

        />
        
       <Question 
        question="Do you think that the maintenance of software is expensive?" 
        answer="According to me, maintenances of software will never be expensive if we are using proper development process."

        />
        
       <Question 
        question="Give me differences between tags and branches?" 
        answer="Tags are for versioning releases which are temporary holding places for doing such thing. However, branches are deleted when those changes are merged into the trunk."

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
export default Se;