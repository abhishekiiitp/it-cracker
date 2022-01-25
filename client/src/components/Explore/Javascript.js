import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';
import Background from './Background'
import Question from '../Explore/Question'
// import imgg1 from 'https://source.unsplash.com/1600x700/?black'
const Javascript=()=>{

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
        <div id="heading">Interview Question for JavaScript
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="How is JavaScript different from Java?" 
        answer=" Java is a programming language, whereas JavaScript is essentially a scripting language. Developers use Java for building applications that can run in a virtual machine, an operating system, or inside a browser. Contrastingly, JS code is meant to run inside a browser only.

Nonetheless, standalone desktop applications can be built with JavaScript by using Electron and Node.js. Another important distinction between Java and JS code is that while the former requires compilation, the latter is available in a text format."

        />

       <Question 
        question="What is JavaScript?" 
        answer="Javascript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers."

        />
        
       <Question 
        question="What are JavaScript Data Types?" 
        answer="1)Number:-Represents both integer and floating-point values."
        answer1="2)String:-Represents single-character, multi-character, and alphanumeric values."
        answer2="3)Boolean:-Represents true and false values."
        answer3="4)Object:-Used for storing collections of data or more complex entities"
        answer4="5)Undefined:-Represents value not assigned. If a variable is only declared and not assigned in JS, it represents the undefined data type."
        answer5="6)Null:- Represents empty, nothing, and unknown type of values"
        flag="1"

        />
        
       <Question 
        question="Is JavaScript a case-sensitive language?" 
        answer="Yes, JavaScript is a case sensitive language.  The language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters."

        />
        
       <Question 
        question="What are the advantages of JavaScript?" 
        answer="Following are the advantages of using JavaScript −"
        answer1="Less server interaction --You can validate user input before sending the page off to the server. This saves server traffic, which means less load on your server."
        answer2="Immediate feedback to the visitors −-They don’t have to wait for a page reload to see if they have forgotten to enter something."
        answer3="Increased interactivity − -You can create interfaces that react when the user hovers over them with a mouse or activates them via the keyboard."
        answer4="Richer interfaces − -You can use JavaScript to include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors." 
        flag="1"

        />
        
       <Question 
        question=" What is the use of isNaN function?" 
        answer="isNan function returns true if the argument is not a number; otherwise, it is false."

        />
        
       <Question 
        question=" Which is faster between JavaScript and an ASP script?" 
        answer="JavaScript is faster. JavaScript is a client-side language,, and thus it does not need the assistance of the webserver to execute. On the other hand, ASP is a server-side language and hence is always slower than JavaScript. Javascript now is also a server-side language (nodejs)."

        />
        
       <Question 
        question="What is negative Infinity?" 
        answer="Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero."

        />
        
       <Question 
        question=" Is it possible to break JavaScript Code into several lines?" 
        answer="Breaking within a string statement can be done by using a backslash, '\,' at the end of the first line."
        answer1="Example:--"
        answer2="document. Write (This is \a program,);"

        />
        
       <Question 
        question=" What are undeclared and undefined variables?" 
        answer="Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered."
        answer1="Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned."

        />
        
       <Question 
        question="What are the scopes of a variable in JavaScript?" 
        answer="The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes."
        answer1="Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code."
        answer2="Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function."

        />
        
       <Question 
        question="What is the purpose of ‘This’ operator in JavaScript?" 
        answer="The JavaScript this keyword refers to the object it belongs to. This has different values depending on where it is used. In a method, this refers to the owner object and in a function, this refers to the global object."

        />
        
       <Question 
        question="What is Callback?" 
        answer="A callback is a plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘. In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions."

        />
        
       <Question 
        question="What is Closure? Give an example." 
        answer="Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. It gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created. To use a closure, simply define a function inside another function and expose it."

        />
        
       <Question 
        question=" Name some of the built-in methods and the values returned by them." 
        answer="CharAt():--It returns the character at the specified index."
        answer1="forEach():--It calls a function for each element in the array."
        answer2="pop():--It removes the last element from an array and returns that element."
        answer3="indexOf():--It returns the index within the calling String object of the first occurrence of the specified value."
        answer4="push():--It adds one or more elements to the end of an array and returns the new length of the array."
        answer5="reverse():--It reverses the order of the elements of an array."
        flag="1"

        />
        
       <Question 
        question="What are the variable naming conventions in JavaScript?" 
        answer="The following rules are to be followed while naming variables in JavaScript:"
        answer1="1) You should not use any of the JavaScript reserved keyword as variable name. For example, break or boolean variable names are not valid."
        answer2="2) JavaScript variable names should not start with a numeral (0-9). They must begin with a letter or the underscore character. For example, 123name is an invalid variable name but _123name or name123 is a valid one."
        answer3="3) JavaScript variable names are case sensitive. For example, Test and test are two different variables."
        flag="1"

        />
        
       <Question 
        question=" How does TypeOf Operator work?" 
        answer="The typeof operator is used to get the data type of its operand. The operand can be either a literal or a data structure such as a variable, a function, or an object. It is a unary operator that is placed before its single operand, which can be of any type. Its value is a string indicating the data type of the operand."

        />
        
       <Question 
        question=" How to create a cookie using JavaScript?" 
        answer="The simplest way to create a cookie is to assign a string value to the document.cookie object, which looks like this-"
        answer1="Syntax-"
        answer2="document.cookie= key1 = value1; key2 = value2; expires = date"
        flag="1"

        />
        
       <Question 
        question="What are JavaScript Cookies?" 
        answer="Cookies are the small test files stored in a computer, and they get created when the user visits the websites to store information that they need. Examples could be User Name details and shopping cart information from previous visits."

        />
        
       <Question 
        question="How to read a cookie using JavaScript?" 
        answer="Reading a cookie is just as simple as writing one, because the value of the document.cookie object is the cookie. So you can use this string whenever you want to access the cookie."
        answer1="-> The document.cookie string will keep a list of name = value pairs separated by semicolons, where name is the name of a cookie and value is its string value."
        answer2="-> You can use strings’ split() function to break the string into key and values."

        />
        
       <Question 
        question=" How to delete a cookie using JavaScript?" 
        answer="If you want to delete a cookie so that subsequent attempts to read the cookie in JavaScript return nothing, you just need to set the expiration date to a time in the past. You should define the cookie path to ensure that you delete the right cookie. Some browsers will not let you delete a cookie if you don’t specify the path."
               

        />
        
       <Question 
        question="What is the working of timers in JavaScript?" 
        answer="Timers are used to execute a piece of code at a set time or repeat the code in a given interval. This is done by using the functions setTimeout, setInterval, and clearInterval.
                The setTimeout(function, delay) function is used to start a timer that calls a particular function after the mentioned delay. The setInterval(function, delay) function repeatedly executes the given function in the mentioned delay and only halts when canceled. The clearInterval(id) function instructs the timer to stop.
                Timers are operated within a single thread, and thus events might queue up, waiting to be executed."

        />
        
        <Question 
        question="What is the difference between ViewState and SessionState?" 
        answer="'ViewState' is specific to a page in a session."
        answer1="'SessionState' is specific to user-specific data that can be accessed across all web application pages."
        flag="1"

        />
        
       <Question 
        question="Does JavaScript support automatic type conversion?" 
        answer="Yes, JavaScript does support automatic type conversion. It is the common way of type conversion used by JavaScript developers"

        />
        
       <Question 
        question="How can the style/class of an element be changed?" 
        answer="It can be done in the following way:"
        answer1="document.getElementById(myText). style. fontSize = 20;"
        answer2="document. getElementById (myText). className = anyclass;"
        flag="1"

        />
        
       <Question 
        question=" What do you mean by NULL in Javascript?" 
        answer="The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object."

        />
        
       <Question 
        question="What is the difference between an alert box and a confirmation box?" 
        answer="An alert box displays only one button, which is the OK button.But a Confirmation box displays two buttons, namely OK and cancel. "

        />
        
       <Question 
        question="What are escape characters?" 
        answer="Escape characters (Backslash) is used when working with special characters like single quotes, double quotes, apostrophes, and ampersands. Place backslash before the characters to make it display."

        />
        
       <Question 
        question="What a pop()method in JavaScript is?" 
        answer="The pop() method is similar to the shift() method, but the difference is that the Shift method works at the array's start. The pop() method takes the last element off of the given array and returns it. The array on which it is called is then altered."

        />
        
       <Question 
        question=" What are the disadvantages of using innerHTML in JavaScript?" 
        answer="If you use innerHTML in JavaScript, the disadvantage is:-"
        answer1="-> Content is replaced everywhere"
        answer2="-> We cannot use it like appending to innerHTML"
        answer3="-> Even if you use +=like 'innerHTML = innerHTML + 'html'' still the old content is replaced by html"
        answer4="-> The entire innerHTML content is re-parsed and builds into elements. Therefore, it's much slower"
        answer5="-> The innerHTML does not provide validation, and therefore we can potentially insert valid and broken HTML in the document and break it"
        flag="1"

        />
        
       <Question 
        question=" What is the use of a type of operator?" 
        answer="'Typeof' is an operator used to return a string description of the type of a variable."

        />
        
       <Question 
        question="Which keywords are used to handle exceptions?" 
        answer="Try… Catch---finally is used to handle exceptions in the JavaScript"
        answer1="Try{
    Code
}"
        answer2="Catch(exp){
    Code to throw an exception.
}"
       answer3="Finally{
    Code runs either it finishes successfully or after catch
}"
   flag="1"

        />
        
       <Question 
        question=" What is the use of the Push method in JavaScript?" 
        answer="The push method is used to add or append one or more elements to an Array end. Using this method, we can append multiple elements by passing multiple arguments."

        />
        
       <Question 
        question="What is the unshift method in JavaScript?" 
        answer="Unshift method is like the push method, which works at the beginning of the array. This method is used to prepend one or more elements to the beginning of the array."

        />
        
       <Question 
        question="What is the 'Strict Mode in JavaScript, and how can it be enabled?" 
        answer="Strict Mode adds certain compulsions to JavaScript. Under the strict Mode, JavaScript shows errors for a piece of code, which did not show an error before, but might be problematic and potentially unsafe. Strict Mode also solves some mistakes that hamper the JavaScript engines from working efficiently."

        />
        
       <Question 
        question="What is a window.onload and onDocumentReady?" 
        answer="The onload function is not run until all the information on the page is loaded. This leads to a substantial delay before any code is executed.

onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation of the code."

        />
        
       <Question 
        question="What is the difference between .call() and .apply()?" 
        answer="The function .call() and .apply() are very similar in their usage except a little difference. .call() is used when the number of the function's arguments are known to the programmer, as they have to be mentioned as arguments in the call statement. On the other hand, .apply() is used when the number is not known. The function .apply() expects the argument to be an array."

        />
        
       <Question 
        question="What are the decodeURI() and encodeURI()?" 
        answer="EncodeURl() is used to convert URL into their hex coding. And DecodeURI() is used to convert the encoded URL back to normal."
        answer1="<script>
   var uri='my test.asp?name=ståle&car=saab';

   document.write(encodeURI(uri)+ '<br>');

    document.write(decodeURI(uri));
</script>"

        />
        
       <Question 
        question="How are JavaScript and ECMA Script related?" 
        answer="ECMA Script is like rules and guidelines, while Javascript is a scripting language used for web development."

        />
        
       <Question 
        question="What is OOPS Concept in JavaScript?" 
        answer="Many times, variables or arrays are not sufficient to simulate real-life situations. JavaScript allows you to create objects that act like real-life objects. A student or a home can be an object that has many unique characteristics of its own. You can create properties and methods for your objects to make programming easier. If your object is a student, it will have properties like the first name, last name, id, etc., and methods like calculating rank, change address, etc. If your object is a home, it will have properties like a number of rooms, paint color, location, etc. The methods like to calculate area, change owner, etc."

        />
        
       <Question 
        question="What do you understand by Closures in JavaScript?" 
        answer="Closures provide a better, concise, creative, and expressive writing code for JavaScript developers and programmers. Technically speaking, closures are a combination of lexical environment and function.

In other words, a closure is a locally declared variable that is related to a function and stays in the memory when the related function has returned. The closure contains all local variables that were in-scope at the time of the closure creation."

        />
        
       <Question 
        question="What are Exports & Imports?" 
        answer="Imports and exports help us to write modular JavaScript code. Using Imports and exports we can split our code into multiple files"

        />
        
       <Question 
        question="When to Use Internal and External JavaScript Code?" 
        answer="Suppose you have only a few lines of code that is specific to a particular webpage. In that case, it is better to keep your JavaScript code internal within your HTML document.

On the other hand, if your JavaScript code is used in many web pages, you should consider keeping your code in a separate file. If you wish to make some changes to your code, you have to change only one file, making code maintenance easy. If your code is too long, it is better to keep it in a separate file. This helps in easy debugging."

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
export default Javascript;