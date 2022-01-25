import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';
import i1 from '../im/c1.jpg'
import Question from '../Explore/Question'
const Node=()=>{

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
        <div id="heading">Interview Question for NodeJs
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What does the runtime environment mean in Node.js?" 
        answer="The Node.js runtime is the software stack responsible for installing your web service's code and its dependencies and running your service.

The Node.js runtime for App Engine in the standard environment is declared in the app.yaml file:

runtime: nodejs10
The runtime environment is literally just the environment your application is running in. This can be used to describe both the hardware and the software that is running your application. How much RAM, what version of node, what operating system, how much CPU cores, can all be referenced when talking about a runtime environment."

        />

       <Question 
        question="What is Node.js?" 
        answer="Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript."

        />
        
       <Question 
        question="What is Node.js Process Model?" 
        answer="Node.js runs in a single process and the application code runs in a single thread and thereby needs less resources than other platforms. All the user requests to your web application will be handled by a single thread and all the I/O work or long running job is performed asynchronously for a particular request. So, this single thread doesn’t have to wait for the request to complete and is free to handle the next request. When asynchronous I/O work completes then it processes the request further and sends the response."

        />
        
       <Question 
        question="What are the data types in Node.js?" 
        answer="Answer number 1"
        answer1="-> String"
       
        answer2="-> Number"
        answer3="-> Boolean"
        answer4="-> Undefined ,NULL"
        answer5="->Buffer :-Node.js includes an additional data type called Buffer (not available in browser's JavaScript). Buffer is mainly used to store binary data, while reading from a file or receiving packets over the network."
        flag="1"
        
        />
        
       <Question 
        question="What is NPM ?" 
        answer="npm stands for Node Package Manager. npm provides following two main functionalities:"
        answer1="-> Online repositories for node.js packages/modules which are searchable on search.nodejs.org"
        answer2="Command line utility to install packages, do version management and dependency management of Node.js packages."

        />
        
       <Question 
        question="What are the two types of API functions in Node.js?" 
        answer="The two types of API functions in Node.js are: a) Asynchronous, non-blocking functions b) Synchronous, blocking functions"

        />
        
       <Question 
        question="What is an error-first callback?" 
        answer="Error-first callbacks are used to pass errors and data. The first argument is always an error object that the programmer has to check if something went wrong. Additional arguments are used to pass data."
        answer1="fs.readFile(filePath, function(err, data) {"
        answer2="if (err) {
    //handle the error
  }"
  answer3="// use the data object
});"
flag="1"

        />
        
       <Question 
        question="What is Callback Hell?" 
        answer="The asynchronous function requires callbacks as a return parameter. When multiple asynchronous functions are chained together then callback hell situation comes up."

        />
        
       <Question 
        question="What is control flow function?" 
        answer="It is a generic piece of code which runs in between several asynchronous function calls is known as control flow function."

        />
        
       <Question 
        question="What are Event Listeners?" 
        answer="Event Listeners are similar to call back functions but are associated with some event. For example when a server listens to http request on a given port a event will be generated and to specify http server has received and will invoke corresponding event listener. Basically, Event listener's are also call backs for a corresponding event.

Node.js has built in event's and built in event listeners. Node.js also provides functionality to create Custom events and Custom Event listeners."

        />
        
       <Question 
        question="If Node.js is single threaded then how it handles concurrency?" 
        answer="Node provides a single thread to programmers so that code can be written easily and without bottleneck. Node internally uses multiple POSIX threads for various I/O operations such as File, DNS, Network calls etc.

When Node gets I/O request it creates or uses a thread to perform that I/O operation and once the operation is done, it pushes the result to the event queue. On each such event, event loop runs and checks the queue and if the execution stack of Node is empty then it adds the queue result to execution stack.

This is how Node manages concurrency."

        />
        
       <Question 
        question="Could we run an external process with Node.js?" 
        answer="Yes. Child process module enables us to access operating system functionaries or other apps. Scalability is baked into Node and child processes are the key factors to scale our application. You can use child process to run system commands, read large files without blocking event loop, decompose the application into various “nodes” (That’s why it’s called Node).

