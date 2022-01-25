import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Lr=()=>{

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
        <div id="heading">Interview Question for Load Runner
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What are the different components of LoadRunner?" 
        answer="VUGen: Records Vuser scripts that emulate the actions of real users."
        answer1="Controller: Administrative center for creating, maintaining and executing load test scenarios. Assigns scenarios to Vusers and load generators, starts and stops loading tests."
        answer2="Load Generator: An agent through which we can generate load"
        answer3="Analysis: Provides graphs and reports that summarize the system performance"
        flag="1"

        />

       <Question 
        question="What is Load Testing?" 
        answer="Load Testing is to determine if an application can work well with the heavy usage resulting from a large number of users using it simultaneously. The load is increased to simulates the peak load that the servers are going to take during maximum usage periods."

        />
        
       <Question 
        question="What is Performance Testing?" 
        answer="Performance Testing is done to evaluate the application’s performance under load and stress conditions. It is generally measured in terms of the response time of the user’s action on an application"

        />
        
       <Question 
        question="What is the difference between Performance Testing and Performance engineering?" 
        answer="In Performance Testing, testing cycle includes requirement gathering, scripting, execution, result sharing, and report generation. Performance Engineering is a step ahead of Performance Testing where after execution; results are analyzed with the aim to find the performance bottlenecks and the solution is provided to resolve the identified issues."

        />
        
       <Question 
        question="What is the Rendezvous point?" 
        answer="Rendezvous point helps in emulating heavy user load (request) on the server. This instructs Vusers to act simultaneously. When the Vuser reaches the Rendezvous point, it waits for all Vusers with Rendezvous point. Once designated numbers of Vusers reaches it, the Vusers are released. Function lr_rendezvous is used to create the Rendezvous point.This can be inserted by:"
        answer1="->Rendezvous button on the floating Recording toolbar while recording."
        answer2="->After recording Rendezvous point is inserted through Insert> Rendezvous."
        flag="1"

        />
        
       <Question 
        question="What is load runner Agent?" 
        answer="The Agent is interface between host machine and controller."

        />
        
       <Question 
        question="What is the process for developing a Vuser Script?" 
        answer="1.Record the Vuser Script."
        answer1="2.Playback / Enhance the recorded vuser script."
        answer2="3.Define the various run-time settings & check"
        answer3="4.Incorporate the script in a LoadRunner scenario"
        flag="1"

        />
        
       <Question 
        question="How many VUsers are required for load testing?" 
        answer="The number of VUsers required depends on your system under test, network configurations, hardware settings, memory, operating system, software applications objective of a performance test. There can not be any generic value for Vuser."

        />
        
       <Question 
        question="What is the difference in running the Vuser as a process and as a thread? Which is more advantageous way of running Vuser?" 
        answer="When Vuser is run as a process, the same driver program is loaded into memory for each Vuser. This will take a large amount of memory and will limit the number of Vusers you can run on a single generator."
        answer1="When Vuser is run as a thread, only one instance of driver program is shared by given number of Vusers. You can run a number of Vusers on a single generator using the multi-threading mode"
        flag="1"

        />
        
       <Question 
        question="What is the significance of Vuser-init ?" 
        answer="Vuser-init records the pre-operations also called the initialization operations before the actual application is run."

        />
        
       <Question 
        question="What is extended log?" 
        answer="An extended log will store information such as data returned by an advanced trace, parameter substitution and much other information depending on the options you select in run-time settings."

        />
        
       <Question 
        question="Why do you create parameter?" 
        answer="To create a parameter you will replace the hard-coded value within the script and replace it with a parameter. This allows a single Vuser to be run many times, and to use different data on each run. It helps in stimulating more real-life server demand as it prevents a server from caching results."

        />
        
       <Question 
        question="How will you divide your script into multiple Actions? Why?" 
        answer="I will divide the script into Actions based on the functionality. For example, Once Action for Logining into Application, another Action for booking and so on."
        answer1="Actions increase code reusability, reduce maintenance time and hence, decrease costs."
        flag="1"

        />
        
       <Question 
        question="How can you set the number of Vusers in LoadRunner?" 
        answer="You can set the number of Vusers in the controller section while creating your scenarios. Many other advanced options like ramp-up, ramp-down of Vusers are also available in the Controller section."

        />
        
       <Question 
        question="What are monitors?" 
        answer="Monitors are used to monitor performance bottlenecks. They are used in Controller section of Load Runner"

        />
        
       <Question 
        question="What are the types of checkpoints is available in LoadRunner?" 
        answer="LoadRunner provides two types of checkpoints"
        answer1="Image Checkpoints: This checkpoint will verify the presence of an image on a page during run-time"
        answer2="Text Checkpoint: This checkpoint will verify the presence of a text-string on a page during run-time"
        answer3="Both of the above checkpoints can be added in Vugen."
        flag="1"

        />
        
       <Question 
        question="What kind of problem can we face regarding hardware, software, network and memory bottleneck during the performance test?" 
        answer="The possible issues amongst others could be -"
        answer1="1. Lack of Hardware"
        answer2="2. Memory Leakage"
        answer3="3. Network related issues."
        answer4="4. Application/Software error"
        flag="1"

        />
        
       <Question 
        question=" What is Correlation?" 
        answer="Correlation is used to obtain data which is unique for each run of your test script (ex: session ids). While recording, these dynamic values are hard-coded in your script causing the script to fail during playback. Correlation is a technique where dynamic values are not hard-coded in your script but are extracted at run-time to avoid failure."

        />
        
       <Question 
        question="What is Manual Correlation?" 
        answer="It's correlation technique which uses function Web_reg_save_param() to identify dynamic values in your script. It is important that your playback your script to verify that correlation is done successfully."

        />
        
       <Question 
        question="How do you identify the performance bottlenecks? -" 
        answer="The Performance Bottlenecks can be detected by using monitors."
        answer1="These monitors might be application server monitors, web server monitors, database server monitors and network monitors."
        answer2="They help in finding out the troubled area in our scenario which causes increased response time."
        answer3="The measurements made are usually a performance response time, throughput, hits/sec, network delay graphs, etc"
        flag="1"

        />
        
       <Question 
        question="Which function is used to end a nested transaction?" 
        answer="The function is - lr_end_sub_transaction"

        />
        
       <Question 
        question="What is the difference between transaction and transaction instance in LoadRunner?" 
        answer="A transaction is used to measure the time between executions of certain statements"
        answer1="A transaction instance is used for performance analysis"
        flag="1"

        />
        
       <Question 
        question="While the script is running we find some values that may need to be correlated? Is it possible to do manual correlation for those values?" 
        answer="NO. It's not possible to do correlation when a script is running but you can make changes once a script has stopped."

        />
        
       <Question 
        question="What is Elapsed Time in Load Runner?" 
        answer="Elapsed time designates how much time has passed since the launch of the current event and is measured differently for different screens as given below -"
        answer1="In Scenario Status Window - Elapsed time is measured from the moment you hit 'Start Scenario' or ' Initialize/Run Vuser?' button."
        answer2="In 'Vuser' window elapsed time is measured from the moment Vuser enters 'running' state."
        flag="1"

        />
        
       <Question 
        question="Does caching have a negative effect on your load testing results?" 
        answer="Yes. Caching has a negative effect. Cache is a temporary memory which stores your browsing history. When you visit a page for the SECOND time, the time required to load the page will be less than that required to load the page for your first visit since much of the information required to load the page is grabbed from the cache instead of the server. This will effect the response times in your test. Hence, it is recommended to turn-off caching."

        />
        
       <Question 
        question="What is the difference between Overlay graph and Correlate graph?" 
        answer="Overlay Graph: It will overlay the content of two graphs that share a common x-axis"
        answer1="Correlate Graph: It will Plot the Y-axis of two graphs against each other."
        flag="1"

        />
        
       <Question 
        question="What is the difference between lr_error_message and lr_debug _message?" 
        answer="lr_error_message - Sends an error message to the LoadRunner Controller's Output window"
        answer1="lr_debug _message - Sends a debug message to the LoadRunner Controller's Output window"
        flag="1"

        />
        
       <Question 
        question=" What is the difference between load, performance testing?" 
        answer="The objective of the performance testing is to check whether an application loads/updates within stipulated time limit (say 2 seconds). It uses metrics like response time, Requests per second. It is carried out under production - like load conditions."
        answer1="The objective of load testing is to check scalability of the system. For example, finding out the maximum number of users supported by the system within certain specifications."
        flag="1"

        />
        
       <Question 
        question="You have created several Auto-Correlation rules. A new tester on your team is preparing to record a group of scripts on the same application on his workstation. What can you do to provide the tester with the correlation rules?" 
        answer="I would export the Auto-Correlation rules to a .cor file, and then have the new team member import the .cor file into his Auto Correlation rules"

        />
        
       <Question 
        question="You want to emulate a call center for an airline. All representatives login in the morning, perform their business processes and log out at night. In one day, a representative will Create 40 flight reservations, Modify 10 flight reservations, and Search for 20 flight reservations. A representative cannot perform a Modify without performing a Search first. How would you design the run logic?" 
        answer="Create - 67% Search - 16% Block0 - 17% Search Modify"

        />
        
       <Question 
        question="Where should you add a web_reg_save_param function to a script?" 
        answer="Before the step that retrieves the dynamic value"

        />
        
       <Question 
        question="You want to have each step in your script measured as a transaction in the Controller and not shown in the Replay Log in VuGen. How can you accomplish this?" 
        answer="This can be done by enabling the automatic transaction in the Run-time settings."

        />
        
       <Question 
        question=" Which web protocol recording level generates the web_submit_form function?" 
        answer="The HTML based recording generates this function."

        />
        
       <Question 
        question=" What Component of LoadRunner is used to record a script?" 
        answer="The Virtual User Generator (VuGen) component is used to record a script, and it enables you to develop Vuser scripts for a variety of application types and communication protocols."

        />
        
       <Question 
        question="How can we perform functional testing under load?" 
        answer="Functionality under load can be tested by running several Vusers concurrently. By increasing the Vusers, it is necessary to determine how much load the server can sustain."

        />
        
       <Question 
        question="What is the relationship between Response Time and Throughput?" 
        answer="The Throughput shows the amount of data in bytes that the Vusers received from the server in a second. When It is compared with transaction response time, throughput and response time get decreased."
        answer1="The peak throughput and highest response time would occur approximately at the same time."
        flag="1"

        />
        
       <Question 
        question="What do vuser_init and vuser_end action contain?" 
        answer="Vuser_init action contains procedures to log in to a server and Vuser_end section contains logoff procedures."

        />
        
       <Question 
        question="What is the difference between standard log and extended log?" 
        answer="The standard log sends a subset of functions and messages to the output log and subset of functions depends on the Vuser type."
        answer1="Extended log sends a detailed script execution messages to the output log. It is mainly used during debugging when a user needs information about Parameter substitution."
        flag="1"

        />
        
       <Question 
        question=" What is a function to capture dynamic values in the web vuser script?" 
        answer="Web_reg_save_param is the function that saves dynamic data information to a parameter."

        />
        
       <Question 
        question="What is remote command launcher?" 
        answer="The remote command launcher enables the controller to start applications in the host machine."

        />
        
       <Question 
        question="What is the difference between hits/second and requests/second?" 
        answer="Hits per second mean the number of hits the server receives in one second from the vuser."
        answer1="Request per second is the number of request the vuser will request from the server."

        />
        
       <Question 
        question="What are the changes that can be made to run-time settings?" 
        answer="->Pacing: This contains iteration count."
        answer1="->Log: Logging can be set to standard or disabled."
        answer2="->Think Time:  Capable of setting think time to be ignored or replaced."
        answer3="->General:  Allows the setting of Vusers for processes or multi-threading."

        />
        
       <Question 
        question="How can we find database related issues?" 
        answer="Monitors and the Data Resource Graph can be used to find database related issues. LoadRunner allow the tester to specify the resource that needs to be measured before the controller is run."

        />
        
       <Question 
        question="How can performance bottlenecks be identified?" 
        answer="Monitors can be used to detect a performance bottlenecks. These include network, web server, application server, and database server monitors."
        answer1="These monitors can be used to locate trouble spots in scenarios that cause an increase in response time and throughput, network delays, performance response time, hits/second, etc."
        flag="1"

        />
        
       <Question 
        question="What is a ramp up and how it can be set?" 
        answer="Ramp up is gradually increasing the load on a server and can be simulated by gradually increasing the number of Vusers.  This feature can be found in the Scenario Scheduling Options"

        />
        
       <Question 
        question=" What is the benefit of running a Vuser script as a thread?" 
        answer="The advantage of running a Vuser script as a thread which allows more Vusers to be used for one load generator. Running Vuser scripts as processes utilizes a lot of memory because all of the loaded scripts use the same driver."
        answer1="This limits the number of Vuser scripts that can be run on one generator."
        flag="1"

        />
       <Question 
        question="What is the difference between Overlay graph and Correlate graph?" 
        answer="Overlay graph=>Overlay graph has one X-axis and 2 Y-axis. Left Y-axis on the merged graph shows the current graph’s value & Right Y-axis show the value of Y-axis of the graph that was merged"
        answer1="Correlate graph=>There are two graphs, and the active graph’s Y-axis becomes X-axis of merged graph. Y-axis of the graph that was merged becomes merged graph’s Y-axis."
        flag="1"

        />
       <Question 
        question="What are the three sections of a Vuser script and what is the purpose of each one?" 
        answer="->Vuser_init - Used for recording the logon."
        answer1="->Actions - Used for recording the business process."
        answer2="->Vuser_end - Used for recording the logoff."
        flag="1"

        />
       <Question 
        question="What should be done to view parameter substitution in the Execution Log?" 
        answer="Parameter substitution can be viewed in the extended log in the Run time settings."

        />
       <Question 
        question="What are all the reasons to use the Server Resources Monitor?" 
        answer="Server resources monitor is used to find how much data is coming from Cache and helps to find out what are all the parts of the system have bottlenecks."

        />
       <Question 
        question="What is the purpose of selecting ‘Show browser’ during replay in the General Options settings?" 
        answer="‘Show Browser’ setting is used to see the pages that appear during playback. This is useful for debugging Vuser during the initial stages of Web Vuser creation."

        />
       <Question 
        question="For what purpose, User will be using ‘continue on’ error?" 
        answer="Continue on should be set only when making Execution Logs more descriptive or adding logic to the Vuser."

        />
       <Question 
        question="What is the purpose of a LoadRunner transaction?" 
        answer="The purpose of a Load Runner transaction is to measure one or more steps/user actions of a business process."

        />
       <Question 
        question="Why do you create parameters?" 
        answer="Parameters are like script variables, and they are used to vary input to the server to emulate real users."
        answer1="->Different sets of data are sent to the server whenever the script is run."
        answer2="->Better simulate the usage model for more accurate testing from the Controller, and one script can emulate many different users on the system."
        flag="1"

        />
       <Question 
        question="What is lr_output_message?" 
        answer="The lr_output_message is a function that sends notifications to the Controller Output window and to the Vuser log file."

        />
       <Question 
        question="In a Web server, Database and Network are all working fine and now, Where could be the problem?" 
        answer="The problem could be in the system itself or in the application server or in the code written for the application."

        />
       <Question 
        question="What is VuGen Recording and Scripting? " 
        answer="LoadRunner script code is obtained by recording in the ANSI C language syntax and it can be viewed in the script view."

        />
       <Question 
        question=" What is the Configuration of systems when using Load Runner? " 
        answer="The configuration of systems refers to that of the client machines in which we will run Vusers. The configuration of client machine includes its hardware settings, memory, operating system, software applications, development tools, etc."
        answer1="This system component configuration should match with the overall system configuration so as to achieve the load testing objectives."
        flag="1"

        />
       <Question 
        question="What is the use lr_abort function?" 
        answer="The lr_abort function is used to abort the execution of a Vuser script. It instructs the Vuser to stop executing the Actions section, execute the vuser_end section and end the execution."

        />
       <Question 
        question="How Load Runner interacts with the application?" 
        answer="Protocol is used in Load Runner to interact with the application."

        />
       <Question 
        question="What is think time?" 
        answer="Think time is the time where a real user waits between actions."
        answer1="When a user receives data from a server or other applications, the user may wait several seconds to review the data before responding. This time delay is called as think time."
        flag="1"

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
export default Lr;