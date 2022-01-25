import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Angular=()=>{

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
        <div id="heading">Interview Question for AngularJs
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is Angular?" 
        answer="Angular is a TypeScript-based open-source web application framework, developed and maintained by Google. It offers an easy and powerful way of building front end web-based applications."
        answer1="Angular integrates a range of features like declarative templates, dependency injection, end-to-end tooling, etc. that facilitates web application development."
        flag="1"

        />

       <Question 
        question="Why was Angular introduced as a client-side framework? " 
        answer="Traditionally, VanillaJS and jQuery were used by developers to develop dynamic websites. As the websites became more complex with added features and functionality, it was hard for the developers to maintain the code. Moreover, there was no provision of data handling facilities across the views by jQuery. So, Angular was built to address these issues, thus, making it easier for the developers by dividing code into smaller bits of information that are known as Components in Angular."

        />
        
       <Question 
        question="Define the ng-content Directive?" 
        answer="Conventional HTML elements have some content between the tags. For instance:"
        answer1="<p>Put your paragraph here</p>"
        answer2="Now consider the following example of having custom text between angular tags:"
        answer3="<app-work>This won’t work like HTML until you use ng-content Directive</app-work>"
        answer4="However, doing so won’t work the way it worked for HTML elements. In order to make it work just like the HTML example mentioned above, we need to use the ng-content Directive. Moreover, it is helpful in building reusable components."
        flag="1"

        />
        
       <Question 
        question=" Please explain the various features of Angular." 
        answer="->Accessibility Applications=>Angular allows creating accessible applications using ARIA-enabled components, built-in a11y test infrastructure, and developer guides."
        answer1="->Angular CLI=>Angular provides support for command-line interface tools. These tools can be used for adding components, testing, instant deploying, etc."
        answer2="->Cross-Platform App Development=>Angular can be used for building an efficient and powerful desktop, native, and progressive web apps. Angular provides support for building native mobile applications using Cordova, Ionic, or NativeScript."
        answer3="->Animation Support=>Angular’s intuitive API allows the creation of high-performance, complex animation timelines with very little code."
        answer4="->Code Generation=>Angular is able to convert templates into highly-optimized code for modern JavaScript virtual machines."
        answer5="->Testing=>Angular lets you carry out frequent unit tests using Karma. The Protractor allows running faster scenario tests in a stable way."
        flag="1"
     

        />
        
       <Question 
        question="State some advantages of Angular over other frameworks." 
        answer="Out of box Features: Several built-in features like routing, state management, rxjs library, and HTTP services are straight out of the box services provided by Angular. So, one does not need to look for the above-stated features separately. "
        answer1="Declarative UI: Angular uses HTML to render the UI of an application as it is a declarative language and is much easier to use than JavaScript."
        answer2="Long-term Google Support: Google plans to stick with Angular and further scale up its ecosystem as it has offered its long term support to Angular. "
        flag="1"

        />
        
       <Question 
        question="What is features Angular JS" 
        answer="MVC or  Model-View-Controller architecture facilitates the AngularJS framework, where the Model contains the business logic and Controllers processes information, lastly, View shows the information present in the Model. "
        answer1="	AngularJS uses JavaScript language, which is a dynamically typed language."
        answer2="Does not support mobile support."
        flag="1"

        />
        
       <Question 
        question="What are Lifecycle hooks in Angular?" 
        answer="Angular components enter its lifecycle from the time it is created to the time it is destroyed. Angular hooks provide ways to tap into these phases and trigger changes at specific phases in a lifecycle. "

        />
        
       <Question 
        question="Explain some life cycles hooks" 
        answer="ngOnChanges( ): This method is called whenever one or more input properties of the component changes. The hook receives a SimpleChanges object containing the previous and current values of the property."
        answer1="ngOnInit( ): This hook gets called once, after the ngOnChanges hook.It initializes the component and sets the input properties of the component."
        answer2="ngDoCheck( ): It gets called after ngOnChanges and ngOnInit and is used to detect and act on changes that cannot be detected by Angular.We can implement our change detection algorithm in this hook. "
        answer3="ngAfterContentInit( ): It gets called after the first ngDoCheck hook. This hook responds after the content gets projected inside the component."
        answer4="ngAfterContentChecked( ): It gets called after ngAfterContentInit and every subsequent ngDoCheck. It responds after the projected content is checked."
        flag="1"

        />
        
       <Question 
        question="Could we make an angular application to render on the server-side?" 
        answer="Yes, we can, with Angular Universal, a technology provided by Angular capable of rendering applications on the server-side. "

        />
        
       <Question 
        question=" Explain Dependency Injection?" 
        answer=" Dependency injection is an application design pattern that is implemented by Angular and forms the core concepts of Angular. "
        answer1="Let us understand in a detailed manner. Dependencies in Angular are services which have a functionality. Various components and directives in an application can need these functionalities of the service. Angular provides a smooth mechanism by which these dependencies are injected into components and directives."
        flag="1"

        />
        
       <Question 
        question="Describe the MVVM architecture. " 
        answer="MVVM architecture removes tight coupling between each component. The MVVM architecture comprises of three parts: "
        answer1="->Model: It represents the data and the business logic of an application, or we may say it contains the structure of an entity. It consists of the business logic - local and remote data source, model classes, repository."
        answer2="->View: View is a visual layer of the application, and so consists of the UI Code(in Angular- HTML template of a component.). It sends the user action to the ViewModel but does not get the response back directly. It has to subscribe to the observables which ViewModel exposes to it to get the response. "
        answer3="->ViewModel: It is an abstract layer of the application and acts as a bridge between the View and Model(business logic). It does not have any clue which View has to use it as it does not have a direct reference to the View. View and ViewModel are connected with data-binding so, any change in the View the ViewModel takes note and changes the data inside the Model. It interacts with the Model and exposes the observable that can be observed by the View."

        />
        
       <Question 
        question="What is the AOT (Ahead-Of-Time) Compilation?" 
        answer=" An angular application consists of components and templates which a browser cannot understand. Therefore, every Angular application needs to be compiled before running inside the browser. The Angular compiler takes in the JS code, compiles it, and then produces some JS code. It is known as AOT compilation and happens only once per occasion per user. "

        />
        
       <Question 
        question=" Could you explain services in Angular?" 
        answer="Singleton objects in Angular that get instantiated only once during the lifetime of an application are called services. An Angular service contains methods that maintain the data throughout the life of an application."
        answer1="The primary intent of an Angular service is to organize as well as share business logic, models, or data and functions with various components of an Angular application."
        answer2="The functions offered by an Angular service can be invoked from any Angular component, such as a controller or directive."
        flag="1"

        />
        
       <Question 
        question="Discuss the disadvantages of using Angular?" 
        answer="Complex SPAs can be inconvenient and laggy to use due to their size"
         answer1="->Dynamic applications do not always perform well"
         answer2="->Learning Angular requires a decent effort and time"
         flag="1"
        />
        
       <Question 
        question="Enumerate some salient features of Angular 7." 
        answer="Unlike the previous versions of Angular, the 7th major release comes with splitting in @angular/core. This is done in order to reduce the size of the same. Typically, not each and every module is required by an Angular developer. Therefore, in Angular 7 each split of the @angular/core will have no more than 418 modules."
        answer1="Also, Angular 7 brings drag-and-drop and virtual scrolling into play. The latter enables loading as well as unloading elements from the DOM. For virtual scrolling, the latest version of Angular comes with the package. Furthermore, Angular 7 comes with a new and enhanced version of the ng-compiler."
        flag="1"

        />
        
       <Question 
        question="What is string interpolation in Angular?" 
        answer="Also referred to as moustache syntax, string interpolation in Angular refers to a special type of syntax that makes use of template expressions in order to display the component data. These template expressions are enclosed within double curly braces i.e. {{ }}"
        answer1="The JavaScript expressions that are to be executed by Angular are added within the curly braces and the corresponding output is embedded into the HTML code. Typically, these expressions are updated and registered like watches as a part of the digest cycle."
        flag="1"

        />
        
       <Question 
        question="Explain Angular Authentication and Authorization." 
        answer="The user login credentials are passed to an authenticate API, which is present on the server. Post server-side validation of the credentials, a JWT (JSON Web Token) is returned. The JWT has information or attributes regarding the current user. The user is then identified with the given JWT. This is called authentication."
        answer1="Post logging-in successfully, different users have a different level of access. While some may access everything, access for others might be restricted to only some resources. The level of access is authorization."
        flag="1"

        />
        
       <Question 
        question="How do Observables differ from Promises?" 
        answer="As soon as a promise is made, the execution takes place. However, this is not the case with observables because they are lazy. This means that nothing happens until a subscription is made. While promises handle a single event, observable is a stream that allows passing of more than one event. A callback is made for each event in an observable."

        />
        
       <Question 
        question="What should replace the “?”?" 
        answer=" Directives. The image represents the types of directives in Angular; Attribute, structural, and custom"

        />
        
       <Question 
        question="Could you explain the concept of templates in Angular?" 
        answer="Written with HTML, templates in Angular contains Angular-specific attributes and elements. Combined with information coming from the controller and model, templates are then further rendered to cater the user with the dynamic view."

        />
        
       <Question 
        question=" Explain the difference between an Annotation and a Decorator in Angular?" 
        answer="In Angular, annotations are used for creating an annotation array. They are only metadata set of the class using the Reflect Metadata library."
        answer1="Decorators in Angular are design patterns used for separating decoration or modification of some class without changing the original source code."
        flag="1"

        />
        
       <Question 
        question="What are directives in Angular?" 
        answer="Directives are one of the core features of Angular. They allow an Angular developer to write new, application-specific HTML syntax. In actual, directives are functions that are executed by the Angular compiler when the same finds them in the DOM."

        />
        
       <Question 
        question="Please explain the differences between Angular and jQuery?" 
        answer="The single biggest difference between Angular and jQuery is that while the former is a JS frontend framework, the latter is a JS library. Despite this, there are some similarities between the two, such as both features DOM manipulation and provides support for animation."
        answer1="Angular has two-way data binding, jQuery does not"
        answer2="Angular provides support for RESTful API while jQuery doesn’t"
        answer3="jQuery doesn’t offer deep linking routing though Angular supports it"
        answer4="There is no form validation in jQuery whereas it is present in Angular"
        flag="1"

        />
        
       <Question 
        question="Could you explain the difference between Angular expressions and JavaScript expressions?" 
        answer="->Angular expressions support filters while JavaScript expressions do not"
        answer1="->It is possible to write Angular expressions inside the HTML tags. JavaScript expressions, contrarily, can’t be written inside the HTML tags"
        answer2="->While JavaScript expressions support conditionals, exceptions, and loops, Angular expressions don’t"
        answer3="->"

        />
        
       <Question 
        question="What is Angular Material?" 
        answer=" It is a UI component library. Angular Material helps in creating attractive, consistent, and fully functional web pages as well as web applications. It does so while following modern web design principles, including browser portability and graceful degradation."

        />
        
       <Question 
        question="What is AOT (Ahead-Of-Time) Compilation?" 
        answer=" Each Angular app gets compiled internally. The Angular compiler takes in the JS code, compiles it and then produces some JS code. This happens only once per occasion per user. It is known as AOT (Ahead-Of-Time) compilation."

        />
        
       <Question 
        question="What is Data Binding?" 
        answer=" In order to connect application data with the DOM (Data Object Model), data binding is used. It happens between the template (HTML) and component (TypeScript)."

        />
        
       <Question 
        question="Can you draw a comparison between the service() and the factory() functions?" 
        answer="Used for the business layer of the application, the service() function operates as a constructor function. The function is invoked at runtime using the new keyword."
        answer1="Although the factory() function works in pretty much the same way as the service() function does, the former is more flexible and powerful. In actual, the factory() function are design patterns that help in creating objects."
        flag="1"

        />
        
       <Question 
        question="Please explain the digest cycle in Angular?" 
        answer="The process of monitoring the watchlist in order to track changes in the value of the watch variable is termed the digest cycle in Angular. The previous and present versions of the scope model values are compared in each digest cycle."
        answer1="Although the digest cycle process gets triggered implicitly, it is possible to start it manually by using the $apply() function."
        flag="1"

        />
        
       <Question 
        question="Could you explain the various types of filters in AngularJS." 
        answer=" In order to format the value of expression so that it can be displayed to the user, AngularJS has filters. It is possible to add these filters to the controllers, directives, services, or templates. AngularJS also provides support for creating custom filters."
        answer1="Organizing data in such a way so that it is displayed only when certain criteria are fulfilled is made possible using filters. Filters are added to the expressions using the pipe ‘|’ character. Various types of AngularJS filters are enumerated as follows:"
        answer2="->currency – Formats a number to the currency format"
        answer3="->date – Formats a data to some specific format"
        answer4="->filter – Selects a subset of items from an array"
        flag="1"

        />
        
       <Question 
        question="What is new in Angular 6?" 
        answer="Angular Elements – It allows converting Angular components into web components and embeds the same in some non-Angular application"
        answer1="i18n (internationalization) – Without having to build the application once per locale, any Angular application can have “runtime i18n”"
        answer2="Tree Shakeable Provider – Angular 6 introduces a new way of registering a provider directly inside the @Injectable() decorator. It is achieved by using the providedIn attribute"
        answer3="RxJS 6 – Angular 6 makes use of RxJS 6 internally"
        flag="1"

        />
        
       <Question 
        question="What is ngOnInit()? " 
        answer="ngOnInit() is a lifecycle hook that is called after Angular has finished initializing all data-bound properties of a directive"

        />
        
       <Question 
        question="What is SPA (Single Page Application) in Angular?" 
        answer="In the SPA technology, only a single page, which is index.HTML, is maintained although the URL keeps on changing. Unlike traditional web technology, SPA technology is faster and easy to develop as well."

        />
        
       <Question 
        question=" Contrast SPA technology with traditional web technology?" 
        answer="In conventional web technology, as soon as a client requests a webpage, the server sends the resource. However, when again the client requests for another page, the server responds again with sending the requested resource. The problem with this technology is that it requires a lot of time."

        />
        
       <Question 
        question=" What is the process called by which TypeScript code is converted into JavaScript code?" 
        answer="It is called Transpiling. Even though TypeScript is used for writing code in Angular applications, it gets internally transpiled into equivalent JavaScript."

        />
        
       <Question 
        question="What is ViewEncapsulation?" 
        answer="To put simply, ViewEncapsulation determines whether the styles defined in a particular component will affect the entire application or not"

        />
        
       <Question 
        question="Why prioritize TypeScript over JavaScript in Angular?" 
        answer="TypeScript is a superset of Javascript as it is Javascript + Types or extra features like typecasting for variables, annotations, variable scope and much more. The typescript is designed in a way to overcome Javascript shortcomings like typecasting of variables, classes, decorators, variable scope and many more. Moreover, Typescript is purely object-oriented programming that offers a 'Compiler' that can convert to Javascript-equivalent code. "

        />
        
       <Question 
        question="Explain string interpolation and property binding in Angular." 
        answer="String interpolation and property binding are parts of data-binding in Angular. Data-binding is a feature in angular, which provides a way to communicate between the component(Model) and its view(HTML template). Data-binding can be done in two ways, one-way binding and two-way binding. In Angular, data from the component can be inserted inside the HTML template. In one-way binding, any changes in the component will directly reflect inside the HTML template but, vice-versa is not possible. Whereas, it is possible in two-way binding."

        />
        
       <Question 
        question="What is component directives?" 
        answer="These form the main class in directives. Instead of @Directive decorator we use @Component decorator to declare these directives. These directives have a view, a stylesheet and a selector property."

        />
        
       <Question 
        question="What is Structural directives" 
        answer="These directives are generally used to manipulate DOM elements."
        answer1="Every structural directive has a ‘ * ’ sign before them."
        answer2="We can apply these directives to any DOM element."
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
export default Angular;