Child process module has following three major ways to create child processes –"

       answer1="-> spawn - child_process.spawn launches a new process with a given command."
       answer2="-> exec - child_process.exec method runs a command in a shell/console and buffers the output."
       answer3="-> fork - The child_process.fork method is a special case of the spawn() to create child processes."
       flag="1"

        />
        
       <Question 
        question="What are the key features of Node.js?" 
        answer="-> Asynchronous event driven IO helps concurrent request handling – All APIs of Node.js are asynchronous. This feature means that if a Node receives a request for some Input/Output operation, it will execute that operation in the background and continue with the processing of other requests. Thus it will not wait for the response from the previous requests."
        answer1="-> Fast in Code execution – Node.js uses the V8 JavaScript Runtime engine, the one which is used by Google Chrome. Node has a wrapper over the JavaScript engine which makes the runtime engine much faster and hence processing of requests within Node.js also become faster."
        answer2="-> Single Threaded but Highly Scalable – Node.js uses a single thread model for event looping. The response from these events may or may not reach the server immediately. However, this does not block other operations. Thus making Node.js highly scalable. Traditional servers create limited threads to handle requests while Node.js creates a single thread that provides service to much larger numbers of such requests."
        answer3="-> Node.js library uses JavaScript – This is another important aspect of Node.js from the developer’s point of view. The majority of developers are already well-versed in JavaScript. Hence, development in Node.js becomes easier for a developer who knows JavaScript."
        answer4="-> There is an Active and vibrant community for the Node.js framework – The active community always keeps the framework updated with the latest trends in the web development."
        answer5="-> No Buffering – Node.js applications never buffer any data. They simply output the data in chunks."
        flag="1"
        />
        
       <Question 
        question="What is the difference between Nodejs, AJAX, and jQuery?" 
        answer="The one common trait between Node.js, AJAX, and jQuery is that all of them are the advanced implementation of JavaScript. However, they serve completely different purposes."
        answer1="-> Node.js –It is a server-side platform for developing client-server applications. For example, if we’ve to build an online employee management system, then we won’t do it using client-side JS. But the Node.js can certainly do it as it runs on a server similar to Apache, Django not in a browser."
        answer2="-> AJAX (aka Asynchronous Javascript and XML) –It is a client-side scripting technique, primarily designed for rendering the contents of a page without refreshing it. There are a no. of large companies utilizing AJAX such as Facebook and Stack Overflow to display dynamic content."
        answer3="-> jQuery –It is a famous JavaScript module which complements AJAX, DOM traversal, looping and so on. This library provides many useful functions to help in JavaScript development. However, it’s not mandatory to use it but as it also manages cross-browser compatibility, so can help you produce highly maintainable web applications."
        flag="1"
        />
        
       <Question 
        question="What are the core modules of Node.js?" 
        answer="-> EventEmitter"
        answer1="-> Stream"
        answer2="-> FS"
        answer3="-> Net"
        answer4="-> Global Objects"
        flag="1"

        />
        
       <Question 
        question="What is global installation of dependencies?" 
        answer="Globally installed packages/dependencies are stored in /npm directory. Such dependencies can be used in CLI (Command Line Interface) function of any node.js but can not be imported using require() in Node application directly. To install a Node project globally use -g flag."


        />
        
       <Question 
        question="What do you mean by Asynchronous API?" 
        answer="All APIs of Node.js library are aynchronous that is non-blocking. It essentially means a Node.js based server never waits for a API to return data. Server moves to next API after calling it and a notification mechanism of Events of Node.js helps server to get response from the previous API call."

        />
        
       <Question 
        question="What is the difference between returning a callback and just calling a callback" 
        answer="return callback();"
        answer1="//some more lines of code; -  won't be executed"
        answer2="callback();"
        answer3="//some more lines of code; - will be executed"
        answer4="function do2(callback) {
    log.trace('Execute function: do2');
    return callback('do2 callback param');
}

var do2Result = do2((param) => {
    log.trace(`print ${param}`);
    return `return from callback(${param})`; // we could use that return
});

log.trace(`print ${do2Result}`);"
     answer5="output: C:\Work\Node>node --use-strict main.js
[0] Execute function: do2
[0] print do2 callback param
[0] print return from callback(do2 callback param)"
      
      flag="1"

        />
        
       <Question 
        question="List out the differences between AngularJS and NodeJS?" 
        answer="AngularJS is a web application development framework. It’s a JavaScript and it is different from other web app frameworks written in JavaScript like jQuery. NodeJS is a runtime environment used for building server-side applications while AngularJS is a JavaScript framework mainly useful in building/developing client-side part of applications which run inside a web browser."

        />
        
       <Question 
        question="What are Promises in Node.js??" 
        answer="It allows to associate handlers to an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a promise for the value at some point in the future.

