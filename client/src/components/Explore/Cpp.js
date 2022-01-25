import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';
import Crousal from '../Crousal';
import Question from '../Explore/Question'
const Cpp=()=>{

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
        <div id="heading">Interview Question for C++ 
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is C++?" 
        answer="As an extension of the C language, C++ was developed by Bjarne Stroustrup as a general purpose cross-platform language which gives programmers a high level of control over system resources and memory."

        />

       <Question 
        question="What is namespace in C++?" 
        answer="If there are two or more functions with the same name defined in different libraries then how will the compiler know which one to refer to? Thus namespace came to picture. A namespace defines a scope and differentiates functions, classes, variables etc. with the same name available in different libraries. The namespace starts with the keyword 'namespace'"

        />
        
       <Question 
        question="How to input string in C++?" 
        answer="There are three ways to input a string, using cin, get, and getline. All three methods are mentioned in the sample program below"
        answer1="-> cin >> str;"
        answer2="->  getline(cin, str);"
        answer3="-> cin.get(s, 10)"
        flag="1"
        />
        
       <Question 
        question="What is operator overloading in C++?" 
        answer="An overloaded declaration is a declaration in the same scope of function or operator declared with the same name more than once."

        />
        
       <Question 
        question="What is the difference between C and C++?" 
        answer="The difference between c and c++ is that C++ is a object oriented language, which means that it has all the features of C as well as its own thing that is the concept of OOP. C++ has many functionalities of OOP that are missing from C such as encapsulation, abstraction, classes, objects, etc."

        />
        
       <Question 
        question="What are the Comments in C++?" 
        answer="Comments in C++ are simply a piece of source code ignored by the compiler. They are only helpful for a programmer to add a description or additional information about their source code."
        answer1="//single-line comment"

        answer2="/* block comment */"
        answer3="The first type will discard everything after the compiler encounters “//”. In the second type, the compiler discards everything between “/*” and “*/”."
        flag="1"

        />
        
       <Question 
        question="Difference between Declaration and Definition of a variable." 
        answer=" The declaration of a variable is merely specifying the data type of a variable and the variable name. As a result of the declaration, we tell the compiler to reserve the space for a variable in the memory according to the data type specified."
        answer1="Whereas, a definition is an implementation/instantiation of the declared variable where we tie up appropriate value to the declared variable so that the linker will be able to link references to the appropriate entities."
        flag="1"

        />
        
       <Question 
        question="Comment on Local and Global scope of a variable." 
        answer="The scope of a variable is defined as the extent of the program code within which the variable remains active i.e. it can be declared, defined or worked with."
        answer1="Local Scope: A variable is said to have a local scope or is local when it is declared inside a code block. The variable remains active only inside the block and is not accessible outside the code block."
        answer2="Global Scope: A variable has a global scope when it is accessible throughout the program. A global variable is declared on top of the program before all the function definitions."
        flag="1"
        />
        
       <Question 
        question="What is the precedence when there are a Global variable and a Local variable in the program with the same name?" 
        answer="Whenever there is a local variable with the same name as that of a global variable, the compiler gives precedence to the local variable."

        />
        
       <Question 
        question=" When there are a Global variable and Local variable with the same name, how will you access the global variable?" 
        answer="When there are two variables with the same name but different scope, i.e. one is a local variable and the other is a global variable, the compiler will give preference to a local variable."
        answer1="In order to access the global variable, we make use of a “scope resolution operator (::)”. Using this operator, we can access the value of the global variable."
        answer2=" => cout<<”Global Variable x = “<<::x;"
        flag="1"

        />
        
       <Question 
        question="How many ways are there to initialize an int with a Constant?" 
        answer="->The first format uses traditional C notation."
        answer2="=>int result = 10;"
        answer3="->The second format uses the constructor notation."
        answer4="=>int result (10);"
        flag="1"
        />
        
       <Question 
        question="What is the difference between equal to (==) and Assignment Operator (=)?" 
        answer=" In C++, equal to (==) and assignment operator (=) are two completely different operators."
        answer1="->Equal to (==) is an equality relational operator that evaluates two expressions to see if they are equal and returns true if they are equal and false if they are not."
        answer2="->The assignment operator (=) is used to assign a value to a variable. Hence, we can have a complex assignment operation inside the equality relational operator for evaluation."
        flag="1"
        />
        
       <Question 
        question="What are the various Compound Assignment Operators in C++?" 
        answer="+=, -=, *=, /=, %=, >>=, <<=, &=, ^=,|="
        answer1="Compound assignation operator is one of the most  important features of C++ language which allow us to change the value of a variable with one of the basic operators"
        flag="1"

        />
        
       <Question 
        question=" State the difference between Pre and Post Increment/Decrement Operations." 
        answer="C++ allows two operators i.e ++ (increment) and –(decrement), that allow you to add 1 to the existing value of a variable and subtract 1 from the variable respectively. These operators are in turn, called increment (++) and decrement (-–)."
        answer1="In the case of the pre-increment/decrement operator, the increment/decrement operation is carried out first and then the result passed to an lvalue. Whereas for post-increment/decrement operations, the lvalue is evaluated first and then increment/decrement is performed accordingly."
        flag="1"

        />
        
       <Question 
        question="What are the Extraction and Insertion operators in C++? Explain with examples." 
        answer="In the iostream.h library of C++, cin, and cout are the two data streams that are used for input and output respectively. Cout is normally directed to the screen and cin is assigned to the keyboard."
        answer1="“cin” (extraction operator): By using overloaded operator >> with cin stream, C++ handles the standard input."
        answer2="cin>>age;"
        answer3="As shown in the above example, an integer variable ‘age’ is declared and then it waits for cin (keyboard) to enter the data. “cin” processes the input only when the RETURN key is pressed."
        answer4="“cout” (insertion operator): This is used in conjunction with the overloaded << operator. It directs the data that followed it into the cout stream."
        answer5="cout<<”Hello, World!”;"
  
        flag="1"

        />
        
       <Question 
        question="What is the difference between while and do while loop?" 
        answer="The statement block under while is executed as long as the condition in the given expression is true."
        answer1="In case of the while loop, we can directly exit the loop at the beginning, if the condition is not met whereas in the do-while loop we execute the loop statements at least once."
        flag="1"

        />
        
       <Question 
        question="What is pointer in C++?" 
        answer="Pointers in C++ are a data type that store the memory address of another variable."
        answer1="=> syntax= int * ptr= a;"

        />
        
       <Question 
        question="What is function in C++?" 
        answer="A function in C++ is a block of code that can be referenced from anywhere in the system and that serves a specific purpose."

        />
        
       <Question 
        question="What is destructor in C++?" 
        answer="Destructors in c++ are special function/methods that are used to remove memory allocation for objects. They are called usually when the scope of an object ends. eg. when a function ends you can call a destructor. They are of the same name as the class – syntax – ~<classname>();"

        />
        
       <Question 
        question="What do you mean by ‘void’ return type?" 
        answer="In case, if we don’t want a function to return any value, we use “void” to indicate that. This means that we use “void” to indicate that the function has no return value or it returns “void”."

        />
        
       <Question 
        question="Explain Pass by Value and Pass by Reference." 
        answer="While passing parameters to the function using “Pass by Value”, we pass a copy of the parameters to the function."
        answer1="=>      void printFunc(int a,int b,int c)"
        answer2="if we want to get the changed values from the function back to the calling function, then we use the “Pass by Reference” technique."
        answer3="=>      void printFunc(int& a,int& b,int& c)"
        flag="1"

        />
        
       <Question 
        question="What are Default Parameters? How are they evaluated in the C++ function?" 
        answer="Default Parameter is a value that is assigned to each parameter while declaring a function."
        answer2="This value is used if that parameter is left blank while calling to the function. To specify a default value for a particular parameter, we simply assign a value to the parameter in the function declaration."
        answer3="If the value is not passed for this parameter during the function call, then the compiler uses the default value provided. If a value is specified, then this default value is stepped on and the passed value is used."
        answer4="int multiply(int a, int b=2)"
        flag="1"

        />
        
       <Question 
        question="What is an Inline function in C++?" 
        answer=" Inline function is a function that is compiled by the compiler as the point of calling the function and the code is substituted at that point. This makes compiling faster. This function is defined by prefixing the function prototype with the keyword “inline”."
        answer1="Such functions are advantageous only when the code of the inline function is small and simple. Although a function is defined as Inline, it is completely compiler dependent to evaluate it as inline or not."
        flag="1"

        />
        
       <Question 
        question="Who invented C++?" 
        answer="Bjarne Stroustrup invented C++ in 1985."

        />
        
       <Question 
        question="How to convert integer to string in C++?" 
        answer="string s= to_string(n);   where n is the integer"

        />
        
       <Question 
        question="What is function overloading in C++?" 
        answer="Function Overloading happens in C++ when two or more functions share the same name. They can be differentiated on the basis of the type of data they are passing as parameters or even the number of paramters they are passing. eg. int fun(char a); & int fun(int b); & void fun(int a, int b)"

        />
        
       <Question 
        question="What is stl in C++?" 
        answer="Stl is the standard template library. It is a library that allows you to use a standard set of templates for things such as: Algorithms, functions, Iterators in place of actual code."

        />
        
       <Question 
        question="What is type casting in C++?" 
        answer="Type casting in C is used to change the data type. They are of two types: Implicit Type Conversion: It is automatic. Explicit Type Conversion: It is user-defined."

        />
        
       <Question 
        question="What is stream in C++?" 
        answer="Stream refers to a stream of characters to be transferred between program thread and i/o"

        />
        
       <Question 
        question="How to clear screen in C++?" 
        answer="One can clear screen using – clrscr() or system(“clear”)."

        />
        
       <Question 
        question="How many keywords in C++ ?" 
        answer="There are 95 reserved keywords in C++ which are not available for re-definition or overloading."

        />
        
       <Question 
        question="How to use goto statement in C++ ?" 
        answer="Goto statement provided unconditional jump in the code."

        />
        
       <Question 
        question="State the difference between delete and delete[]." 
        answer="“delete[]” is used to release the memory allocated to an array which was allocated using new[]. “delete” is used to release one chunk of memory which was allocated using new."

        />
        
       <Question 
        question=" What is a Reference Variable in C++?" 
        answer="A reference variable is an alias name for the existing variable. This means that both the variable name and the reference variable point to the same memory location. Hence, whenever the variable is updated, the reference is updated too."

        />
        
       <Question 
        question="What is a Storage Class? Mention the Storage Classes in C++." 
        answer="Storage class determines the life or scope of symbols such as variable or functions."
        answer1="examples: Auto ,Static, Extern ,Register ,Mutable"
        flag="1"

        />
        
       <Question 
        question="Explain Mutable Storage class specifier." 
        answer=" The variable of a constant class object’s member cannot be changed. However, by declaring the variables as “mutable”, we can change the values of these variables."

        />
        
       <Question 
        question="What is a Static Variable?" 
        answer="A static variable is a local variable that retains its value across the function calls. Static variables are declared using the keyword “static”. Numeric variables which are static have the default value as zero."

        />
        
       <Question 
        question="Explain Register Storage Specifier." 
        answer="“Register” variable should be used whenever the variable is used. When a variable is declared with a “register” specifier, then the compiler gives CPU register for its storage to speed up the lookup of the variable."

        />
        
       <Question 
        question="Difference between Class and Structure." 
        answer="Structure =>In C language, the structure is used to bundle different types of data types together. The variables inside a structure are called the members of the structure. These members are by default public and can be accessed by using the structure name followed by a dot operator and then the member name."
        answer1="Class => Class is a successor of the Structure. C++ extends the structure definition to include the functions that operate on its members. By default all the members inside the class are private."
        flag="1"

        />
        
       <Question 
        question="What is the use of ‘using’ declaration?" 
        answer="Using Declaration is used to refer a name from the namespace without the scope resolution operator."

        />
        
       <Question 
        question="What is Name Mangling?" 
        answer="C++ compiler encodes the parameter types with function/method into a unique name. This process is called name mangling. The inverse process is called as demangling."

        />
        
       <Question 
        question="Which operator cannot be overloaded in C++ ?" 
        answer="Some of the operators that cannot be overloaded are as follows:"
        answer1="-> Dot operator- “.”"
        answer2="-> Scope resolution operator- “::”"
        answer3="-> “sizeof” operator"
        answe4="-> Pointer to member operator- “.*”"
        flag="1"

        />
        
       <Question 
        question="How to set decimal places in C++ ?" 
        answer="For limiting the decimal places in C++ there are five functions : floor(), ceil(), trunc(), round() and setprecision(). Out of these five, only setprecision() function is used for setting the decimal places to put as output."

        />
        
       <Question 
        question="What is conio.h in C++?" 
        answer="Conio.h is a header file used for console input and output operations and is used for creating text based user interfaces."

        />
        
       <Question 
        question="What is iterator in C++?" 
        answer="Any object which has an ability to iterate through elements of the range it has been pointing to is called iterator."

        />
        
       <Question 
        question="What is enum in C++?" 
        answer="enum is abbreviation of Enumeration which assigns names to integer constant to make a program easy to read. Syntax for the same:"
         answer1=" enum enum_name{const1, const2, ……. };"
        flag="!"

        />

         <Question 
        question="How to include all libraries in C++?" 
        answer="The library <bits/stdc++.h> in c++ is used to include all the libraries."

        />


       <Question 
        question="How to use strcmp function in C++?" 
        answer="strcmp() function is an in-built function of <string.h> header file which takes two strings as arguments and compares these two strings lexicographically."

        />
       <Question 
        question="What is exception handling in C++?" 
        answer="Exceptions are errors that happen during execution of code. To handle them we use throw, try & catch keywords."

        />
       <Question 
        question="What is vector in C++?" 
        answer="A sequence of containers to store elements, a vector is a template class of C++. Vectors are used when managing ever-changing data elements. The syntax of creating vector."
        answer1="vector <type> variable (number of elements)"
        flag="1"

        />
       <Question 
        question="What are templates in C++?" 
        answer="A feature that allows functions and classes to operate with generic types that means a function or class can work on different data types without being rewritten is called template."

        />
       <Question 
        question="What is pure virtual function in C++?" 
        answer="A pure virtual function is a type of virtual function which does not have implementation, but is only declared. It is declared by assigning 0 in declaration. "

        />

        <Question 
        question="What is segmentation fault in C++?" 
        answer="Segmentation fault indicates an error memory corruption. In layman terms, when a piece of code tries to do read and write operation in a read only location in memory"

        />
        <Question 
        question="How to find length of array in C++?" 
        answer="The length of an array in C++ can be calculated using sizeof() function."

        />
        <Question 
        question="How to set precision in C++?" 
        answer="Precision in C++ can be set by using the following functions- floor(), ceil(), round(), trunc() and setprecision()."

        />
        <Question 
        question="How to access private members of a class in C++?" 
        answer="Private members of the class are not accessible by object or function outside the class. Only functions inside the class can access them or friend functions. However, pointers can be used to access private data members outside the class."

        />
        <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

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
export default Cpp;