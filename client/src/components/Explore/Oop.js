import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Oop=()=>{

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
        <div id="heading">Interview Question for Object Oriented Programming
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is Object Oriented Programming? " 
        answer="Object Oriented Programming (OOP) is a programming paradigm where the complete software operates as a bunch of objects talking to each other. An object is a collection of data and methods that operate on its data"

        />

       <Question 
        question="What is the need for OOPs?" 
        answer="There are many reasons why OOPs is mostly preferred, but the most important among them are: "
        answer1="OOPs helps users to understand the software easily, although they don’t know the actual implementation."
        answer2="With OOPs, the readability, understandability, and maintainability of the code increase multifold."
        answer3="Even very big software can be easily written and managed easily using OOPs."
        flag="1"

        />
        
       <Question 
        question="What are some other programming paradigms other than OOPs?" 
        answer="Programming paradigms refers to the method of classification of programming languages based on their features. There are mainly two types of Programming Paradigms:"
        answer1=" Imperative Programming Paradigm: Imperative programming focuses on HOW to execute program logic and defines control flow as statements that change a program state."
        answer2=" Declarative Programming Paradigm: Declarative programming focuses on WHAT to execute and defines program logic, but not a detailed control flow."
        flag="1"

        />
        
       <Question 
        question="What are the main features of OOPs?" 
        answer="OOPs or Object Oriented Programming mainly comprises of the below four features, and make sure you don't miss any of these:"
        answer1=" ->Inheritance"
         answer2=" ->Encapsulation"
         answer3=" ->Polymorphism"
         answer4=" ->Data Abstraction"
         flag="1"

        />
        
       <Question 
        question="What are Manipulators?" 
        answer="Manipulators are the functions which can be used in conjunction with the insertion (<<) and extraction (>>) operators on an object. Examples are endl and setw."

        />
        
       <Question 
        question="What is class?" 
        answer="A class can be understood as a template or a blueprint, which contains some values, known as member data or member, and some set of rules, known as behaviors or functions. So when an object is created, it automatically takes the data and functions that are defined in the class."
        answer1="Therefore the class is basically a template or blueprint for objects. Also one can create as many objects as they want based on a class."
        flag="1"

        />
        
       <Question 
        question="What is an object?" 
        answer="An object refers to the instance of the class, which contains the instance of the members and behaviors defined in the class template. In the real world, an object is an actual entity to which a user interacts, whereas class is just the blueprint for that object. So the objects consume space and have some characteristic behavior."

        />
        
       <Question 
        question="What is Constructor?" 
        answer="Constructor is a block of code that initializes the newly created object. A constructor resembles an instance method in java but it’s not a method as it doesn’t have a return type."

        />
        
       <Question 
        question="What is destructor?" 
        answer="A destructor is a method which is automatically called when the object is made of scope or destroyed. Destructor name is also same as class name but with the tilde symbol before the name."

        />
        
       <Question 
        question="How does C++ support Polymorphism?" 
        answer="C++ is an Object-oriented programming language and it supports Polymorphism as well:"
        answer1="->Compile Time Polymorphism: C++ supports compile-time polymorphism with the help of features like templates, function overloading, and default arguments."
        answer2="->Runtime Polymorphism: C++ supports Runtime polymorphism with the help of features like virtual functions. Virtual functions take the shape of the functions based on the type of object in reference and are resolved at runtime."
        flag="1"

        />
        
       <Question 
        question="How much memory does a class occupy?" 
        answer="Classes do not consume any memory. They are just a blueprint based on which objects are created. Now when objects are created, they actually initialize the class members and methods and therefore consume memory."

        />
        
       <Question 
        question=" Is it always necessary to create objects from class?" 
        answer="No. An object is necessary to be created if the base class has non-static methods. But if the class has static methods, then objects don’t need to be created. You can call the class method directly in this case, using the class name."

        />
        
       <Question 
        question="Are class and structure the same? If not, what's the difference between a class and a structure?" 
        answer="No, class and structure are not the same. Though they appear to be similar, they have differences that make them apart. For example, the structure is saved in the stack memory, whereas the class is saved in the heap memory. Also, Data Abstraction cannot be achieved with the help of structure, but with class, Abstraction is majorly used."
        

        />
        
       <Question 
        question="What is a virtual function?" 
        answer="A virtual function is a member function of a class, and its functionality can be overridden in its derived class. This function can be implemented by using a keyword called virtual, and it can be given during function declaration."
        answer1="A virtual function can be declared using a token(virtual) in C++. It can be achieved in C/Python Language by using function pointers or pointers to function"
        flag="1"

        />
        
       <Question 
        question="What is a friend function?" 
        answer="A friend function is a friend of a class that is allowed to access to Public, private, or protected data in that same class. If the function is defined outside the class cannot access such information."
      answer1="A friend can be declared anywhere in the class declaration, and it cannot be affected by access control keywords like private, public, or protected."
        flag="1"

        />
        
       <Question 
        question="What is operator overloading?" 
        answer="Operator overloading is a function where different operators are applied and depends on the arguments. Operator,-,* can be used to pass through the function, and it has its own precedence to execute"

        />


        <Question 
        question="Is it compulsory on creation of object,constructor is called" 
        answer="Yes, if you don't make any constructor in class, the compiler itselt create an default constructor"

        />
        
       <Question 
        question="What is an abstract class?" 
        answer="An abstract class is a class which cannot be instantiated. Creation of an object is not possible with an abstract class, but it can be inherited. An abstract class can contain only an Abstract method. Java allows only abstract method in abstract class while other languages allow non-abstract method as well."

        />
        
       <Question 
        question="What is the use of finalize method?" 
        answer="Finalize method helps to perform cleanup operations on the resources which are not currently used. Finalize method is protected, and it is accessible only through this class or by a derived class."

        />


        <Question 

        question="What is the difference between new and override?" 
        answer="The new modifier instructs the compiler to use the new implementation instead of the base class function. Whereas, Override modifier helps to override the base class function."

        />
        
       <Question 
        question=" What is the difference between overloading and overriding?" 
        answer="Overloading is a compile-time polymorphism feature in which an entity has multiple implementations with the same name. For example, Method overloading and Operator overloading."
        answer1="Whereas Overriding is a runtime polymorphism feature in which an entity has the same name, but its implementation changes during execution. For example, Method overriding."
        flag="1"

        />
        
       <Question 
        question="What is an exception?" 
        answer="An exception can be considered as a special event, which is raised during the execution of a program at runtime, that brings the execution to a halt. The reason for the exception is mainly due to a position in the program, where the user wants to do something for which the program is not specified, like undesirable input."

        />
        
       <Question 
        question="What is meant by exception handling?" 
        answer="No one wants its software to fail or crash. Exceptions are the major reason for software failure. The exceptions can be handled in the program beforehand and prevent the execution from stopping. This is known as exception handling.So exception handling is the mechanism for identifying the undesirable states that the program can reach and specifying the desirable outcomes of such states."
       answer1="Try-catch is the most common method used for handling exceptions in the program."
       flag="1"

        />
        
       <Question 
        question="What is meant by Garbage Collection in OOPs world?" 
        answer="Object-oriented programming revolves around entities like objects. Each object consumes memory and there can be multiple objects of a class. So if these objects and their memories are not handled properly, then it might lead to certain memory-related errors and the system might fail."
        answer1="Garbage collection refers to this mechanism of handling the memory in the program. Through garbage collection, the unwanted memory is freed up by removing the objects that are no longer needed."
        flag="1"

        />
        
       <Question 
        question="What are sealed modifiers?" 
        answer="Sealed modifiers are the access modifiers where the methods can not inherit it. Sealed modifiers can also be applied to properties, events, and methods. This modifier cannot be used to static members."

        />
        
      
        
       <Question 
        question="What is early and late Binding?" 
        answer="Early binding refers to the assignment of values to variables during design time, whereas late Binding refers to the assignment of values to variables during run time."

        />
        
       <Question 
        question=" What is ‘this’ pointer?" 
        answer="THIS pointer refers to the current object of a class. THIS keyword is used as a pointer which differentiates between the current object with the global object. It refers to the current object."

        />
        
       <Question 
        question="What is a pure virtual function?" 
        answer="A pure virtual function is a function which can be overridden in the derived class but cannot be defined. A virtual function can be declared as Pure by using the operator =0."

        />
        
       <Question 
        question="What is a copy constructor?" 
        answer="This is a special constructor for creating a new object as a copy of an existing object. There will always be only one copy constructor that can be either defined by the user or the system."

        />
        
       <Question 
        question="What is hybrid inheritance?" 
        answer="Combination of multiple and multi-level inheritance is known as hybrid inheritance."

        />
        
       <Question 
        question="How to achieve data abstraction?" 
        answer="Data abstraction can be achieved using two ways:"
        answer1=" ->Abstract class"
        answer2=" ->Abstract method"
        flag="1"

        />
        
       <Question 
        question=" What is a final variable?" 
        answer="The final variable does not change and It always refers to the same object by the property of non-transversity."

        />
        
       <Question 
        question="What is a finally block?" 
        answer="A finally block executes when the try block exits and It also executes even in case some unexpected exception is encountered. Finally block normally consists of some important part of the program."

        />
        
       <Question 
        question="Can you call the base class method without creating an instance?" 
        answer="•Yes, you are allowed to call the base class without instantiating it but there are some conditions that are applicable:"
        answer1=" ->If it is a static method"
        answer2=" ->The base class is inherited by some other subclass"
        flag="1"


        />
        
       
        
       <Question 
        question="Can you specify the accessibility modifier for methods inside the interface?" 
        answer="All the methods inside an interface are always public, by default. You cannot specify any other access modifier for them."

        />
        
       <Question 
        question="How can you prevent a class from overriding" 
        answer="You can prevent a class from overriding by using the sealed keyword."

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
export default Oop;