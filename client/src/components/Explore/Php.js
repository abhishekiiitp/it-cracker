import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Php=()=>{

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
        <div id="heading">Interview Question for PHP
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is PHP?" 
        answer="PHP stands for Hypertext Preprocessor. It is an open source server-side scripting language which is widely used for web development. It supports many databases like MySQL, Oracle, Sybase, Solid, PostgreSQL, generic ODBC etc."

        />

       <Question 
        question="What is PEAR in PHP?" 
        answer="PEAR is a framework and repository for reusable PHP components. PEAR stands for PHP Extension and Application Repository. It contains all types of PHP code snippets and libraries. It also provides a command line interface to install 'packages' automatically."

        />
        
       <Question 
        question="Who is known as the father of PHP?" 
        answer="Rasmus Lerdorf"

        />
        
       <Question 
        question="What was the old name of PHP?" 
        answer="The old name of PHP was Personal Home Page."

        />
        
       <Question 
        question="Explain the difference b/w static and dynamic websites?" 
        answer="->In static websites, content can't be changed after running the script. You can't change anything on the site. It is predefined."
        answer1="->In dynamic websites, content of script can be changed at the run time. Its content is regenerated every time a user visit or reload. Google, yahoo and every search engine is the example of dynamic website."
        flag="1"
        />
        
       <Question 
        question=" What is the name of scripting engine in PHP?" 
        answer="The scripting engine that powers PHP is called Zend Engine 2."

        />
        
       <Question 
        question=" Explain the difference between PHP4 and PHP5." 
        answer="-> PHP4 doesn't support oops concept and uses Zend Engine 1."
        answer1="-> PHP5 supports oops concept and uses Zend Engine 2."
        flag="1"

        />
        
       <Question 
        question="What are the popular Content Management Systems (CMS) in PHP?" 
        answer="->WordPress: WordPress is a free and open-source content management system (CMS) based on PHP & MySQL. It includes a plug-in architecture and template system. It is mostly connected with blogging but supports another kind of web content, containing more traditional mailing lists and forums, media displays, and online stores."
        answer1="->Joomla: Joomla is a free and open-source content management system (CMS) for distributing web content, created by Open Source Matters, Inc. It is based on a model-view-controller web application framework that can be used independently of the CMS."
        answer2="->Magento: Magento is an open source E-trade programming, made by Varien Inc., which is valuable for online business. It has a flexible measured design and is versatile with many control alternatives that are useful for clients. Magento utilizes E-trade stage which offers organization extreme E-business arrangements and extensive support network."
        answer3="->Drupal: Drupal is a CMS platform developed in PHP and distributed under the GNU (General Public License)."
        flag="1"

        />
        
       <Question 
        question="Which programming language does PHP resemble to?" 
        answer="PHP has borrowed its syntax from Perl and C."

        />
        
       <Question 
        question="What is 'echo' in PHP?" 
        answer="PHP echo output one or more string. It is a language construct not a function. So the use of parentheses is not required. But if you want to pass more than one parameter to echo, the use of parentheses is required."
        answer1="Syntax:-  void echo ( string $arg1 [, string $... ] ) "
        flag="1"

        />
        
       <Question 
        question="What is 'print' in PHP?" 
        answer="PHP print output a string. It is a language construct not a function. So the use of parentheses is not required with the argument list. Unlike echo, it always returns 1."
        answer1=" Syntax :- int print ( string $arg)  "
        flag="1"

        />
        
       <Question 
        question="What is the difference between echo and print in PHP?" 
        answer="Echo can output one or more string but print can only output one string and always returns 1."
        answer1="Echo is faster than print because it does not return any value."
        flag="1"

        />
        
       <Question 
        question="How a variable is declared in PHP?" 
        answer="A PHP variable is the name of the memory location that holds data. It is temporary storage."
        answer1=" Syntax :- $variableName=value; "
        flag="1"

        />
        
       <Question 
        question="What is the difference between $message and $$message?" 
        answer="$message stores variable data while $$message is used to store variable of variables."
        answer1="$message stores fixed data whereas the data stored in $$message may be changed dynamically."
        flag="1"

        />
        
       <Question 
        question="What are the ways to define a constant in PHP?" 
        answer="PHP constants are name or identifier that can't be changed during execution of the script. PHP constants are defined in two ways:"
        answer1="->Using define() function"
        answer2="->Using const() function"
        flag="1"

        />
        
       <Question 
        question="What are magic constants in PHP?" 
        answer="PHP magic constants are predefined constants, which change based on their use. They start with a double underscore (__) and end with a double underscore (__)."

        />
        
       <Question 
        question="How many data types are there in PHP?" 
        answer="PHP data types are used to hold different types of data or values. There are 8 primitive data types which are further categorized in 3 types:"
        answer1="->Scalar types"
        answer2="-> Compound types"
        anser3="-> Special types"
        flag="1"

        />
        
       <Question 
        question="How to do single and multi line comment in PHP?" 
        answer="->Using // (C++ style single line comment)"
        answer1="->Using # (Unix Shell style single line comment)"
        answer2="PHP multi-line comment is made by enclosing all lines within."
        flag="1"

        />
        
       <Question 
        question="What are the different loops in PHP?" 
        answer="For, while, do-while and for each."

        />
        
       <Question 
        question="What is the use of count() function in PHP?" 
        answer="The PHP count() function is used to count total elements in the array, or something an object."

        />
        
       <Question 
        question="What is the use of header() function in PHP?" 
        answer="The header() function is used to send a raw HTTP header to a client. It must be called before sending the actual output. For example, you can't print any HTML element before using this function."

        />
        
       <Question 
        question="What does isset() function?" 
        answer="The isset() function checks if the variable is defined and not null."

        />
        
       <Question 
        question="Explain PHP parameterized functions." 
        answer="PHP parameterized functions are functions with parameters. You can pass any number of parameters inside a function. These given parameters act as variables inside your function. They are specified inside the parentheses, after the function name. Output depends upon dynamic values passed as parameters into the function."

        />
        
       <Question 
        question="Explain PHP variable length argument function" 
        answer="PHP supports variable length argument function. It means you can pass 0, 1 or n number of arguments in function. To do this, you need to use 3 ellipses (dots) before the argument name. The 3 dot concept is implemented for variable length argument since PHP 5.6."

        />
        
       <Question 
        question="Explain PHP variable length argument function." 
        answer="PHP supports variable length argument function. It means you can pass 0, 1 or n number of arguments."

        />
        
       <Question 
        question="What is the array in PHP?" 
        answer="An array is used to store multiple values in a single value. In PHP, it orders maps of pairs of keys and values. It saves the collection of the data type."

        />
        
       <Question 
        question="How many types of array are there in PHP?" 
        answer="There are three types of array in PHP:"
        answer1="->Indexed array: an array with a numeric key."
        answer2="-> Associative array: an array where each key has its specific value."
        answer3="-> Multidimensional array: an array containing one or more arrays within itself."
        flag="1"
        />
        
       <Question 
        question="What is the difference between indexed and associative array?" 
        answer="The indexed array holds elements in an indexed form which is represented by number starting from 0 and incremented by 1. For example:"
        answer1="->$season=array('s','w','s','a');    "
        answer2=" The associative array holds elements with name. For example:"
        answer3="->$salary=array('S'=>'350000','J'=>'450000','K'=>'200000');    "
        flag="1"

        />
        
       <Question 
        question="How to get the length of string?" 
        answer="The strlen() function is used to get the length of the string."

        />
        
       <Question 
        question=" Explain some of the PHP string functions?" 
        answer="There are many array functions in PHP:"
        answer1="strtolower(), strtoupper(), ucfirst(), lcfirst(), ucwords(), strrev(), strlen()"
        flag="1"
        />
        
       <Question 
        question="What are the methods to submit form in PHP?" 
        answer="There are two methods GET and POST."

        />
        
       <Question 
        question="How can you submit a form without a submit button?" 
        answer="You can use JavaScript submit() function to submit the form without explicitly clicking any submit button."

        />
        
       <Question 
        question="What are the ways to include file in PHP?" 
        answer="PHP allows you to include file so that page content can be reused again. There are two ways to add the file in PHP."
        answer1="include"
        answer2="equire"
        flag="1"

        />
        
       <Question 
        question="Differentiate between require and include?" 
        answer="Require and include both are used to include a file, but if data is not found include sends warning whereas require sends Fatal error."

        />
        
       <Question 
        question="Explain setcookie() function in PHP?" 
        answer="PHP setcookie() function is used to set cookie with HTTP response. Once the cookie is set, you can access it by $_COOKIE superglobal variable."

        />
        
       <Question 
        question=" How can you retrieve a cookie value?" 
        answer="echo $_COOKIE ['user']; "

        />
        
       <Question 
        question="What is a session?" 
        answer="PHP Engine creates a logical object to preserve data across subsequent HTTP requests, which is known as session."
        answer1="Sessions generally store temporary data to allow multiple PHP pages to offer a complete functional transaction for the same user."
        answer2="Simply, it maintains data of an user (browser)."
        flag="1"

        />
        
       <Question 
        question="What is $_SESSION in PHP?" 
        answer="A session creates a file in a temporary directory on the server where registered session variables and their session id are stored. This data will be available to all pages on the site amid that visit."
        answer1="The area of the temporary record is controlled by a setting in the php.ini document called session.save_path."
        flag="1"

        />
        
       <Question 
        question="What is PHP session_start() and session_destroy() function?" 
        answer="PHP session_start() function is used to start the session. It starts new or resumes the current session. It returns the current session if the session is created already. If the session is not available, it creates and returns new sessions."

        />
        
       <Question 
        question="What is the difference between session and cookie?" 
        answer="The main difference between session and cookie is that cookies are stored on user's computer in the text file format while sessions are stored on the server side."
        answer1="Cookies can't hold multiple variables, on the other hand, Session can hold multiple variables."
        answer2="You can manually set an expiry for a cookie, while session only remains active as long as browser is open."
        flag="1"

        />
        
       <Question 
        question="Write syntax to open a file in PHP?" 
        answer="PHP fopen() function is used to open file or URL and returns resource. It accepts two arguments: $filename and $mode."
        answer1="Syntax :- resource fopen ( string $filename , string $mode [, bool $use_include_path = false [, resource $context ]] )  "
        flag="1"

        />
        
       <Question 
        question="How to write in a file in PHP?" 
        answer="PHP fwrite() and fputs() functions are used to write data into file. To write data into a file, you need to use w, r+, w+, x, x+, c or c+ mode."

        />
        
       <Question 
        question="How to delete file in PHP?" 
        answer="The unlink() function is used to delete a file in PHP."
        answer1="bool unlink (string $filename)  "
        flag="1"

        />
        
       <Question 
        question="What is the method to execute a PHP script from the command line?" 
        answer="You should just run the PHP command line interface (CLI) and specify the file name of the script to be executed as follows."

        />
        
       <Question 
        question="How to upload file in PHP?" 
        answer="The move_uploaded_file() function is used to upload file in PHP."
        answer1="bool move_uploaded_file ( string $filename , string $destination )   "
        flag="1"

        />
        
       <Question 
        question="How to download file in PHP?" 
        answer="The readfile() function is used to download the file in PHP."
        answer1="int readfile ( string $filename )     "
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
export default Php;