Promises in node.js promised to do some work and then had separate callbacks that would be executed for success and failure as well as handling timeouts. Another way to think of promises in node.js was that they were emitters that could emit only two events: success and error.The cool thing about promises is you can combine them into dependency chains (do Promise C only when Promise A and Promise B complete).

The core idea behind promises is that a promise represents the result of an asynchronous operation. A promise is in one of three different states:"
       answer1="-> pending - The initial state of a promise."
       answer2="-> fulfilled - The state of a promise representing a successful operation."
       answer3="-> rejected - The state of a promise representing a failed operation. Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again)."
       answer4="Creating a Promise:--"
       answer5="var myPromise = new Promise(function(resolve, reject){
   ....
})"
       flag="1"

        />
        
       <Question 
        question=" When should you npm and when yarn?" 
        answer="-> npm"
        answer2="It is the default method for managing packages in the Node.js runtime environment. It relies upon a command line client and a database made up of public and premium packages known as the the npm registry. Users can access the registry via the client and browse the many packages available through the npm website. Both npm and its registry are managed by npm, Inc."
        answer3="-> yarn"
        answer5="Yarn was developed by Facebook in attempt to resolve some of npm’s shortcomings. Yarn isn’t technically a replacement for npm since it relies on modules from the npm registry. Think of Yarn as a new installer that still relies upon the same npm structure. The registry itself hasn’t changed, but the installation method is different. Since Yarn gives you access to the same packages as npm, moving from npm to Yarn doesn’t require you to make any changes to your workflow."
        flag="1"
        />
        
       <Question 
        question="What is a stub?" 
        answer="Stubbing and verification for node.js tests. Enables you to validate and override behaviour of nested pieces of code such as methods, require() and npm modules or even instances of classes. This library is inspired on node-gently, MockJS and mock-require."
        answer1="Features of Stub:"
        answer2="-> Produces simple, lightweight Objects capable of extending down their tree"
        answer3="-> Compatible with Nodejs"
        answer4="-> Easily extendable directly or through an ExtensionManager"
        answer5="-> Comes with predefined, usable extensions"
        flag="1"

        />
        
       <Question 
        question="What is a test pyramid? How can you implement it when talking about HTTP APIs?" 
        answer="The “Test Pyramid” is a metaphor that tells us to group software tests into buckets of different granularity. It also gives an idea of how many tests we should have in each of these groups. It shows which kinds of tests you should be looking for in the different levels of the pyramid and gives practical examples on how these can be implemented."
        answer1="Mike Cohn's original test pyramid consists of three layers that your test suite should consist of (bottom to top):"
        answer2="1) Unit Tests"
        answer3="2) Service Tests"
        answer4="3) User Interface Tests"
        flag="1"

        />
        
       <Question 
        question="What is REPL? What purpose it is used for?" 
        answer="REPL (READ, EVAL, PRINT, LOOP) is a computer environment similar to Shell (Unix/Linux) and command prompt. Node comes with the REPL environment when it is installed. System interacts with the user through outputs of commands/expressions used. It is useful in writing and debugging the codes. The work of REPL can be understood from its full form:"
        answer1="READ:-- It reads the inputs from users and parses it into JavaScript data structure. It is then stored to memory."
        answer2="EVAL:-- The parsed JavaScript data structure is evaluated for the results."
        answer3="PRINT:--The result is printed after the evaluation."
        answer4="LOOP:--Loops the input command. To come out of NODE REPL, press ctrl+c twice"
        flag="1"
        />
        
       <Question 
        question="What is the difference between Asynchronous and Non-blocking?" 
        answer="(1) Asynchronous"
        answer1="     The architecture of asynchronous explains that the message sent will not give the reply on immediate basis just like we send the mail but do not get the reply on an immediate basis. It does not have any dependency or order. Hence improving the system efficiency and performance. The server stores the information and when the action is done it will be notified."
        answer2="(2) Non-Blocking"
        
        answer3="     Nonblocking immediately responses with whatever data available. Moreover, it does not block any execution and keeps on running as per the requests. If an answer could not be retrieved than in those cases API returns immediately with an error. Nonblocking is mostly used with I/O(input/output). Node.js is itself based on nonblocking I/O model. There are few ways of communication that a nonblocking I/O has completed. The callback function is to be called when the operation is completed. Nonblocking call uses the help of javascript which provides a callback function."
        answer4="Asynchronous VS Non-Blocking"

        answer5="     1) Asynchronous does not respond immediately, While Nonblocking responds immediately if the data is available and if not that simply returns an error. 2) Asynchronous improves the efficiency by doing the task fast as the response might come later, meanwhile, can do complete other tasks. Nonblocking does not block any execution and if the data is available it retrieves the information quickly. 3) Asynchronous is the opposite of synchronous while nonblocking I/O is the opposite of blocking. They both are fairly similar but they are also different as asynchronous is used with a broader range of operations while nonblocking is mostly used with I/O."
        flag="1"
        />
        
       <Question 
        question="What are some of the most popular modules of Node.js?" 
        answer="(1)  Async: Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript."
        answer1="(2) MongoDB: The official MongoDB driver for Node.js. It provides a high-level API on top of mongodb-core that is meant for end users. "
        answer2="(3) Express: Express is a fast, un-opinionated, minimalist web framework. It provides small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs."
        answer3="(4) Http-server: is a simple, zero-configuration command-line http server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning."
        answer4="(5) Jquery: jQuery is a fast, small, and feature-rich JavaScript library."
        answer5="(6) Mongoose: It is a MongoDB object modeling tool designed to work in an asynchronous environment."
         flag="1"
        />
        
       <Question 
        question="What are some of the most popular modules of Node.js?" 
        answer="(7) Request: Request is Simplified HTTP request client make it possible to make http calls. It supports HTTPS and follows redirects by default."
        answer1="(8) Socket.io: Its a node.js realtime framework server."
        answer2="(9) Npm: is package manager for javascript."
        flag="1"

        />
        
       <Question 
        question="What is EventEmitter in Node.js?" 
        answer="All objects that emit events are members of EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. All values returned by the called listeners are ignored and will be discarded."

        />
        
       <Question 
        question="What is crypto in Node.js? How do you cipher the secure information in Node.js?" 
        answer="The Node.js Crypto module supports cryptography. It provides cryptographic functionality that includes a set of wrappers for open SSL's hash HMAC, cipher, decipher, sign and verify functions."
        answer1="HASH:--A hash is a fixed-length string of bits i.e. procedurally and deterministically generated from some arbitrary block of source data."
        answer2=" HMAC:--HMAC stands for Hash-based Message Authentication Code. It is a process for applying a hash algorithm to both data and a secret key that results in a single final hash."
        flag="1"
        />
        
       <Question 
        question="What is the use of DNS module in Node.js?" 
        answer="DNS is a node module used to do name resolution facility which is provided by the operating system as well as used to do an actual DNS lookup. No need for memorising IP addresses – DNS servers provide a nifty solution of converting domain or subdomain names to IP addresses. This module provides an asynchronous network wrapper and can be imported using the following syntax."

        />
        
       <Question 
        question="Name the types of API functions in Node.js?" 
        answer="There are two types of API functions in Node.js:"
        answer1="1) Asynchronous, Non-blocking functions"
        answer2="2) Synchronous, Blocking functions"
        answer3="1. Blocking functions ::---In a blocking operation, all other code is blocked from executing until an I/O event that is being waited on occurs. Blocking functions execute synchronously."
        answer4="2. Non-blocking functions::---In a non-blocking operation, multiple I/O calls can be performed without the execution of the program being halted. Non-blocking functions execute asynchronously."
        flag="1"
        />
        
       <Question 
        question="What is typically the first argument passed to a Node.js callback handler?" 
        answer="The first argument to any callback handler is an optional error object"

        />
        
       <Question 
        question="How Node.js read the content of a file?" 
        answer="The “normal” way in Node.js is probably to read in the content of a file in a non-blocking, asynchronous way. That is, to tell Node to read in the file, and then to get a callback when the file-reading has been finished. That would allow us to hand several requests in parallel."
        answer1="Common use for the File System module:"
        answer2="->Read files"
        answer3="->Create files"
        answer4="->Update files"
        answer5="->Delete files , Rename files"
        flag="1"

        />
        
       <Question 
        question="What is difference between put and patch?" 
        answer="PUT and PATCH are HTTP verbs and they both relate to updating a resource. The main difference between PUT and PATCH requests are in the way the server processes the enclosed entity to modify the resource identified by the Request-URI.

