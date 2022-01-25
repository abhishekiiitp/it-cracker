import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Jquery=()=>{

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
        <div id="heading">Interview Question for Jquery
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is jQuery?" 
        answer="jQuery is not a programming language but a well written JavaScript code. It is a JavaScript code, which do document traversing, event handling, Ajax interactions and Animations."

        />

       <Question 
        question="Why jQuery is needed?" 
        answer="jQuery is needed for the following list:"
        answer1="Used to develop browser compatible web applications"
        answer2="Improve the performance of an application"
        answer3="Very fast and extensible"
        answer4="UI related functions are written in minimal lines of codes"
        flag="1"

        />
        
       <Question 
        question="Whether jQuery HTML work for both HTML and XML documents?" 
        answer="No, jQuery HTML only works for HTML documents not for XML Documents."

        />
        
       <Question 
        question="What are the methods used to provide effects?" 
        answer="Some of the effects methods are:"
        answer1="Show()"
        answer2="Show()"
        answer3="Toggle()"
        answer4="FadeIn()"
        answer5="FadeOut()"
        flag="1"


        />
        
       <Question 
        question="What is the advantage of using minimized version of jQuery?" 
        answer="Efficiency of web page increases when minimized version of jQuery is used.min.js file will be more than 50% less than the normal js file. Reduction in the file size makes the web page faster."

        />
        
       <Question 
        question="Is jQuery is a JavaScript or JSON library file?" 
        answer="jQuery is a library of JavaScript file and it consists of DOM, event effects and the Ajax functions. jQuery is said to be a single JavaScript file."

        />
        
       <Question 
        question="Which operating system is more compatible with jQuery?" 
        answer="Mac, Windows and Linux are more compatible with the jQuery."

        />
        
       <Question 
        question="How can we include jQuery library in ASP.Net project?" 
        answer="Download the jQuery library from jQuery.com and include that reference in the asp.net page."

        />
        
       <Question 
        question="Which command will give a version of jQuery?" 
        answer="The command $.ui.version returns jQuery UI version."

        />
        
       <Question 
        question="In what scenarios jQuery can be used?" 
        answer="jQuery can be used in following scenarios:"
        answer1="Apply CSS static or dynamic"
        answer2="Calling functions on events"
        answer3="Manipulation purpose"
        answer4="Mainly for Animation effects"
        flag="1"

        />
        
       <Question 
        question="What is the difference between find and children methods?" 
        answer="Find method is used to find all levels down the DOM tree but children find single level down the DOM tree."

        />
        
       <Question 
        question="What is jQuery connect?" 
        answer="A ‘ jQuery connect’  is a plugin used to connect or bind a function with another  function. Connect is used to execute function from any other function or plugin is executed."

        />
        
       <Question 
        question=" How to use connect?" 
        answer="Connect can be used by downloading jQuery connect file from jQuery.com and then include that file in the HTML file. Use $.connect function to connect a function to another function."

        />
        
       <Question 
        question="What are the features of jQuery, has been used in web applications?" 
        answer="jQuery uses features like Sliding, File uploading and accordian in web applications."

        />
        
       <Question 
        question="What are the browser related issues for jQuery?" 
        answer="Browser compatibility of jQuery plugin is an issue and needs lot of time to fix it."

        />
        
       <Question 
        question="Whether we need to add jQuery file in both Master and Content page?" 
        answer="jQuery file should be added to the Master page and can use access from the content page directly without having any reference to it."

        />
        
       <Question 
        question="What are the basic selectors in jQuery?" 
        answer="Following are the basic selectors in jQuery:"
        answer1="Element ID"
        answer2="CSS Name"
        answer3="Tag Name"
        answer4="DOM hierarchy"
        flag="1"

        />
        
       <Question 
        question="Can we call C# code behind using jQuery?" 
        answer="Yes, we can call C# code from jQuery as it supports .net application."

        />
        
       <Question 
        question=" What is the use jQuery.data method?" 
        answer="jQuery.data methods is used to associate the data with the DOM nodes and the objects. This data method makes the jQuery code clear and concise."

        />
        
       <Question 
        question="What is the use of each function in jQuery?" 
        answer="Each function is used to iterate each and every element of an object. It is used to loop DOM elements, arrays and the object properties."

        />
        
       <Question 
        question="What is the difference between size and length of jQuery?" 
        answer="Size and length both returns the number of element in an object. But length is faster than the size because length is a property and size is a method."

        />
        
       <Question 
        question="Can we add more than one ‘document.ready’ function in a page?" 
        answer="Yes, we can add more than one document.ready function in a page. But, body.onload can be added once in a page."

        />
        
       <Question 
        question="What is the use of jQuery load method?" 
        answer="jQuery load method is a powerful AJAX method which is used to load the data from a server and assign the data into the element without loading the page."

        />
        
       <Question 
        question="Whether our own specific characters are used in place of $ in jQuery?" 
        answer="Yes, We can use our own variable in place of $ by using the method called no Conflict () method."

        />
        
       <Question 
        question="What are the four parameters used for jQuery Ajax method?" 
        answer="The four parameters are"
        answer1="URL – Need to specify the URL to send the request"
        answer2="type – Specifies type of request(Get or Post)"
        answer3="data – Specifies data to be sent to server"
        answer4="Cache – Whether the browser should cache the requested page"
        flag="1"

        />
        
       <Question 
        question="What is the use of jQuery filter?" 
        answer="The jQuery filter is used to filter the certain values from the object list based on the criteria. Example is to filter certain products from the master list of products in a cart website."

        />
        
       <Question 
        question=" Which program is useful for testing jQuery?" 
        answer="QUnit is used to test jQuery and it is very easy and efficient."

        />
        
       <Question 
        question="What is CDN?" 
        answer="CDN is abbreviated as Content Distribution network and it is said to be a group of companies in different location with network containing copies of data files to maximize bandwidth in accessing the data."

        />
        
       <Question 
        question="What are the two types of CDNs?" 
        answer="There are two types of CDNs:"
        answer1="Microsoft – Load jQuery from Ajax CDN"
        answer2="Google – Load jQuery from Google libraries API"
        flag="1"

        />
        
       <Question 
        question="Which sign is used as a shortcut for jQuery?" 
        answer="Dollar ($) sign is used as a shortcut for jQuery."

        />
        
       <Question 
        question="Is jQuery is a client or server scripting?" 
        answer="jQuery is a client scripting."

        />
        
       <Question 
        question="What is the script build up by jQuery?" 
        answer="jQuery is a Javascript file and it is single javascript file that contains common DOM, event effects and Ajax functions."

        />
        
       <Question 
        question=" How can we debug jQuery?" 
        answer="There are two ways to debug jQuery:"
        answer1="Debugger keyword"
        answer2="->Add the debugger to the line from where we have to start debugging and then run Visual Studio in Debug mode with F5 function key."
        answer3="->Insert a break point after attaching the process"
        flag="1"

        />
        
       <Question 
        question="What are all the ways to include jQuery in a page?" 
        answer="Following are the ways to include jQuery in a page:"
        answer1="Local copy inside script tag"
        answer2="Remote copy of jQuery.com"
        answer3="Remote copy of Ajax API"
        answer4="Local copy of script manager control"
        answer5="Embedded script using client script object"
        flag="1"

        />
        
       <Question 
        question="What is the use of jQuery.ajax method ()?" 
        answer="jQuery.ajax method is used for asynchronous HTTP requests."

        />
        
       <Question 
        question="Where can we download JQuery?" 
        answer="jQuery javascript can be downloaded from jQuery official website – www.jquery.com"

        />
        
       <Question 
        question="Is jQuery is a replacement of JavaScript?" 
        answer="No, jQuery is not a replacement of JavaScript"

        />
        
       <Question 
        question="What is called chaining?" 
        answer="Chaining is used to connect multiple events and functions in a selector."

        />
        
       <Question 
        question="What are the advantages of jQuery?" 
        answer="Following are the advantages of jQuery:"
        answer1="Just a JavaScript enhancement"
        answer2="Coding is simple, clear, reusable"
        answer3="Removal of writing more complex conditions and loops"
        flag="1"

        />
        
       <Question 
        question="Whether C# code behind can be called from jQuery?" 
        answer="Yes, we can call C# code behind from jQuery."

        />
        
       <Question 
        question="What is the use of jQuery.data() method?" 
        answer="jQuery data method is used to associate data with DOM nodes and JavaScript objects. This method will make a code very concise and neat."

        />
        
       <Question 
        question=" What is the difference between onload() and document.ready()?" 
        answer="In a page, we can have only one onload function but we can have more than one document.ready function. Document.ready function is called when DOM is loaded but onload function is called when DOM and images are loaded on the page."

        />
        
       <Question 
        question="What is the use of jQuery each function?" 
        answer="jQuery each function is used to loop through each and every element of the target jQuery object. It is also useful for multi element DOM, looping arrays and object properties."

        />
        
       <Question 
        question=" How method can be called inside code behind using jQuery?" 
        answer="$.ajax can be called and by declaring WebMethod inside code behind using jQuery."

        />
        
       <Question 
        question="Which is the fastest selector in jQuery?" 
        answer="ID and Element are the fastest selectors in jQuery."

        />
        
       <Question 
        question="What is the slowest selector in jQuery?" 
        answer="Class selectors are the slowest selectors in jQuery."

        />
       <Question 
        question="Where jQuery code is getting executed?" 
        answer="jQuery code is getting executed on a client browser."

        />
       <Question 
        question="What is the method used to define the specific character in place of $ sign?" 
        answer="‘NoConflict’ method is used to reference a jQuery and save it in a variable. That variable can be used instead of Sign."

        />
       <Question 
        question="Why jQuery is better than JavaScript?" 
        answer="jQuery is a library used for developing Ajax application and it helps to write the code clean and concise. It also handles events, animation and Ajax support applications."

        />
       <Question 
        question="What are the types of selectors in jQuery?" 
        answer="There are three types of selectors in jQuery:"
        answer1="->CSS Selector"
        answer2="->XPath Selector"
        answer3="->Custom Selector"
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
export default Jquery;