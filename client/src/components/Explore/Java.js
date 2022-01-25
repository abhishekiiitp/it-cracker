import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Java=()=>{

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
        <div id="heading">Interview Question for Java
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="Why is Java a platform independent language?" 
        answer="Java language was developed in such a way that it does not depend on any hardware or software due to the fact that the compiler compiles the code and then converts it to platform-independent byte code which can be run on multiple systems."
        answer1="The only condition to run that byte code is for the machine to have a runtime environment (JRE) installed in it."
        flag="1"

        />

       <Question 
        question=" Why is Java not a pure object oriented language?" 
        answer="Java supports primitive data types - byte, boolean, char, short, int, float, long, and double and hence it is not a pure object-oriented language."

        />
        
       <Question 
        question="Pointers are used in C/ C++. Why does Java not make use of pointers?" 
        answer="Pointers are quite complicated and unsafe to use by beginner programmers. Java focuses on code simplicity, and the usage of pointers can make it challenging. Pointer utilization can also cause potential errors. Moreover, security is also compromised if pointers are used because the users can directly access memory with the help of pointers."
        answer1="Thus, a certain level of abstraction is furnished by not including pointers in Java. Moreover, the usage of pointers can make the procedure of garbage collection quite slow and erroneous. Java makes use of references as these cannot be manipulated, unlike pointers"
        flag="1"

        />
        
       <Question 
        question="What do you understand by an instance variable and a local variable?" 
        answer="=>Instance variables are those variables that are accessible by all the methods in the class. They are declared outside the methods and inside the class. These variables describe the properties of an object and remain bound to it at any cost."
        answer1="All the objects of the class will have their copy of the variables for utilization. If any modification is done on these variables, then only that instance will be impacted by it, and all other class instances continue to remain unaffected."
        answer2="=>Local variables are those variables present within a block, function, or constructor and can be accessed only inside them. The utilization of the variable is restricted to the block scope. Whenever a local variable is declared inside a method, the other class methods don’t have any knowledge about the local variable."
        flag="1"

        />
        
       <Question 
        question="Explain public static void main(String args[]) in Java." 
        answer="main() in Java is the entry point for any Java program. It is always written as public static void main(String[] args)."
        answer1="public: Public is an access modifier, which is used to specify who can access this method. Public means that this Method will be accessible by any Class."
        answer2="static: It is a keyword in java which identifies it is class-based. main() is made static in Java so that it can be accessed without creating the instance of a Class. In case, main is not made static then the compiler will throw an error as main() is called by the JVM before any objects are made and only static methods can be directly invoked via the class."
        answer3="void: It is the return type of the method. Void defines the method which will not return any value."
        answer4="main: It is the name of the method which is searched by JVM as a starting point for an application with a particular signature only. It is the method where the main execution occurs."
        answer5="String args[]: It is the parameter passed to the main method."
        flag="1"

        />
        
       <Question 
        question="Tell us something about JIT compiler." 
        answer="JIT stands for Just-In-Time and it is used for improving the performance during run time. It does the task of compiling parts of byte code having similar functionality at the same time thereby reducing the amount of compilation time for the code to run"
        answer1="The compiler is nothing but a translator of source code to machine-executable code. But what is special about the JIT compiler? Let us see how it works:"
        answer2="->First, the Java source code (.java) conversion to byte code (.class) occurs with the help of the javac compiler."
        answer3="->Then, the .class files are loaded at run time by JVM and with the help of an interpreter, these are converted to machine understandable code."
        answer4="->JIT compiler is a part of JVM. When the JIT compiler is enabled, the JVM analyzes the method calls in the .class files and compiles them to get more efficient and native code. It also ensures that the prioritized method calls are optimized."
        flag="1"

        />
        
       <Question 
        question="Can you tell the difference between equals() method and equality operator (==) in Java?" 
        answer="=>equals()-> This is a method defined in the Object class. "
        answer1="This method is used for checking the equality of contents between two objects as per the specified business logic."
        answer2="=>==->It is a binary operator in Java"
        answer3="This operator is used for comparing addresses (or references), i.e checks if both the objects are pointing to the same memory location."
        answer4="Object class is considered as the parent class of all the java classes. The implementation of the equals method in the Object class uses the == operator to compare two objects. This default implementation can be overridden as per the business logic."
        flag="1"


        />
        
       <Question 
        question="What are wrapper classes in Java?" 
        answer="Wrapper classes convert the Java primitives into the reference types (objects). Every primitive data type has a class dedicated to it. These are known as wrapper classes because they “wrap” the primitive data type into an object of that class. Refer to the below image which displays different primitive type, wrapper class and constructor argument."

        />
        
       <Question 
        question="What are constructors in Java?" 
        answer="In Java, constructor refers to a block of code which is used to initialize an object. It must have the same name as that of the class. Also, it has no return type and it is automatically called when an object is created."

        answer1="Default Constructor: In Java, a default constructor is the one which does not take any inputs. In other words, default constructors are the no argument constructors which will be created by default in case you no other constructor is defined by the user. Its main purpose is to initialize the instance variables with the default values. Also, it is majorly used for object creation."

        answer2="Parameterized Constructor: The parameterized constructor in Java, is the constructor which is capable of initializing the instance variables with the provided values. In other words, the constructors which take the arguments are called parameterized constructors."

        />
        
       <Question 
        question="What is singleton class in Java and how can we make a class singleton?" 
        answer="Singleton class is a class whose only one instance can be created at any given time, in one JVM. A class can be made singleton by making its constructor private."

        />
        
       <Question 
        question="What is a package in Java? List down various advantages of packages." 
        answer="Packages in Java, are the collection of related classes and interfaces which are bundled together. By using packages, developers can easily modularize the code and optimize its reuse. Also, the code within the packages can be imported by other classes and reused. Below I have listed down a few of its advantages:"
        answer1="Packages help in avoiding name clashes"
        answer2="They provide easier access control on the code"
        answer3="Packages can also contain hidden classes which are not visible to the outer classes and only used within the package"
        answer4="Creates a proper hierarchical structure which makes it easier to locate the related classes"
        flag="1"

        />
        
       <Question 
        question="Why pointers are not used in Java?" 
        answer="Java doesn’t use pointers because they are unsafe and increases the complexity of the program. Since, Java is known for its simplicity of code, adding the concept of pointers will be contradicting. Moreover, since JVM is responsible for implicit memory allocation, thus in order to avoid direct access to memory by the user,  pointers are discouraged in Java."

        />
        
       <Question 
        question="Define a Java Class." 
        answer="A class in Java is a blueprint which includes all your data.  A class contains fields (variables) and methods to describe the behavior of an object. Let’s have a look at the syntax of a class."

        />
        
       <Question 
        question=" What is an object in Java and how is it created?" 
        answer="An object is a real-world entity that has a state and behavior. An object has three characteristics: state,behaviour,identity."
        answer1="An object is created using the ‘new’ keyword. For example: ClassName obj = new ClassName();"
        flag="1"
        />
        
       <Question 
        question="What is Object Oriented Programming?" 
        answer="Object-oriented programming or popularly known as OOPs is a programming model or approach where the programs are organized around objects rather than logic and functions. In other words, OOP mainly focuses on the objects that are required to be manipulated instead of logic. This approach is ideal for the programs large and complex codes and needs to be actively updated or maintained."

        />
        
       <Question 
        question="What is final keyword in Java?" 
        answer="final is a special keyword in Java that is used as a non-access modifier. A final variable can be used in different contexts such as:"
        answer1="final variable => When the final keyword is used with a variable then its value can’t be changed once assigned. In case the no value has been assigned to the final variable then using only the class constructor a value can be assigned to it."
        answer2="final method => When a method is declared final then it can’t be overridden by the inheriting class."
        answer3="final class=> When a class is declared as final in Java, it can’t be extended by any subclass class but it can extend other class."
        flag="1"

        />
        
       <Question 
        question="What is an infinite loop in Java? Explain with an example." 
        answer="An infinite loop is an instruction sequence in Java that loops endlessly when a functional exit isn’t met. This type of loop can be the result of a programming error or may also be a deliberate action based on the application behavior. An infinite loop will terminate automatically once the application exits."

        />
        
       <Question 
        question="What is super() in java?" 
        answer="super() represents the current instance of a parent/base class"
        answer1="Used to call the default constructor of the parent/base class"
        answer2=" Used for pointing the superclass instance"
        flag="1"

        />
        
       <Question 
        question="What is Java String Pool?" 
        answer="Java String pool refers to a collection of Strings which are stored in heap memory. In this, whenever a new object is created, String pool first checks whether the object is already present in the pool or not. If it is present, then the same reference is returned to the variable else new object will be created in the String pool and the respective reference will be returned."

        />
        
       <Question 
        question="What is constructor chaining in Java?" 
        answer="In Java, constructor chaining is the process of calling one constructor from another with respect to the current object. Constructor chaining is possible only through legacy where a subclass constructor is responsible for invoking the superclass’ constructor first. There could be any number of classes in the constructor chain. Constructor chaining can be achieved in two ways:"
        answer1="->Within the same class using this()"
        answer2="->From base class using super()"
        flag="1"

        />
        
       <Question 
        question="What is a classloader in Java?" 
        answer="The Java ClassLoader is a subset of JVM (Java Virtual Machine) that is responsible for loading the class files. Whenever a Java program is executed it is first loaded by the classloader. Java provides three built-in classloaders:"
        answer1="Bootstrap ClassLoader"
        answer2="Extension ClassLoader"
        answer3="System/Application ClassLoader"
        flag="1"

        />
        
       <Question 
        question="Why Java Strings are immutable in nature?" 
        answer="In Java, string objects are immutable in nature which simply means once the String object is created its state cannot be modified. Whenever you try to update the value of that object instead of updating the values of that particular object, Java creates a new string object. Java String objects are immutable as String objects are generally cached in the String pool. Since String literals are usually shared between multiple clients, action from one client might affect the rest. It enhances security, caching, synchronization, and performance of the application"

        />
        
       <Question 
        question="What is Polymorphism?" 
        answer="Polymorphism is briefly described as “one interface, many implementations”. Polymorphism is a characteristic of being able to assign a different meaning or usage to something in different contexts – specifically, to allow an entity such as a variable, a function, or an object to have more than one form. There are two types of polymorphism:"
        answer1="1->Compile time polymorphism"
        answer2="2->Run time polymorphism"
        answer3="Compile time polymorphism is method overloading whereas Runtime time polymorphism is done using inheritance and interface."
        flag="1"

        />
        
       <Question 
        question="What is runtime polymorphism or dynamic method dispatch?" 
        answer="In Java, runtime polymorphism or dynamic method dispatch is a process in which a call to an overridden method is resolved at runtime rather than at compile-time. In this process, an overridden method is called through the reference variable of a superclass. Let’s take a look at the example below to understand it better."

        />
        
       <Question 
        question="What is abstraction in Java?" 
        answer="Abstraction refers to the quality of dealing with ideas rather than events. It basically deals with hiding the details and showing the essential things to the user. Thus you can say that abstraction in Java is the process of hiding the implementation details from the user and revealing only the functionality to them. Abstraction can be achieved in two ways:"
        answer1="->Abstract Classes (0-100% of abstraction can be achieved)"
        answer2="->Interfaces (100% of abstraction can be achieved)"
        flag="1"

        />
        
       <Question 
        question="Can you override a private or static method in Java?" 
        answer="You cannot override a private or static method in Java. If you create a similar method with the same return type and same method arguments in child class then it will hide the superclass method; this is known as method hiding. Similarly, you cannot override a private method in subclass because it’s not accessible there. What you can do is create another private method with the same name in the child class. "

        />
        
       <Question 
        question=" What is an association?" 
        answer="Association is a relationship where all object have their own lifecycle and there is no owner. Let’s take the example of Teacher and Student. Multiple students can associate with a single teacher and a single student can associate with multiple teachers but there is no ownership between the objects and both have their own lifecycle. These relationships can be one to one, one to many, many to one and many to many."

        />
        
       <Question 
        question="What do you mean by aggregation?" 
        answer="An aggregation is a specialized form of Association where all object has their own lifecycle but there is ownership and child object can not belong to another parent object. Let’s take an example of Department and teacher. A single teacher can not belong to multiple departments, but if we delete the department teacher object will not destroy. "

        />
        
       <Question 
        question="What is composition in Java?" 
        answer="Composition is again a specialized form of Aggregation and we can call this as a “death” relationship. It is a strong type of Aggregation. Child object does not have their lifecycle and if parent object deletes all child object will also be deleted. Let’s take again an example of a relationship between House and rooms. House can contain multiple rooms there is no independent life of room and any room can not belongs to two different houses if we delete the house room will automatically delete."

        />
        
       <Question 
        question="What is a marker interface?" 
        answer="A Marker interface can be defined as the interface having no data member and member functions. In simpler terms, an empty interface is called the Marker interface. The most common examples of Marker interface in Java are Serializable, Cloneable etc."

        />
        
       <Question 
        question="What is object cloning in Java?" 
        answer="Object cloning in Java is the process of creating an exact copy of an object. It basically means the ability to create an object with a similar state as the original object. To achieve this, Java provides a method clone() to make use of this functionality. This method creates a new instance of the class of the current object and then initializes all its fields with the exact same contents of corresponding fields. To object clone(), the marker interface java.lang.Cloneable must be implemented to avoid any runtime exceptions. One thing you must note is Object clone() is a protected method, thus you need to override it."

        />
        
       <Question 
        question="What is a copy constructor in Java?" 
        answer="Copy constructor is a member function that is used to initialize an object using another object of the same class. Though there is no need for copy constructor in Java since all objects are passed by reference. Moreover, Java does not even support automatic pass-by-value."

        />
        
       <Question 
        question=" What is a servlet?" 
        answer="Java Servlet is server-side technologies to extend the capability of web servers by providing support for dynamic response and data persistence."
        answer1="The javax.servlet and javax.servlet.http packages provide interfaces and classes for writing our own servlets."
        answer2="All servlets must implement the javax.servlet.Servlet interface, which defines servlet lifecycle methods. When implementing a generic service, we can extend the GenericServlet class provided with the Java Servlet API. The HttpServlet class provides methods, such as doGet() and doPost(), for handling HTTP-specific services."
        answer3="Most of the times, web applications are accessed using HTTP protocol and thats why we mostly extend HttpServlet class. Servlet API hierarchy is shown in below image."
        flag="1"

        />
        
       <Question 
        question="What is Request Dispatcher?" 
        answer="RequestDispatcher interface is used to forward the request to another resource that can be HTML, JSP or another servlet in same application. We can also use this to include the content of another resource to the response."
        answer1="There are two methods defined in this interface:"
        answer2="1->void forward()"
        answer3="2->void include()"

        />
        
       <Question 
        question="What is the life-cycle of a servlet?" 
        answer="Servlet is loaded"
        answer1="Servlet is instantiated"
        answer2="Servlet is initialized"
        answer3="Service the request"
        answer4="Servlet is destroyed"

        />
        
       <Question 
        question="How does cookies work in Servlets" 
        answer="Cookies are text data sent by server to the client and it gets saved at the client local machine."
        answer1="Servlet API provides cookies support through javax.servlet.http.Cookie class that implements Serializable and Cloneable interfaces."
        answer2="HttpServletRequest getCookies() method is provided to get the array of Cookies from request, since there is no point of adding Cookie to request, there are no methods to set or add cookie to request"
        answer3="Similarly HttpServletResponse addCookie(Cookie c) method is provided to attach cookie in response header, there are no getter methods for cookie."
        flag="1"

        />
        
       <Question 
        question="What are the different methods of session management in servlets?" 
        answer="Session is a conversational state between client and server and it can consists of multiple request and response between client and server. Since HTTP and Web Server both are stateless, the only way to maintain a session is when some unique information about the session (session id) is passed between server and client in every request and response."
        answer1="Some of the common ways of session management in servlets are:"
        answer2="User Authentication, HTML, Hidden Field, Cookies, URL Rewriting, Session Management API"
        flag="1"
        />
        
       <Question 
        question="What is JDBC Driver?" 
        answer="JDBC Driver is a software component that enables java application to interact with the database. There are 4 types of JDBC drivers:"
        answer1="JDBC-ODBC bridge driver"
        answer2="Native-API driver (partially java driver)"
        answer3="Network Protocol driver (fully java driver)"
        answer4="Thin driver (fully java driver)"
        flag="1"

        />
        
       <Question 
        question=" What are the JDBC API components?" 
        answer="Interfaces: Connection, Statement, PreparedStatement, ResultSet, ResultSetMetaData, DatabaseMetaData, CallableStatement etc."
        answer2="Classes : DriverManager, Blob, Clob, Types, SQLException etc."
        flag="1"
        />
        
       <Question 
        question="What is the role of JDBC DriverManager class?" 
        answer="The DriverManager class manages the registered drivers. It can be used to register and unregister drivers. It provides factory method that returns the instance of Connection."

        />
        
       <Question 
        question=" What is JDBC Connection interface?" 
        answer="The Connection interface maintains a session with the database. It can be used for transaction management. It provides factory methods that returns the instance of Statement, PreparedStatement, CallableStatement and DatabaseMetaData."

        />
        
       <Question 
        question="What is the purpose of JDBC ResultSet interface?" 
        answer="The ResultSet object represents a row of a table. It can be used to change the cursor pointer and get the information from the database."

        />
        
       <Question 
        question="What is JDBC ResultSetMetaData interface?" 
        answer="The ResultSetMetaData interface returns the information of table such as total number of columns, column name, column type etc."

        />
        
       <Question 
        question=" What is JDBC DatabaseMetaData interface?" 
        answer="The DatabaseMetaData interface returns the information of the database such as username, driver name, driver version, number of tables, number of views etc."

        />
        
       <Question 
        question="What do you mean by batch processing in JDBC?" 
        answer="Batch processing helps you to group related SQL statements into a batch and execute them instead of executing a single query. By using batch processing technique in JDBC, you can execute multiple queries which makes the performance faster."

        />
        
       <Question 
        question="What is Spring?" 
        answer="Wikipedia defines the Spring framework as “an application framework and inversion of control container for the Java platform. The framework’s core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform.” Spring is essentially a lightweight, integrated framework that can be used for developing enterprise applications in java."

        />
       <Question 
        question="Explain Bean in Spring" 
        answer="Beans are objects that form the backbone of a Spring application. They are managed by the Spring IoC container. In other words, a bean is an object that is instantiated, assembled, and managed by a Spring IoC container."

        />
       <Question 
        question=" Explain the role of DispatcherServlet and ContextLoaderListener." 
        answer="=>DispatcherServlet is basically the front controller in the Spring MVC application as it loads the spring bean configuration file and initializes all the beans that have been configured. If annotations are enabled, it also scans the packages to configure any bean annotated with @Component, @Controller, @Repository or @Service annotations."
        answer1="ContextLoaderListener, on the other hand, is the listener to start up and shut down the WebApplicationContext in Spring root. Some of its important functions includes tying up the lifecycle of Application Context to the lifecycle of the ServletContext and automating the creation of ApplicationContext."
        flag="1"

        />
       <Question 
        question="What is autowiring in Spring?" 
        answer="Autowiring enables the programmer to inject the bean automatically. We don’t need to write explicit injection logic. Let’s see the code to inject bean using dependency injection."
        answer1="<bean id=“emp” class=“com.javatpoint.Employee” autowire=“byName” />"
        flag="1"

        />
       <Question 
        question="How to integrate Spring and Hibernate Frameworks?" 
        answer="We can use Spring ORM module to integrate Spring and Hibernate frameworks if you are using Hibernate 3+ where SessionFactory provides current session, then you should avoid using HibernateTemplate or HibernateDaoSupport classes and better to use DAO pattern with dependency injection for the integration."
        answer2="Also, Spring ORM provides support for using Spring declarative transaction management, so you should utilize that rather than going for hibernate boiler-plate code for transaction management."
        flag="1"

        />
       <Question 
        question="What is Hibernate Framework?" 
        answer="Object-relational mapping or ORM is the programming technique to map application domain model objects to the relational database tables. Hibernate is Java-based ORM tool that provides a framework for mapping application domain objects to the relational database tables and vice versa."
        answer1="Hibernate provides a reference implementation of Java Persistence API, that makes it a great choice as ORM tool with benefits of loose coupling. We can use the Hibernate persistence API for CRUD operations. Hibernate framework provide option to map plain old java objects to traditional database tables with the use of JPA annotations as well as XML based configuration."
        flag="1"

        />
       <Question 
        question=" Explain Hibernate architecture." 
        answer="Hibernate has a layered architecture which helps the user to operate without having to know the underlying APIs. Hibernate makes use of the database and configuration data to provide persistence services (and persistent objects) to the application. It includes many objects such as persistent object, session factory, transaction factory, connection factory, session, transaction etc."

        />
       <Question 
        question=" How to disable session in JSP?" 
        answer="<%@ page session=“false” %>  "

        />
       <Question 
        question="Explain the jspDestroy() method." 
        answer="jspDestry() method is invoked from javax.servlet.jsp.JspPage interface whenever a JSP page is about to be destroyed. Servlets destroy methods can be easily overridden to perform cleanup, like when closing a database connection"

        />
       <Question 
        question="How is JSP better than Servlet technology?" 
        answer="JSP is a technology on the server’s side to make content generation simple. They are document-centric, whereas servlets are programs. A Java server page can contain fragments of Java program, which execute and instantiate Java classes. However, they occur inside an HTML template file. It provides the framework for the development of a Web Application."

        />
       <Question 
        question=" Why should we not configure JSP standard tags in web.xml?" 
        answer="We don’t need to configure JSP standard tags in web.xml because when container loads the web application and find TLD files, it automatically configures them to be used directly in the application JSP pages. We just need to include it in the JSP page using taglib directive."

        />
       <Question 
        question="What is the difference between Error and Exception?" 
        answer="An error is an irrecoverable condition occurring at runtime. Such as OutOfMemory error. These JVM errors you cannot repair them at runtime. Though error can be caught in the catch block but the execution of application will come to a halt and is not recoverable."
        answer1="While exceptions are conditions that occur because of bad input or human error etc. e.g. FileNotFoundException will be thrown if the specified file does not exist. Or a NullPointerException will take place if you try using a null reference. In most of the cases it is possible to recover from an exception (probably by giving the user feedback for entering proper values etc."
        flag="1"

        />
       <Question 
        question="What is exception hierarchy in java?" 
        answer="Throwable is a parent class of all Exception classes. There are two types of Exceptions: Checked exceptions and UncheckedExceptions or RunTimeExceptions. Both type of exceptions extends Exception class whereas errors are further classified into Virtual Machine error and Assertion error."

        />
       <Question 
        question="What is a finally block? Is there a case when finally will not execute?" 
        answer="Finally block is a block which always executes a set of statements. It is always associated with a try block regardless of any exception that occurs or not"
        answer1="Yes, finally will not be executed if the program exits either by calling System.exit() or by causing a fatal error that causes the process to abort."
        flag="1"
        />
       <Question 
        question="What is synchronization?" 
        answer="Synchronization refers to multi-threading. A synchronized block of code can be executed by only one thread at a time. As Java supports execution of multiple threads, two or more threads may access the same fields or objects. Synchronization is a process which keeps all concurrent threads in execution to be in sync. Synchronization avoids memory consistency errors caused due to inconsistent view of shared memory. When a method is declared as synchronized the thread holds the monitor for that method’s object. If another thread is executing the synchronized method the thread is blocked until that thread releases the monitor. "

        />
       <Question 
        question="Can we write multiple catch blocks under single try block? " 
        answer="Yes we can have multiple catch blocks under single try block but the approach should be from specific to general."

        />
       <Question 
        question="What are the two ways to create a thread?" 
        answer="By implementing the Runnable interface."
        answer1="By extending the Thread"
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
export default Java;