In a PUT request, the enclosed entity is considered to be a modified version of the resource stored on the origin server, and the client is requesting that the stored version be replaced.

With PATCH, however, the enclosed entity contains a set of instructions describing how a resource currently residing on the origin server should be modified to produce a new version.

Also, another difference is that when you want to update a resource with PUT request, you have to send the full payload as the request whereas with PATCH, you only send the parameters which you want to update.

The most commonly used HTTP verbs POST, GET, PUT, DELETE are similar to CRUD (Create, Read, Update and Delete) operations in database. We specify these HTTP verbs in the capital case. So, the below is the comparison between them."
        answer1="POST - create"
        answer2="GET - read"
        answer3="PUT - update"
        answer4="DELETE - delete"
        answer5="PATCH: Submits a partial modification to a resource. If you only need to update one field for the resource, you may want to use the PATCH method."
        flag="1"
        />
        
       <Question 
        question="Which database is more popularly used with Node.js?" 
        answer="MongoDB is the most common database used with Node.js. It is a NoSQL, cross-platform, document-oriented database that provides high performance, high availability, and easy scalability."

        />
        
       <Question 
        question="What are some of the most commonly used libraries in Node.js?" 
        answer="There are two commonly used libraries in Node.js:"
        answer1="ExpressJS - Express is a flexible Node.js web application framework that provides a wide set of features to develop web and mobile applications."
        answer3="Mongoose - Mongoose is also a Node.js web application framework that makes it easy to connect an application to a database."

        />
        
       <Question 
        question="What is the package.json file?" 
        answer="The package.json file is the heart of a Node.js system. This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module

