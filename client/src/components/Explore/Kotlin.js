import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Kotlin=()=>{

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
        <div id="heading">Interview Question for Kotlin
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question=" How does Kotlin work on Android?" 
        answer="Just like Java, the Kotlin code is also compiled into the Java bytecode and is executed at runtime by the Java Virtual Machine i.e. JVM. When a Kotlin file named Main.kt is compiled then it will eventually turn into a class and then the bytecode of the class will be generated. The name of the bytecode file will be MainKt.class and this file will be executed by the JVM."

        />

       <Question 
        question="Why should we use Kotlin?" 
        answer="Kotlin is concise"
        answer1="Kotlin is null-safe"
        answer2="Kotlin is interoperable"
        flag="1"

        />
        
       <Question 
        question="What is the difference between the variable declaration with var and val?" 
        answer="If you want to declare some mutable(changeable) variable, then you can use var. For the immutable variable, use val i.e. val variables can't be changed once assigned."

        />
        
       <Question 
        question="What is the difference between the variable declaration with val and const?" 
        answer="Both the variables that are declared with val and const are immutable in nature. But the value of the const variable must be known at the compile-time whereas the value of the val variable can be assigned at runtime also."

        />
        
       <Question 
        question="How to ensure null safety in Kotlin?" 
        answer="One of the major advantages of using Kotlin is null safety. In Java, if you access some null variable then you will get a NullPointerException. So, the following code in Kotlin will produce a compile-time error:"
        answer1="var name: String = MindOrks"
        answer2="name = null //error"
        answer3="So, to assign null values to a variable, you need to declare the name variable as a nullable string and then during the access of this variable, you need to use a safe call operator i.e. ?."
        flag="1"

        />
        
       <Question 
        question="What is the difference between safe calls(?.) and null check(!!)?" 
        answer="Safe call operator i.e. ?. is used to check if the value of the variable is null or not. If it is null then null will be returned otherwise it will return the desired value."
        answer1="If you want to throw NullPointerException when the value of the variable is null, then you can use the null check or !! operator."
        flag="1"

        />
        
       <Question 
        question=" Do we have a ternary operator in Kotlin just like java?" 
        answer="No, we don't have a ternary operator in Kotlin but you can use the functionality of ternary operator by using if-else or Elvis operator."

        />
        
       <Question 
        question="What is Elvis operator in Kotlin?" 
        answer="In Kotlin, you can assign null values to a variable by using the null safety property. To check if a value is having null value then you can use if-else or can use the Elvis operator i.e. ?:"

        />
        
       <Question 
        question="How to convert a Kotlin source file to a Java source file?" 
        answer="Steps to convert your Kotlin source file to Java source file:"
        answer1="->Open your Kotlin project in the IntelliJ IDEA / Android Studio."
        answer2="->Then navigate to Tools > Kotlin > Show Kotlin Bytecode."
        answer3="->Now click on the Decompile button to get your Java code from the bytecode."
        flag="1"

        />
        
       <Question 
        question="What is the use of @JvmStatic, @JvmOverloads, and @JvmFiled in Kotlin?" 
        answer="@JvmStatic: This annotation is used to tell the compiler that the method is a static method and can be used in Java code."
        answer1="@JvmOverloads: To use the default values passed as an argument in Kotlin code from the Java code, we need to use the @JvmOverloads annotation."
        answer2="@JvmField: To access the fields of a Kotlin class from Java code without using any getters and setters, we need to use the @JvmField in the Kotlin code."
        flag="1"

        />
        
       <Question 
        question="What is a data class in Kotlin?" 
        answer="Data classes are those classes which are made just to store some data. In Kotlin, it is marked as data. The following is an example of the same:"
        answer1="code -> data class Developer(val name: String, val age: Int)"
        answer2="When we mark a class as a data class, you don’t have to implement or create the following functions like we do in Java: hashCode(), equals(), toString(), copy(). The compiler automatically creates these internally, so it also leads to clean code. Although, there are few other requirements that data classes need to fulfill."
        flag="1"

        />
        
       <Question 
        question="Can we use primitive types such as int, double, float in Kotlin?" 
        answer="In Kotlin, we can't use primitive types directly. We can use classes like Int, Double, etc. as an object wrapper for primitives. But the compiled bytecode has these primitive types."

        />
        
       <Question 
        question="What is String Interpolation in Kotlin?" 
        answer="If you want to use some variable or perform some operation inside a string then String Interpolation can be used. You can use the $ sign to use some variable in the string or can perform some operation in between {} sign."
        answer1="-> var name = 'MindOrks'"
        answer2="->print('Hello! I am learning from $name')"
        flag="1"

        />
        
       <Question 
        question="What do you mean by destructuring in Kotlin?" 
        answer="Destructuring is a convenient way of extracting multiple values from data stored in(possibly nested) objects and Arrays. It can be used in locations that receive data (such as the left-hand side of an assignment). Sometimes it is convenient to destructure an object into a number of variables, for example:"
        answer1="->val (name, age) = developer"
        answer2="Now, we can use name and age independently like below:"
        answer3="->println(name)"
        answer4="->println(age)"
        flag="1"

        />
        
       <Question 
        question="When to use the lateinit keyword in Kotlin?" 
        answer="lateinit is late initialization."
        answer1="Normally, properties declared as having a non-null type must be initialized in the constructor. However, fairly often this is not convenient."
        answer2="For example, properties can be initialized through dependency injection, or in the setup method of a unit test. In this case, you cannot supply a non-null initializer in the constructor, but you still want to avoid null checks when referencing the property inside the body of a class. To handle this case, you can mark the property with the lateinit modifier."
        flag="1"

        />
        
       <Question 
        question="How to check if a lateinit variable has been initialized or not?" 
        answer="You can check if the lateinit variable has been initialized or not before using it with the help of isInitialized method. This method will return true if the lateinit property has been initialized otherwise it will return false."

        />
        
       <Question 
        question="What is the difference between lateinit and lazy in Kotlin?" 
        answer="lazy can only be used for val properties, whereas lateinit can only be applied to var because it can’t be compiled to a final field, thus no immutability can be guaranteed."
        answer1="If you want your property to be initialized from outside in a way probably unknown beforehand, use lateinit."
        flag="1"

        />
        
       <Question 
        question="Is there any difference between == operator and === operator?" 
        answer="Yes. The == operator is used to compare the values stored in variables and the === operator is used to check if the reference of the variables are equal or not. But in the case of primitive types, the === operator also checks for the value and not reference."

        />
        
       <Question 
        question="What is the forEach in Kotlin?" 
        answer="In Kotlin, to use the functionality of a for-each loop just like in Java, we use a forEach function."

        />
        
       <Question 
        question="What are companion objects in Kotlin?" 
        answer="In Kotlin, if you want to write a function or any member of the class that can be called without having the instance of the class then you can write the same as a member of a companion object inside the class."
        answer1="To create a companion object, you need to add the companion keyword in front of the object declaration."
        flag="1"

        />
        
       <Question 
        question="What is the equivalent of Java static methods in Kotlin?" 
        answer="To achieve the functionality similar to Java static methods in Kotlin, we can use:"
        answer1="companion object"
        answer2="package-level function"
        answer3="object"
        flag="1"

        />
        
       <Question 
        question="What is the difference between FlatMap and Map in Kotlin?" 
        answer="FlatMap is used to combine all the items of lists into one list."
        answer1="Map is used to transform a list based on certain conditions."
        flag="1"

        />
        
       <Question 
        question="What is the difference between List and Array types in Kotlin?" 
        answer="If you have a list of data that is having a fixed size, then you can use an Array. But if the size of the list can vary, then we have to use a mutable list."

        />
        
       <Question 
        question=" Can we use the new keyword to instantiate a class object in Kotlin?" 
        answer="No, in Kotlin we don't have to use the new keyword to instantiate a class object. To instantiate a class object, simply we use:"
        answer1="-> var varName = ClassName()"

        />
        
       <Question 
        question="What are visibility modifiers in Kotlin?" 
        answer="A visibility modifier or access specifier or access modifier is a concept that is used to define the scope of something in a programming language. In Kotlin, we have four visibility modifiers:"
        answer1="private: visible inside that particular class or file containing the declaration."
        answer2="protected: visible inside that particular class or file and also in the subclass of that particular class where it is declared."
        answer3="internal: visible everywhere in that particular module."
        answer4="public: visible to everyone."
        answer5="Note: By default, the visibility modifier in Kotlin is public."
        flag="1"

        />
        
       <Question 
        question="How to create a Singleton class in Kotlin?" 
        answer="A singleton class is a class that is defined in such a way that only one instance of the class can be created and is used where we need only one instance of the class like in logging, database connections, etc."
        answer1="To create a Singleton class in Kotlin, you need to use the object keyword."
        answer2="->object AnySingletonClassName"
        answer3="Note: You can't use constructor in object, but you can use init."

        />
        
       <Question 
        question="What are init blocks in Kotlin?" 
        answer="init blocks are initializer blocks that are executed just after the execution of the primary constructor. A class file can have one or more init blocks that will be executed in series. If you want to perform some operation in the primary constructor, then it is not possible in Kotlin, for that, you need to use the init block."

        />
        
       <Question 
        question="What are the types of constructors in Kotlin?" 
        answer="=> Primary constructor: These constructors are defined in the class header and you can't perform some operation in it, unlike Java's constructor."
        answer1="=> Secondary constructor: These constructors are declared inside the class body by using the constructor keyword. You must call the primary constructor from the secondary constructor explicitly. Also, the property of the class can’t be declared inside the secondary constructor. There can be more than one secondary constructors in Kotlin"
        flag="1"

        />
        
       <Question 
        question="Is there any relationship between primary and secondary constructors?" 
        answer="Yes, when using a secondary constructor, you need to call the primary constructor explicitly."

        />
        
       <Question 
        question=" What is the default type of argument used in a constructor?" 
        answer="By default, the type of arguments of a constructor in val. But you can change it to var explicitly."

        />
        
       <Question 
        question="What are Coroutines in Kotlin?" 
        answer="A framework to manage concurrency in a more performant and simple way with its lightweight thread which is written on top of the actual threading framework to get the most out of it by taking the advantage of cooperative nature of functions."

        />
        
       <Question 
        question="What is suspend function in Kotlin Coroutines?" 
        answer="Suspend function is the building block of the Coroutines in Kotlin. Suspend function is a function that could be started, paused, and resume. To use a suspend function, we need to use the suspend keyword in our normal function definition."

        />
        
       <Question 
        question="What is the difference between Launch and Async in Kotlin Coroutines?" 
        answer="The difference is that the launch{} does not return anything and the async{} returns an instance of Deferred<T>, which has an await() function that returns the result of the coroutine like we have future in Java in which we do future.get() to the get the result."
        answer1="In other words:"
        answer2="->launch: fire and forget"
        answer3="->async: perform a task and return a result"
        flag="1"

        />
        
       <Question 
        question="How to choose between a switch and when in Kotlin?" 
        answer="Whenever we want to handle many if-else conditions, then we generally use switch-case statements. But Kotlin provides a more concise option i.e. in Kotlin, we can use when in place of the switch. And, when can be used as:"
        answer1="expression"
        answer2="arbitrary condition expression"
        answer3="without argument"
        answer4="with two or more choices"
        flag="1"

        />
        
       <Question 
        question=" What is the open keyword in Kotlin used for?" 
        answer="By default, the classes and functions are final in Kotlin. So, you can't inherit the class or override the functions. To do so, you need to use the open keyword before the class and function."

        />
        
       <Question 
        question="What are lambdas expressions?" 
        answer="Lambdas expressions are anonymous functions that can be treated as values i.e. we can pass the lambdas expressions as arguments to a function return them, or do any other thing we could do with a normal object. For example:"
        answer1="val add : (Int, Int) -> Int = { a, b -> a + b }"
        answer2="val result = add(9, 10)"
        flag="1"

        />
        
       <Question 
        question="What are Higher-Order functions in Kotlin?" 
        answer="A higher-order function is a function that takes functions as parameters or returns a function. For example, A function can take functions as parameters."

        />
        
       <Question 
        question="What are extension functions in Kotlin?" 
        answer="Extension functions are like extensive properties attached to any class in Kotlin. By using extension functions, you can add some methods or functionalities to an existing class even without inheriting the class. For example: Let's say, we have views where we need to play with the visibility of the views. So, we can create an extension function for views."

        />
        
       <Question 
        question="What is an infix function in Kotlin?" 
        answer="An infix function is used to call the function without using any bracket or parenthesis. You need to use the infix keyword to use the infix function. "

        />
        
       <Question 
        question="What is an inline function in Kotlin?" 
        answer="Inline function instruct compiler to insert complete body of the function wherever that function got used in the code. To use an Inline function, all you need to do is just add an inline keyword at the beginning of the function declaration."

        />
        
       <Question 
        question="What is noinline in Kotlin?" 
        answer="While using an inline function and want to pass some lambda function and not all lambda function as inline, then you can explicitly tell the compiler which lambda it shouldn't inline."

        />
        
       <Question 
        question="What are Reified types in Kotlin?" 
        answer="When you are using the concept of Generics to pass some class as a parameter to some function and you need to access the type of that class, then you need to use the reified keyword in Kotlin."

        />
        
       <Question 
        question="What is the operator overloading in Kotlin?" 
        answer="In Kotlin, we can use the same operator to perform various tasks and this is known as operator overloading. To do so, we need to provide a member function or an extension function with a fixed name and operator keyword before the function name because normally also, when we are using some operator then under the hood some function gets called. For example, if you are writing num1+num2, then it gets converted to num1.plus(num2)."

        />
        
       <Question 
        question="What are pair and triple in Kotlin?" 
        answer="Pair and Triples are used to return two and three values respectively from a function and the returned values can be of the same data type or different."
        answer1="->val pair = Pair('My Age: ', 25)"
        answer2="->print(pair.first + pair.second)"

        />
        
       <Question 
        question="What are labels in Kotlin?" 
        answer="Any expression written in Kotlin is called a label. For example, if we are having a for-loop in our Kotlin code then we can name that for-loop expression as a label and will use the label name for the for-loop."
        answer1="We can create a label by using an identifier followed by the @ sign. For example, name@, loop@, xyz@, etc. "
        flag="1"

        />
        
       <Question 
        question="What are the benefits of using a Sealed Class over Enum?" 
        answer="Sealed classes give us the flexibility of having different types of subclasses and also containing the state. The important point to be noted here is the subclasses that are extending the Sealed classes should be either nested classes of the Sealed class or should be declared in the same file as that of the Sealed class."

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
export default Kotlin;