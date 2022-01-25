import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Python=()=>{

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
        <div id="heading">Interview Question for Python
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is Python?" 
        answer="Python is a high-level, interpreted, general-purpose programming language. Being a general-purpose language, it can be used to build almost any type of application with the right tools/libraries. Additionally, python supports objects, modules, threads, exception-handling and automatic memory management which help in modelling real-world problems and building applications to solve these problems."

        />

       <Question 
        question="What are Python namespaces? Why are they used?" 
        answer="A namespace in Python ensures that object names in a program are unique and can be used without any conflict. Python implements these namespaces as dictionaries with 'name as key' mapped to a corresponding 'object as value'. This allows for multiple namespaces to use the same name and map it to a separate object. A few examples of namespaces are as follows:"
        answer1="-> Local Namespace includes local names inside a function. the namespace is temporarily created for a function call and gets cleared when the function returns."
        answer2="-> Global Namespace includes names from various imported packages/ modules that is being used in the current project. This namespace is created when the package is imported in the script and lasts until the execution of the script."
        flag="1"
        />
        
       <Question 
        question=" What is Python?" 
        answer="Python is a high-level, interpreted, general-purpose programming language. Being a general-purpose language, it can be used to build almost any type of application with the right tools/libraries. Additionally, python supports objects, modules, threads, exception-handling and automatic memory management which help in modelling real-world problems and building applications to solve these problems."

        />
        
       <Question 
        question="What are the benefits of using Python?" 
        answer="Python is a general-purpose programming language that has simple, easy-to-learn syntax which emphasizes readability and therefore reduces the cost of program maintenance. Moreover, the language is capable of scripting, completely open-source and supports third-party packages encouraging modularity and code-reuse."

          annswer1="Its high-level data structures, combined with dynamic typing and dynamic binding, attract a huge community of developers for Rapid Application Development and deployment."
          flag="1"
        />
        
       <Question 
        question="What is a dynamically typed language?" 
        answer="Before we understand what a dynamically typed language, we should learn about what typing is. Typing refers to type-checking in programming languages. In a strongly-typed  language, such as Python, 1 + 2 will result in a type error, since these languages don't allow for type-coercion (implicit conversion of data types). On the other hand, a weakly-typed  language, such as Javascript, will simply output 12 as result."
        answer1="Static - Data Types are checked before execution."
        answer2="Dynamic - Data Types are checked during execution."
        flag="1"

        />
        
       <Question 
        question=" What is an Interpreted language?" 
        answer="An Interpreted language executes its statements line by line. Languages such as Python, Javascript, R, PHP and Ruby are prime examples of Interpreted languages. Programs written in an interpreted language runs directly from the source code, with no intermediary compilation step."

        />
        
       <Question 
        question="What is PEP 8 and why is it important?" 
        answer="PEP stands for Python Enhancement Proposal. A PEP is an official design document providing information to the Python Community, or describing a new feature for Python or its processes. PEP 8 is especially important since it documents the style guidelines for Python Code. Apparently contributing in the Python open-source community requires you to follow these style guidelines sincerely and strictly."

        />
        
       <Question 
        question="How is memory managed in Python?" 
        answer="Memory management in Python is handled by the Python Memory Manager. The memory allocated by the manager is in form of a private heap space dedicated for Python. All Python objects are stored in this heap and being private, it is inaccessible to the programmer. Though, python does provide some core API functions to work upon the private heap space."
        answer1="Additionally, Python has an in-built garbage collection to recycle the unused memory for the private heap space."
        flag="1"

        />
        
       <Question 
        question=" What are the key features of Python?" 
        answer="->Python is an interpreted language. That means that, unlike languages like C and its variants, Python does not need to be compiled before it is run. Other interpreted languages include PHP and Ruby."
        answer1="-> Python is dynamically typed, this means that you don’t need to state the types of variables when you declare them or anything like that. You can do things like x=111 and then x='I'm a string 'without error"
        answer2="-> Python is well suited to object orientated programming in that it allows the definition of classes along with composition and inheritance. Python does not have access specifiers (like C++’s public, private)."
        flag="1"

        />
        
       <Question 
        question="What type of language is python? Programming or scripting?" 
        answer="Python is capable of scripting, but in general sense, it is considered as a general-purpose programming language. To know more about Scripting, you can refer to the Python Scripting Tutorial."

        />
        
       <Question 
        question="What are Python namespaces? Why are they used?" 
        answer="A namespace in Python ensures that object names in a program are unique and can be used without any conflict. Python implements these namespaces as dictionaries with 'name as key' mapped to a corresponding 'object as value'. This allows for multiple namespaces to use the same name and map it to a separate object."

        />
        
       <Question 
        question="What is PYTHONPATH?" 
        answer="It is an environment variable which is used when a module is imported. Whenever a module is imported, PYTHONPATH is also looked up to check for the presence of the imported modules in various directories. The interpreter uses it to determine which module to load."

        />
        
       <Question 
        question="What are python modules? Name some commonly used built-in modules in Python?" 
        answer="Python modules are files containing Python code. This code can either be functions classes or variables. A Python module is a .py file containing executable code."
        answer1=" Some of the commonly used built-in modules are: os, sys, math, random ,data time, JSON"
        flag="1"

        />
        
       <Question 
        question="What is Scope in Python?" 
        answer="Every object in Python functions within a scope. A scope is a block of code where an object in Python remains relevant. Namespaces uniquely identify all the objects inside a program. However, these namespaces also have a scope defined for them where you could use their objects without any prefix. A few examples of scope created during code execution in Python are as follows:"
        answer1="A local scope refers to the local objects available in the current function."
        answer2="A global scope refers to the objects available throught the code execution since their inception."
        answer3="A module-level scope refers to the global objects of the current module accessible in the program."
        answer4="An outermost scope refers to all the built-in names callable in the program. The objects in this scope are searched last to find the name referenced"
        flag="1"

        />
        
       <Question 
        question="What are decorators in Python?" 
        answer="Decorators in Python are essentially functions that add functionality to an existing function in Python without changing the structure of the function itself. They are represented by the @decorator_name in Python and are called in bottom-up fashion."

        />
        
       <Question 
        question="What are lists and tuples? What is the key difference between the two?" 
        answer="Lists and Tuples are both sequence data types that can store a collection of objects in Python. The objects stored in both sequences can have different data types. Lists are represented with square brackets ['sara', 6, 0.19], while tuples are represented with parantheses ('ansh', 5, 0.97)."
        answer1="But what is the real difference between the two? The key difference between the two is that while lists are mutable, tuples on the other hand are immutable objects. This means that lists can be modified, appended or sliced on-the-go but tuples remain constant and cannot be modified in any manner."
        flag="1"
        />
        
       <Question 
        question=" Is indentation required in python?" 
        answer="Indentation is necessary for Python. It specifies a block of code. All code within loops, classes, functions, etc is specified within an indented block. It is usually done using four space characters. If your code is not indented necessarily, it will not execute accurately and will throw errors as well"

        />
        
       <Question 
        question="What is the difference between Python Arrays and lists?" 
        answer="Arrays and lists, in Python, have the same way of storing data. But, arrays can hold only a single data type elements whereas lists can hold any data type elements."

        />
        
       <Question 
        question="What are Dict and List comprehensions?" 
        answer="Python comprehensions, like decorators, are syntactic sugar constructs that help build altered and filtered lists, dictionaries or sets from a given list, dictionary or set. Using comprehensions, saves a lot of time and code that might be considerably more verbose (containing more lines of code)."

        />
        
       <Question 
        question="What are functions in Python?" 
        answer="A function is a block of code which is executed only when it is called. To define a Python function, the def keyword is used."

        />
        
       <Question 
        question="What is __init__?" 
        answer="__init__ is a method or constructor in Python. This method is automatically called to allocate memory when a new object/ instance of a class is created. All classes have the __init__ method."

        />
        
       <Question 
        question=" What are the common built-in data types in Python?" 
        answer="There are several built-in data types in Python. Although, Python doesn't require data types to be defined explicitly during variable declarations but type errors are likely to occur if the knowledge of data types and their compatibility with each other are neglected. Python provides type() and isinstance() functions to check the type of these variables"

        />
        
       <Question 
        question="What is a lambda function?" 
        answer="An anonymous function is known as a lambda function. This function can have any number of parameters but, can have just one statement."

        />
        
       <Question 
        question="What is self in Python?" 
        answer="Self is an instance or an object of a class. In Python, this is explicitly included as the first parameter. However, this is not the case in Java where it’s optional.  It helps to differentiate between the methods and attributes of a class with local variables."
        answer1=" The self variable in the init method refers to the newly created object while in other methods, it refers to the object whose method was called."
        flag="1"

        />
        
       <Question 
        question="How do you copy an object in Python?" 
        answer="In Python, the assignment statement (= operator) does not copy objects. Instead, it creates a binding between the existing object and the target variable name. To create copies of an object in Python, we need to use the copy module. Moreover, there are two ways of creating copies for the given object using the copy module -"
        answer1=" Shallow Copy is a bit-wise copy of an object. The copied object created has an exact copy of the values in the original object. If either of the values are references to other objects, just the reference addresses for the same are copied."
        answer2=" Deep Copy copies all values recursively from source to target object, i.e. it even duplicates the objects referenced by the source object."
        flag="1"

        />
        
       <Question 
        question="What does [::-1} do?" 
        answer="[::-1] is used to reverse the order of an array or a sequence."
        answer1="[::-1] reprints a reversed copy of ordered data structures such as an array or a list. the original array or list remains unchanged."
        flag="1"

        />
        
       <Question 
        question="What is the difference between xrange and range in Python?" 
        answer="xrange() and range() are quite similar in terms of functionality. They both generate a sequence of integers, with the only difference that range() returns a Python list, whereas, xrange() returns an xrange object."
        answer1="So how does that make a difference? It sure does, because unlike range(), xrange() doesn't generate a static list, it creates the value on the go. This technique is commonly used with an object type generators and has been termed as 'yielding'."
        answer2="Yielding is crucial in applications where memory is a constraint. Creating a static list as in range() can lead to a Memory Error in such conditions, while, xrange() can handle it optimally by using just enough memory for the generator (significantly less in comparison)."
        flag="1"
        />
        
       <Question 
        question="What are python iterators?" 
        answer="Iterators are objects which can be traversed though or iterated upon."

        />
        
       <Question 
        question=" What is the difference between range & xrange?" 
        answer="For the most part, xrange and range are the exact same in terms of functionality. They both provide a way to generate a list of integers for you to use, however you please. The only difference is that range returns a Python list object and x range returns an xrange object."
        answer1="This means that xrange doesn’t actually generate a static list at run-time like range does. It creates the values as you need them with a special technique called yielding. This technique is used with a type of object known as generators. That means that if you have a really gigantic range you’d like to generate a list for, say one billion, xrange is the function to use."
        answer2="This is especially true if you have a really memory sensitive system such as a cell phone that you are working with, as range will use as much memory as it can to create your array of integers, which can result in a Memory Error and crash your program. It’s a memory hungry beast."
        flag="1"

        />
        
       <Question 
        question=" How do you write comments in python?" 
        answer="Comments in Python start with a # character. However, alternatively at times, commenting is done using docstrings(strings enclosed within triple quotes)."

        />
        
       <Question 
        question="How will you capitalize the first letter of string?" 
        answer="In Python, the capitalize() method capitalizes the first letter of a string. If the string already consists of a capital letter at the beginning, then, it returns the original string."

        />
        
       <Question 
        question=" How will you convert a string to all lowercase?" 
        answer="To convert a string to lowercase, lower() function can be used."

        />
        
       <Question 
        question="What are docstrings in Python?" 
        answer=" Docstrings are not actually comments, but, they are documentation strings. These docstrings are within triple quotes. They are not assigned to any variable and therefore, at times, serve the purpose of comments as well."

        />
        
       <Question 
        question="What is the purpose of is, not and in operators?" 
        answer="Operators are special functions. They take one or more values and produce a corresponding result."
        answer1="is: returns true when 2 operands are true  (Example: “a” is ‘a’)"
        answer2="not: returns the inverse of the boolean value"
        answer3="in: checks if some element is present in some sequence"
        flag="1"

        />
        
       <Question 
        question="What is the usage of help() and dir() function in Python?" 
        answer=" Help() and dir() both functions are accessible from the Python interpreter and used for viewing a consolidated dump of built-in functions. "
        answer1="Help() function: The help() function is used to display the documentation string and also facilitates you to see the help related to modules, keywords, attributes, etc."
        answer2="Dir() function: The dir() function is used to display the defined symbols."
        flag="1"

        />
        
       <Question 
        question="Whenever Python exits, why isn’t all the memory de-allocated?" 
        answer="Whenever Python exits, especially those Python modules which are having circular references to other objects or the objects that are referenced from the global namespaces are not always de-allocated or freed."
        answer1="It is impossible to de-allocate those portions of memory that are reserved by the C library."
        answer2="On exit, because of having its own efficient clean up mechanism, Python would try to de-allocate/destroy every other object."
        flag="1"

        />
        
       <Question 
        question="What is a dictionary in Python?" 
        answer=" The built-in datatypes in Python is called dictionary. It defines one-to-one relationship between keys and values. Dictionaries contain pair of keys and their corresponding values. Dictionaries are indexed by keys."

        />
        
       <Question 
        question="What does this mean: *args, **kwargs? And why would we use it?" 
        answer="We use *args when we aren’t sure how many arguments are going to be passed to a function, or if we want to pass a stored list or tuple of arguments to a function. **kwargs is used when we don’t know how many keyword arguments will be passed to a function, or it can be used to pass the values of a dictionary as keyword arguments. The identifiers args and kwargs are a convention, you could also use *bob and **billy but that would not be wise."

        />
        
       <Question 
        question=" What are negative indexes and why are they used?" 
        answer="The sequences in Python are indexed and it consists of the positive as well as negative numbers. The numbers that are positive uses ‘0’ that is uses as first index and ‘1’ as the second index and the process goes on like that."
        answer1="The index for the negative number starts from ‘-1’ that represents the last index in the sequence and ‘-2’ as the penultimate index and the sequence carries forward like the positive number."
        answer2="The negative index is used to remove any new-line spaces from the string and allow the string to except the last character that is given as S[:-1]. The negative index is also used to show the index to represent the string in correct order."
        flag="1"

        />
        
       <Question 
        question=" What are Python packages?" 
        answer="Python packages are namespaces containing multiple modules."

        />
        
       <Question 
        question="How can files be deleted in Python?" 
        answer="To delete a file in Python, you need to import the OS Module. After that, you need to use the os.remove() function."

        />
        
       <Question 
        question=" Does python support multiple inheritance?" 
        answer=" Multiple inheritance means that a class can be derived from more than one parent classes. Python does support multiple inheritance, unlike Java."

        />
        
       <Question 
        question="Explain what Flask is and its benefits?" 
        answer="Flask is a web microframework for Python based on “Werkzeug, Jinja2 and good intentions” BSD license. Werkzeug and Jinja2 are two of its dependencies. This means it will have little to no dependencies on external libraries.  It makes the framework light while there is a little dependency to update and fewer security bugs."
        answer1="A session basically allows you to remember information from one request to another. In a flask, a session uses a signed cookie so the user can look at the session contents and modify. The user can modify the session if only it has the secret key Flask.secret_key."
        flag="1"

        />
        
       <Question 
        question="Mention what the Django templates consist of." 
        answer="The template is a simple text file.  It can create any text-based format like XML, CSV, HTML, etc.  A template contains variables that get replaced with values when the template is evaluated and tags (% tag %) that control the logic of the template."

        />
        
       <Question 
        question="What is map function in Python?" 
        answer=" map function executes the function given as the first argument on all the elements of the iterable given as the second argument. If the function given takes in more than 1 arguments, then many iterables are given. #Follow the link to know more similar functions."

        />
        
       <Question 
        question="What is the difference between NumPy and SciPy?" 
        answer="In an ideal world, NumPy would contain nothing but the array data type and the most basic operations: indexing, sorting, reshaping, basic elementwise functions, et cetera."
        answer1="All numerical code would reside in SciPy. However, one of NumPy’s important goals is compatibility, so NumPy tries to retain all features supported by either of its predecessors"
        answer2="Thus NumPy contains some linear algebra functions, even though these more properly belong in SciPy. In any case, SciPy contains more fully-featured versions of the linear algebra modules, as well as many other numerical algorithms."
        answer3="If you are doing scientific computing with python, you should probably install both NumPy and SciPy. Most new features belong in SciPy rather than NumPy."
        flag="1"

        />
       <Question 
        question="How do you make 3D plots/visualizations using NumPy/SciPy?" 
        answer="Like 2D plotting, 3D graphics is beyond the scope of NumPy and SciPy, but just as in the 2D case, packages exist that integrate with NumPy. Matplotlib provides basic 3D plotting in the mplot3d subpackage, whereas Mayavi provides a wide range of high-quality 3D visualization features, utilizing the powerful VTK engine."

        />
       <Question 
        question="What is the maximum possible length of an identifier?" 
        answer="Identifiers can be of any length."

        />
       <Question 
        question="Why are local variable names beginning with an underscore discouraged?" 
        answer="As Python has no concept of private variables, leading underscores are used to indicate variables that must not be accessed from outside the class."

        />
       <Question 
        question="When will the else part of try-except-else be executed?" 
        answer="The else part is executed when no exception occurs."

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
export default Python;