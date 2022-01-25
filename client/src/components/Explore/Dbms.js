import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Dbms=()=>{

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
        <div id="heading">Interview Question for Data Base Management System
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is DBMS?" 
        answer="DBMS is a collection of programs that facilitates users to create and maintain a database. In other words, DBMS provides us an interface or tool for performing different operations such as the creation of a database, inserting data into it, deleting data from it, updating the data, etc. DBMS is a software in which data is stored in a more secure way as compared to the file-based system. Using DBMS, we can overcome many problems such as- data redundancy, data inconsistency, easy access, more organized and understandable, and so on. There is the name of some popular Database Management System- MySQL, Oracle, SQL Server, Amazon simple DB (Cloud-based), etc."

        />

       <Question 
        question="What is a database?" 
        answer="A Database is a logical, consistent and organized collection of data that it can easily be accessed, managed and updated. Databases, also known as electronic databases are structured to provide the facility of creation, insertion, updating of the data efficiently and are stored in the form of a file or set of files, on the magnetic disk, tapes and another sort of secondary devices. Database mostly consists of the objects (tables), and tables include of the records and fields. Fields are the basic units of data storage, which contain the information about a particular aspect or attribute of the entity described by the database. DBMS is used for extraction of data from the database in the form of the queries."

        />
        
       <Question 
        question="What is a database system?" 
        answer="The collection of database and DBMS software together is known as a database system. Through the database system, we can perform many activities such as-"
        answer1="The data can be stored in the database with ease, and there are no issues of data redundancy and data inconsistency."
        answer2="The data will be extracted from the database using DBMS software whenever required. So, the combination of database and DBMS software enables one to store, retrieve and access data with considerate accuracy and security."
        flag="1"

        />
        
       <Question 
        question="What is Hierarchical DBMS?" 
        answer="As the name suggests, this type of DBMS has a structure similar to that of a tree, wherein the nodes represent records and the branches of the tree represent fiel"

        />
        
       <Question 
        question="What is Object-oriented DBMS?" 
        answer="Uses small individual software called object to store pieces of data and the instructions for the actions to be done with the data."

        />
        
       <Question 
        question="What are the advantages of DBMS?" 
        answer="->Sharing of Data: Multiple users can use data from the same database simultaneously."
        answer1="->Integrity constraints: These constraints allow the data to be stored in a database in a refined manner."
        answer2="->Redundancy control: Supports a mechanism to control the redundancy of data by integrating all the data into a single database."
        answer3="->Data Independence: Allows to change the structure of the data without affecting the structure of any of the running application programs."
        answer4="->Provide backup and recovery facility: Provides a feature of ‘backup and recovery’ to automatically create the data backup and restore the data as and when required."
        flag="1"

        />
        
       <Question 
        question="What is a checkpoint in DBMS?" 
        answer="The Checkpoint is a type of mechanism where all the previous logs are removed from the system and permanently stored in the storage disk."
        answer1="There are two ways which can help the DBMS in recovering and maintaining the ACID properties, and they are- maintaining the log of each transaction and maintaining shadow pages. So, when it comes to log based recovery system, checkpoints come into existence. Checkpoints are those points to which the database engine can recover after a crash as a specified minimal point from where the transaction log record can be used to recover all the committed data up to the point of the crash."
        flag="1"

        />
        
       <Question 
        question="When does checkpoint occur in DBMS?" 
        answer="A checkpoint is like a snapshot of the DBMS state. Using checkpoints, the DBMS can reduce the amount of work to be done during a restart in the event of subsequent crashes. Checkpoints are used for the recovery of the database after the system crash. Checkpoints are used in the log-based recovery system. When due to a system crash we need to restart the system then at that point we use checkpoints. So that, we don't have to perform the transactions from the very starting."

        />
        
       <Question 
        question="What do you mean by transparent DBMS?" 
        answer="The transparent DBMS is a type of DBMS which keeps its physical structure hidden from users. Physical structure or physical storage structure implies to the memory manager of the DBMS, and it describes how the data stored on disk."

        />
        
       <Question 
        question="What are the unary operations in Relational Algebra?" 
        answer="PROJECTION and SELECTION are the unary operations in relational algebra. Unary operations are those operations which use single operands. Unary operations are SELECTION, PROJECTION, and RENAME."
        answer1="As in SELECTION relational operators are used for example - =,<=,>=, etc."
        flag="1"

        />
        
       <Question 
        question="What is RDBMS?" 
        answer="RDBMS stands for Relational Database Management Systems. It is used to maintain the data records and indices in tables. RDBMS is the form of DBMS which uses the structure to identify and access data concerning the other piece of data in the database. RDBMS is the system that enables you to perform different operations such as- update, insert, delete, manipulate and administer a relational database with minimal difficulties. Most of the time RDBMS use SQL language because it is easily understandable and is used for often."

        />
        
       <Question 
        question="How many types of database languages are?" 
        answer="Data Definition Language (DDL) e.g., CREATE, ALTER, DROP, TRUNCATE, RENAME, etc. All these commands are used for updating the data that?s why they are known as Data Definition Language."
        answer1="Data Manipulation Language (DML) e.g., SELECT, UPDATE, INSERT, DELETE, etc. These commands are used for the manipulation of already updated data that's why they are the part of Data Manipulation Language."
        answer2="DATA Control Language (DCL) e.g., GRANT and REVOKE. These commands are used for giving and removing the user access on the database. So, they are the part of Data Control Language."
        answer3="Transaction Control Language (TCL) e.g., COMMIT, ROLLBACK, and SAVEPOINT. These are the commands used for managing transactions in the database. TCL is used for managing the changes made by DML."
        flag="1"

        />
        
       <Question 
        question="What do you understand by Data Model?" 
        answer="The Data model is specified as a collection of conceptual tools for describing data, data relationships, data semantics and constraints. These models are used to describe the relationship between the entities and their attributes."

        />
        
       <Question 
        question="Define a Relation Schema and a Relation." 
        answer="A Relation Schema is specified as a set of attributes. It is also known as table schema. It defines what the name of the table is. Relation schema is known as the blueprint with the help of which we can explain that how the data is organized into tables. This blueprint contains no data."
        answer1="A relation is specified as a set of tuples. A relation is the set of related attributes with identifying key attributes"
        answer2="example:- Let r be the relation which contains set tuples (t1, t2, t3, ..., tn). Each tuple is an ordered list of n-values t=(v1,v2, ...., vn)."

        />
        
       <Question 
        question="What is a degree of Relation?" 
        answer="The degree of relation is a number of attribute of its relation schema. A degree of relation is also known as Cardinality it is defined as the number of occurrence of one entity which is connected to the number of occurrence of other entity. There are three degree of relation they are one-to-one(1:1), one-to-many(1:M), many-to-one(M:M)."

        />
        
       <Question 
        question="What is the Relationship?" 
        answer="The Relationship is defined as an association among two or more entities. There are three type of relationships in DBMS-"
        answer1="One-To-One: Here one record of any object can be related to one record of another object."
        answer2="One-To-Many (many-to-one): Here one record of any object can be related to many records of other object and vice versa."
        answer3="Many-to-many: Here more than one records of an object can be related to n number of records of another object."

        />
        
       <Question 
        question="What are the disadvantages of file processing systems?" 
        answer="Inconsistent"
        answer1="Not secure"
        answer2="Data redundancy"
        answer3="Difficult in accessing data"
        answer4="Data isolation"
        answer5="Data integrity"
        flag="!"

        />
        
       <Question 
        question="What is data abstraction in DBMS?" 
        answer="Data abstraction in DBMS is a process of hiding irrelevant details from users. Because database systems are made of complex data structures so, it makes accessible the user interaction with the database."
        answer1="For example: We know that most of the users prefer those systems which have a simple GUI that means no complex processing. So, to keep the user tuned and for making the access to the data easy, it is necessary to do data abstraction. In addition to it, data abstraction divides the system in different layers to make the work specified and well defined."
        flag="1"

        />
        
       <Question 
        question="What are the three levels of data abstraction?" 
        answer="Physical level: It is the lowest level of abstraction. It describes how data are stored."
        answer1="Logical level: It is the next higher level of abstraction. It describes what data are stored in the database and what the relationship among those data is."
        answer2="View level: It is the highest level of data abstraction. It describes only part of the entire database."
        answer3="For example- User interacts with the system using the GUI and fill the required details, but the user doesn't have any idea how the data is being used. So, the abstraction level is entirely high in VIEW LEVEL."
        answer4="Then, the next level is for PROGRAMMERS as in this level the fields and records are visible and the programmers have the knowledge of this layer. So, the level of abstraction here is a little low in VIEW LEVEL."
        answer5="And lastly, physical level in which storage blocks are described."
        flag="1"

        />
        
       <Question 
        question="What is DDL (Data Definition Language)?" 
        answer="Data Definition Language (DDL) is a standard for commands which defines the different structures in a database. Most commonly DDL statements are CREATE, ALTER, and DROP. These commands are used for updating data into the database."

        />
        
       <Question 
        question="What is DML (Data Manipulation Language)?" 
        answer="DData Manipulation Language (DML) is a language that enables the user to access or manipulate data as organized by the appropriate data model. For example- SELECT, UPDATE, INSERT, DELETE"
        answer1="There is two type of DML:"
        answer2="Procedural DML or Low level DML: It requires a user to specify what data are needed and how to get those data."
        answer3="Non-Procedural DML or High level DML:It requires a user to specify what data are needed without specifying how to get those data."
        flag="1"

        />
        
       <Question 
        question="Explain the functionality of DML Compiler." 
        answer="The DML Compiler translates DML statements in a query language that the query evaluation engine can understand. DML Compiler is required because the DML is the family of syntax element which is very similar to the other programming language which requires compilation. So, it is essential to compile the code in the language which query evaluation engine can understand and then work on those queries with proper output."

        />
        
       <Question 
        question="What is Relational Algebra?" 
        answer="Relational Algebra is a Procedural Query Language which contains a set of operations that take one or two relations as input and produce a new relationship. Relational algebra is the basic set of operations for the relational model. The decisive point of relational algebra is that it is similar to the algebra which operates on the number."

        />
        
       <Question 
        question="What is Relational Calculus?" 
        answer="Relational Calculus is a Non-procedural Query Language which uses mathematical predicate calculus instead of algebra. Relational calculus doesn't work on mathematics fundamentals such as algebra, differential, integration, etc. That's why it is also known as predicate calculus."
        answer1="There is two type of relational calculus:"
        answer2="-> Tuple relational calculus"
        answer3="-> Domain relational calculus"
        flag="1"

        />
        
       <Question 
        question="What do you understand by query optimization?" 
        answer="The term query optimization specifies an efficient execution plan for evaluating a query that has the least estimated cost. The concept of query optimization came into the frame when there were a number of methods, and algorithms existed for the same task then the question arose that which one is more efficient and the process of determining the efficient way is known as query optimization."
        answer1="There are many benefits of query optimization:"
        answer2="->It reduces the time and space complexity."
        answer3="->More queries can be performed as due to optimization every query comparatively takes less time."
        answer4="->User satisfaction as it will provide output fast"
        flag="1"

        />
        
       <Question 
        question="What do you mean by durability in DBMS?" 
        answer="Once the DBMS informs the user that a transaction has completed successfully, its effect should persist even if the system crashes before all its changes are reflected on disk. This property is called durability. Durability ensures that once the transaction is committed into the database, it will be stored in the non-volatile memory and after that system failure cannot affect that data anymore."

        />
        
       <Question 
        question="What is normalization?" 
        answer="Normalization is a process of analysing the given relation schemas according to their functional dependencies. It is used to minimize redundancy and also used to minimize insertion, deletion and update distractions. Normalization is considered as an essential process as it is used to avoid data redundancy, insertion anomaly, updation anomaly, deletion anomaly."
        answer1="There most commonly used normal forms are:"
        answer2="-> First Normal Form(1NF)"
        answer3="-> Second Normal Form(2NF)"
        answer4="-> Third Normal Form(3NF)"
        answer5="-> Boyce & Codd Normal Form(BCNF)"
        flag="1"

        />
        
       <Question 
        question="What is Denormalization?" 
        answer="Denormalization is the process of boosting up database performance and adding of redundant data which helps to get rid of complex data. Denormalization is a part of database optimization technique. This process is used to avoid the use of complex and costly joins. Denormalization doesn't refer to the thought of not to normalize instead of that denormalization takes place after normalization. In this process, firstly the redundancy of the data will be removed using normalization process than through denormalization process we will add redundant data as per the requirement so that we can easily avoid the costly joins."

        />
        
       <Question 
        question="What is functional Dependency?" 
        answer="Functional Dependency is the starting point of normalization. It exists when a relation between two attributes allow you to determine the corresponding attribute's value uniquely. The functional dependency is also known as database dependency and defines as the relationship which occurs when one attribute in a relation uniquely determines another attribute. It is written as A->B which means B is functionally dependent on A."

        />
        
       <Question 
        question="What is the E-R model?" 
        answer="E-R model is a short name for the Entity-Relationship model. This model is based on the real world. It contains necessary objects (known as entities) and the relationship among these objects. Here the primary objects are the entity, attribute of that entity, relationship set, an attribute of that relationship set can be mapped in the form of E-R diagram."
        answer1="In E-R diagram, entities are represented by rectangles, relationships are represented by diamonds, attributes are the characteristics of entities and represented by ellipses, and data flow is represented through a straight line."
        flag="1"

        />
        
       <Question 
        question="What is an entity?" 
        answer="The Entity is a set of attributes in a database. An entity can be a real-world object which physically exists in this world. All the entities have their attribute which in the real world considered as the characteristics of the object."
        answer1="For example: In the employee database of a company, the employee, department, and the designation can be considered as the entities. These entities have some characteristics which will be the attributes of the corresponding entity."
        flag="1"

        />
        
       <Question 
        question="What is an Entity type?" 
        answer="An entity type is specified as a collection of entities, having the same attributes. Entity type typically corresponds to one or several related tables in the database. A characteristic or trait which defines or uniquely identifies the entity is called entity type."
        answer1="For example, a student has student_id, department, and course as its characteristics."
        flag="1"

        />
        
       <Question 
        question="What is an Entity set?" 
        answer="The entity set specifies the collection of all entities of a particular entity type in the database. An entity set is known as the set of all the entities which share the same properties."
        answer1="For example, a set of people, a set of students, a set of companies, etc."
        flag="1"

        />
        
       <Question 
        question="What is an Extension of entity type?" 
        answer="An extension of an entity type is specified as a collection of entities of a particular entity type that are grouped into an entity set."

        />
        
       <Question 
        question="What is Weak Entity set?" 
        answer="An entity set that doesn't have sufficient attributes to form a primary key is referred to as a weak entity set. The member of a weak entity set is known as a subordinate entity. Weak entity set does not have a primary key, but we need a mean to differentiate among all those entries in the entity set that depend on one particular strong entity set."

        />
        
       <Question 
        question="What is an attribute?" 
        answer="An attribute refers to a database component. It is used to describe the property of an entity. An attribute can be defined as the characteristics of the entity. Entities can be uniquely identified using the attributes. Attributes represent the instances in the row of the database."
        answer1="For example: If a student is an entity in the table then age will be the attribute of that student."
        flag="1"

        />
        
       <Question 
        question="What are the integrity rules in DBMS?" 
        answer="Data integrity is one significant aspect while maintaining the database. So, data integrity is enforced in the database system by imposing a series of rules. Those set of integrity is known as the integrity rules."
        answer1="There are two integrity rules in DBMS:"
        answer2="->Entity Integrity : It specifies that 'Primary key cannot have a NULL value.'"
        answer3="Referential Integrity: It specifies that 'Foreign Key can be either a NULL value or should be the Primary Key value of other relation'"
        flag="1"

        />
        
       <Question 
        question="What do you mean by extension and intension?" 
        answer="Extension: The Extension is the number of tuples present in a table at any instance. It changes as the tuples are created, updated and destroyed. The actual data in the database change quite frequently. So, the data in the database at a particular moment in time is known as extension or database state or snapshot. It is time dependent."
        answer1="Intension: Intension is also known as Data Schema and defined as the description of the database, which is specified during database design and is expected to remain unchanged. The Intension is a constant value that gives the name, structure of tables and the constraints laid on it."
        flag="1"

        />
        
       <Question 
        question="What is System R? How many of its two major subsystems?" 
        answer="System R was designed and developed from 1974 to 1979 at IBM San Jose Research Centre. System R is the first implementation of SQL, which is the standard relational data query language, and it was also the first to demonstrate that RDBMS could provide better transaction processing performance. It is a prototype which is formed to show that it is possible to build a Relational System that can be used in a real-life environment to solve real-life problems."
        answer1="Following are two major subsystems of System R:"
        answer2="->Research Storage"
        answer3="->System Relational Data System"
        flag="1"

        />
        
       <Question 
        question="What is Data Independence?" 
        answer="Data independence specifies that 'the application is independent of the storage structure and access strategy of data.' It makes you able to modify the schema definition at one level without altering the schema definition in the next higher level."
        answer1="It makes you able to modify the schema definition in one level should not affect the schema definition in the next higher level."
        flag="1"

        />
        
       <Question 
        question="What is Join?" 
        answer="The Join operation is one of the most useful activities in relational algebra. It is most commonly used way to combine information from two or more relations. A Join is always performed on the basis of the same or related column. Most complex queries of SQL involve JOIN command."

        />
        
       <Question 
        question="What is 2NF?" 
        answer="2NF is the Second Normal Form. A table is said to be 2NF if it follows the following conditions:"
        answer1="->The table is in 1NF, i.e., firstly it is necessary that the table should follow the rules of 1NF."
        answer2="->Every non-prime attribute is fully functionally dependent on the primary key, i.e., every non-key attribute should be dependent on the primary key in such a way that if any key element is deleted, then even the non_key element will still be saved in the database."
        flag="1"

        />
        
       <Question 
        question="What is BCNF?" 
        answer="BCMF stands for Boyce-Codd Normal Form. It is an advanced version of 3NF, so it is also referred to as 3.5NF. BCNF is stricter than 3NF."
        answer1="A table complies with BCNF if it satisfies the following conditions:"
        answer2="->It is in 3NF."
        answer3="->For every functional dependency X->Y, X should be the super key of the table. It merely means that X cannot be a non-prime attribute if Y is a prime attribute."
        flag="1"

        />
        
       <Question 
        question="Explain ACID properties" 
        answer="ACID properties are some basic rules, which has to be satisfied by every transaction to preserve the integrity. These properties and rules are:"
        answer1="->ATOMICITY: Atomicity is more generally known as ?all or nothing rule.' Which implies all are considered as one unit, and they either run to completion or not executed at all."
        answer2="->CONSISTENCY: This property refers to the uniformity of the data. Consistency implies that the database is consistent before and after the transaction."
        answer3="->ISOLATION: This property states that the number of the transaction can be executed concurrently without leading to the inconsistency of the database state."
        answer4="->DURABILITY: This property ensures that once the transaction is committed it will be stored in the non-volatile memory and system crash can also not affect it anymore."
        flag="1"

        />
        
       <Question 
        question=" What is stored procedure?" 
        answer="A stored procedure is a group of SQL statements that have been created and stored in the database. The stored procedure increases the reusability as here the code or the procedure is stored into the system and used again and again that makes the work easy, takes less time in processing and decreases the complexity of the system. So, if you have a code which you need to use again and again then save that code and call that code whenever it is required."

        />
        
       <Question 
        question="How do you communicate with an RDBMS?" 
        answer="You have to use Structured Query Language (SQL) to communicate with the RDBMS. Using queries of SQL, we can give the input to the database and then after processing of the queries database will provide us the required output."

        />
       <Question 
        question="What is the 3-Tier architecture?" 
        answer="The 3-Tier architecture contains another layer between the client and server. Introduction of 3-tier architecture is for the ease of the users as it provides the GUI, which, make the system secure and much more accessible. In this architecture, the application on the client-end interacts with an application on the server which further communicates with the database system."

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
export default Dbms;