This is what a package.json file looks like immediately after creating a Node.js project using the command: npm init

You can edit the parameters when you create a Node.js project."

        />
        
       <Question 
        question="What is the Express.js package?" 
        answer="Express is a flexible Node.js web application framework that provides a wide set of features to develop both web and mobile applications"

        />
        
       <Question 
        question="What is the purpose of module.exports?" 
        answer="A module in Node.js is used to encapsulate all the related codes into a single unit of code, which can be interpreted by shifting all related functions into a single file. You can export a module using the module.exports, which allows it to be imported into another file using a required keyword."

        />
        
       <Question 
        question=" What is the buffer class in Node.js?" 
        answer="Buffer class stores raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. Buffer class is used because pure JavaScript is not compatible with binary data"

        />
        
       <Question 
        question="What is piping in Node.js?" 
        answer="Piping is a mechanism used to connect the output of one stream to another stream. It is normally used to retrieve data from one stream and pass output to another stream"

        />
        
       <Question 
        question="What is a reactor pattern in Node.js?" 
        answer="A reactor pattern is a concept of non-blocking I/O operations. This pattern provides a handler that is associated with each I/O operation. As soon as an I/O request is generated, it is then submitted to a demultiplexer"

        />
        
       <Question 
        question="Explain the concept of middleware in Node.js." 
        answer="Middleware is a function that receives the request and response objects. Most tasks that the middleware functions perform are: "
        answer1="-> Execute any code"
        answer2="-> Update or modify the request and the response objects"
        answer3="-> Finish the request-response cycle"
        answer4="-> Invoke the next middleware in the stack"
        flag="1"

        />
        
       <Question 
        question="What is the purpose of NODE_ENV?" 
        answer="NODE_ENV is an environmental variable that stands for node environment in express server "
        answer1="its how we set and detect which environment we are   export NODE_ENV=production"

        />
        
       <Question 
        question="what is dispatcher?" 
        answer="The Dispatcher has functionality not provided nor expected in EventEmitter, the most notable being waitFor, which allows a store to ensure that another store has been updated in response to an action before it proceeds.

Pattern-wise, the Dispatcher is also a singleton, whereas EventEmitter is an API that you might object-assign onto multiple stores."

        />
        
       <Question 
        question="What is the difference between process.nextTick() and setImmediate()?" 
        answer="The difference between process.nextTick() and setImmediate() is that process.nextTick() defers the execution of an action till the next pass around the event loop or it simply calls the callback function once the ongoing execution of the event loop is finished whereas setImmediate() executes a callback on the next cycle of the event loop and it gives back to the event loop for executing any I/O operations."

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
export default Node;