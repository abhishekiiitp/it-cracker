import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Sql=()=>{

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
        <div id="heading">Interview Question for SQL 
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is SQL?" 
        answer="SQL stands for Structured Query Language. It is the primary language to interact with databases. With the help of SQL, we can extract data from a database, modify this data and also update it whenever there is a requirement. This query language is evergreen and is widely used across industries. For example, if a company has records of all the details of their employees in the database. With the help of SQL, all of this data can be queried to find out valuable insights in a short span of time."

        />

       <Question 
        question="How to create a table in SQL?" 
        answer=" CREATE TABLE table_name (......)"
        answer1="We will start off by giving the keywords, CREATE TABLE, then we will give the name of the table. After that in braces, we will list out all the columns along with their datatypes."
        flag="1"

        />
        
       <Question 
        question="How to delete a table in SQL?" 
        answer="There are two ways to delete a table from sql: DROP and TRUNCATE. The DROP TABLE command is used to completely delete the table from the database. This is the command:"
        answer1="=> DROP TABLE table_name;"
        answer2="But if we want to delete only the data present in the table but not the table itself, then we will use the truncate command:"
        answer3="DROP TABLE table_name ;"
        flag="1"

        />
        
       <Question 
        question="How to change a table name in SQL?" 
        answer="ALTER TABLE table_name RENAME TO new_table_name;"
        answer1="We will start off by giving the keywords ALTER TABLE, then we will follow it up by giving the original name of the table, after that, we will give in the keywords RENAME TO and finally, we will give the new table name."
        flag="1"

        />
        
       <Question 
        question="How to delete a row in SQL?" 
        answer="We will be using the DELETE query to delete existing rows from the table:"
        answer1="DELETE FROM table_name WHERE [condition];"
        answer2="We will start off by giving the keywords DELETE FROM, then we will give the name of the table, after that we will give the WHERE clause and give the condition on the basis of which we would want to delete a row."
        answer3=" for eg:-> vDELETE FROM employee WHERE [age=25];"
        flag="1"

        />
        
       <Question 
        question="How to create a database in SQL?" 
        answer="A database is a repository in sql, which can comprise of multiple tables."
        answer1="->CREATE DATABASE database_name."
        flag="1"
        />
        
       <Question 
        question="What is Normalization in SQL?" 
        answer="Normalization is used to decompose a larger, complex table into simple and smaller ones. This helps us in removing all the redundant data."
        answer1="Generally, in a table, we will have a lot of redundant information which is not required, so it is better to divide this complex table into multiple smaller tables which contains only unique information."
        flag="1"

        />
        
       <Question 
        question="What is join in SQL?" 
        answer="Joins are used to combine rows from two or more tables, based on a related column between them."
        answer1="•INNER JOIN − Returns rows when there is a match in both tables."
        answer2="•LEFT JOIN − Returns all rows from the left table, even if there are no matches in the right table."
        answer3="•RIGHT JOIN − Returns all rows from the right table, even if there are no matches in the left table."
        answer4="•SELF JOIN − Used to join a table to itself as if the table were two tables, temporarily renaming at least one table in the SQL statement."
        answer5="•CARTESIAN JOIN (CROSS JOIN) − Returns the Cartesian product of the sets of records from the two or more joined tables."

        />
        
       <Question 
        question="What is SQL server?" 
        answer="To understand what exactly is SQL Server, we need to understand what is DBMS and RDBMS. DBMS stands for Database Management System. When we have a huge database with us, we would need a proper management system which would help us organise this database."

        />
        
       <Question 
        question="How to insert date in SQL?" 
        answer="If the RDBMS is MYSQL, this is how we can insert date:"
        answer1="“INSERT INTO tablename (col_name, col_date) VALUES (‘DATE: Manual Date’, ‘2020-9-10’)”;"
        flag="1"

        />
        
       <Question 
        question="What is Primary Key in SQL?" 
        answer="Primary Key is a constraint in SQL. So, before understanding what exactly is a primary key, let’s understand what exactly is a constraint in SQL. Constraints are the rules enforced on data columns on a table. These are used to limit the type of data that can go into a table. Constraints can either be column level or table level. "
        answer1="You can consider Primary Key constraint to be a combination of UNIQUE and NOT NULL constraint. This means that if a column is set as a primary key, then this particular column cannot have any null values present in it and also all the values present in this column must be unique."
        flag="1"

        />
        
       <Question 
        question="How do I view tables in SQL?" 
        answer="To view tables in SQL, all you need to do is give this command:"
        answer1="Show tables;"
        flag="1"

        />
        
       <Question 
        question="What is pl sql?" 
        answer="PL SQL stands for Procedural language constructs for Structured Query Language. PL SQL was introduced by Oracle to overcome the limitations of plain sql. So, pl sql adds in procedural language approach to the plain vanilla sql."
        answer1="One thing to be noted over here is that pl sql is only for oracle databases. If you don’t have an Oracle database, then you cant work with PL SQL."
        answer2="While, with the help of sql, we were able to DDL and DML queries, with the help of PL SQL, we will be able to create functions, triggers and other procedural constructs."
        flag="1"

        />
        
       <Question 
        question="What is ETL in SQL?" 
        answer="ETL stands for Extract, Transform and Load. It is a three step process, where we would have to start off by extracting the data from sources. Once we collate the data from different sources, what we have is raw data. This raw data has to be transformed into tidy format, which will come in the second phase. Finally, we would have to load this tidy data into tools which would help us to find insights."

        />
        
       <Question 
        question="What is the update command in SQL?" 
        answer="The update command comes under the DML(Data Manipulation Langauge) part of sql and is used to update the existing data in the table."
        answer1="UPDATE employees SET last_name=‘Cohen’ WHERE employee_id=101;"
        flag="1"

        />
        
       <Question 
        question="How to rename column name in SQL Server?" 
        answer="When it comes to SQL Server, it is not possible to rename the column with the help of ALTER TABLE command, we would have to use sp_rename."

        />
        
       <Question 
        question="Write a Query to display the number of employees working in each region? " 
        answer="SELECT region, COUNT(gender) FROM employee GROUP BY region;"

        />
        
       <Question 
        question="What are Nested Triggers?" 
        answer="Triggers may implement DML by using INSERT, UPDATE, and DELETE statements. These triggers that contain DML and find other triggers for data modification are called Nested Triggers."

        />
        
       <Question 
        question="Write SQL query to fetch employee names having a salary greater than or equal to 20000 and less than or equal 10000." 
        answer="By using BETWEEN in the where clause, we can retrieve the Employee Ids of employees with salary >= 20000and <=10000. SELECT FullName FROM EmployeeDetails WHERE EmpId IN (SELECT EmpId FROM EmployeeSalary WHERE Salary BETWEEN 5000 AND 10000)"

        />
        
       <Question 
        question="Given a table Employee having columns empName and empId, what will be the result of the SQL query below? select empName from Employee order by 2 asc;" 
        answer="“Order by 2” is valid when there are at least 2 columns used in SELECT statement. Here this query will throw error because only one column is used in the SELECT statement"

        />
        
       <Question 
        question="What is OLTP?" 
        answer="OLTP stands for Online Transaction Processing. And is a class of software applications capable of supporting transaction-oriented programs. An essential attribute of an OLTP system is its ability to maintain concurrency. "

        />
        
       <Question 
        question="What is Data Integrity?" 
        answer="Data Integrity is the assurance of accuracy and consistency of data over its entire life-cycle, and is a critical aspect to the design, implementation and usage of any system which stores, processes, or retrieves data. It also defines integrity constraints to enforce business rules on the data when it is entered into an application or a database."

        />
        
       <Question 
        question=" What is OLAP?" 
        answer="OLAP stands for Online Analytical Processing. And a class of software programs which are characterized by relatively low frequency of online transactions. Queries are often too complex and involve a bunch of aggregations. "

        />
        
       <Question 
        question="Find the Constraint information from the table?" 
        answer="There are so many times where user needs to find out the specific constraint information of the table. following queries are useful, SELECT * From User_Constraints; SELECT * FROM User_Cons_Columns;"

        />
        
       <Question 
        question="Can you get the list of employees with same salary?" 
        answer="Select distinct e.empid,e.empname,e.salary from employee e, employee e1 where e.salary =e1.salary and e.empid != e1.empid "

        />
        
       <Question 
        question="What is an alternative for TOP clause in SQL?" 
        answer="1. ROWCOUNT function "
        answer2="2. Set rowcount 3"
        answer3="3. Select * from employee order by empid desc Set rowcount 0 "
        flag="1"

        />
        
       <Question 
        question="Will following statement give error or 0 as output? SELECT AVG (NULL)" 
        answer="Error. Operand data type NULL is invalid for Avg operator. "

        />
        
       <Question 
        question="What is the Cartesian product of the table?" 
        answer="The output of Cross Join is called a Cartesian product. It returns rows combining each row from the first table with each row of the second table. For Example, if we join two tables having 15 and 20 columns the Cartesian product of two tables will be 15×20=300 rows."

        />
        
       <Question 
        question=" What is a schema in SQL?" 
        answer="Our database comprises of a lot of different entities such as tables, stored procedures, functions, database owners and so on. To make sense of how all these different entities interact, we would need the help of schema. So, you can consider schema to be the logical relationship between all the different entities which are present in the database."
        answer1="->We can decide which user has access to which tables in the database."
        answer2="->We can modify or add new relationships between different entities in the database."
        answer3="Overall, you can consider a schema to be a blueprint for the database, which will give you the complete picture of how different objects interact with each other and which users have access to different entities."
        flag="1"
        />
        
       <Question 
        question="What is a unique key in SQL?" 
        answer="Unique Key is a constraint in SQL. So, before understanding what exactly is a primary key, let’s understand what exactly is a constraint in SQL. Constraints are the rules enforced on data columns on a table. These are used to limit the type of data that can go into a table. Constraints can either be column level or table level. "
        answer1="Unique Key:->Whenever we give the constraint of unique key to a column, this would mean that the column cannot have any duplicate values present in it. In other words, all the records which are present in this column have to be unique."
        flag="1"

        />
        
       <Question 
        question="How to implement multiple conditions using WHERE clause?" 
        answer="Example:-> SELECT * FROM employees WHERE first_name = ‘Steven’ AND salary <=10000;"
        answer1="In the above command, we are giving two conditions. The condition ensures that we extract only those records where the first name of the employee is ‘Steven’ and the second condition ensures that the salary of the employee is less than $10,000. In other words, we are extracting only those records, where the employee’s first name is ‘Steven’ and this person’s salary should be less than $10,000."
        flag="1"

        />
        
       <Question 
        question=" How to find the nth highest salary in SQL?" 
        answer="This is how we can find the nth highest salary in SQL SERVER using TOP keyword:"
        answer1="SELECT TOP 1 salary FROM ( SELECT DISTINCT TOP N salary FROM #Employee ORDER BY salary DESC ) AS temp ORDER BY salary"
        answer3="This is how we can find the nth highest salary in MYSQL using LIMIT keyword:"
        answer4="SELECT salary FROM Employee ORDER BY salary DESC LIMIT N-1, 1"
        flag="1"

        />
        
       <Question 
        question="How to add a new column in SQL?" 
        answer="We can add a new column in SQL with the help of alter command:"
        answer1="ALTER TABLE employees ADD COLUMN contact INT(10);"
        flag="1"

        />
        
       <Question 
        question="How to use LIKE in SQL?" 
        answer="The LIKE operator checks if an attribute value matches a given string pattern. Here is an example of LIKE operator"
        answer1="SELECT * FROM employees WHERE first_name like ‘Steven’; "
        flag="1"

        />
        
       <Question 
        question=" If we drop a table, does it also drop related objects like constraints, indexes, columns, default, views and sorted procedures?" 
        answer="Yes, SQL server drops all related objects, which exists inside a table like constraints, indexex, columns, defaults etc. But dropping a table will not drop views and sorted procedures as they exist outside the table. "

        />
        
       <Question 
        question="Can we disable a trigger? If yes, How?" 
        answer="Yes, we can disable a single trigger on the database by using “DISABLE TRIGGER triggerName ON<> We also have an option to disable all the trigger by using, “DISABLE Trigger ALL ON ALL SERVER”"

        />
        
       <Question 
        question="What is a Live Lock?" 
        answer="A live lock is one where a request for an exclusive lock is repeatedly denied because a series of overlapping shared locks keep interferring. A live lock also occurs when read transactions create a table or page. "

        />
        
       <Question 
        question="How to fetch alternate records from a table?" 
        answer="Records can be fetched for both Odd and Even row numbers- To display even numbers-. Select employeeId from (Select rowno, employeeId from employee) where mod(rowno,2)=0 To display odd numbers-. Select employeeId from (Select rowno, employeeId from employee) where mod(rowno,2)=1"

        />
        
       <Question 
        question=" Define COMMIT and give an example?" 
        answer="When a COMMIT is uded in a transaction all chnages made in the transaction are written into the database permanently. Example: BEGIN TRANSACTION; DELETE FROM HR.JobCandidate WHERE JobCandidateID = 20; COMMIT TRANSACTION; The above example deletes a job candidate in a SQL server."

        />
        
       <Question 
        question="Can you join table by itself?" 
        answer="A table can be joined to itself using self join, when you want to create a result set that joins records in a table with other records in the same table."

        />
        
       <Question 
        question="Explain Equi join with example" 
        answer="When two or more tables has been joined using equal to operator then this category is called as equi join. Just we need to concentrate on condition is equal to(=) between the columns in the table. Example: Select a.Employee_name,b.Department_name from Employee a,Employee b where a.Department_ID=b.Department_ID"

        />
        
       <Question 
        question="How do we avoid getting duplicate entries in a query?" 
        answer="The SELECT DISTINCT is used to get distinct data from tables using a query. The below SQL query selects only the DISTINCT values from the “Country” column in the “Customers” table: SELECT DISTINCT Country FROM Customers;"

        />
        
       <Question 
        question=" How can you create an empty table from an existing table?" 
        answer="Lets take an example: Select * into studentcopy from student where 1=2 Here, we are copying student table to another table with the same structure with no rows copied."

        />
        
       <Question 
        question="Write a Query to display odd records from student table?" 
        answer="SELECT * FROM (SELECT *, ROW_NUMBER() OVER (ORDER BY student_no) AS RowID FROM student) WHERE row_id %2!=0"

        />
        
       <Question 
        question="How can you delete duplicate records in a table with no primary key?" 
        answer="By using the SET ROWCOUNT command. It limits the number of records affected by a command. Let’s take an example, if you have 2 duplicate rows, you would SET ROWCOUNT 1, execute DELETE command and then SET ROWCOUNT 0"

        />
        
       <Question 
        question="Difference between NVL and NVL2 functions?" 
        answer="Both the NVL(exp1, exp2) and NVL2(exp1, exp2, exp3) functions check the value exp1 to see if it is null. With the NVL(exp1, exp2) function, if exp1 is not null, then the value of exp1 is returned; otherwise, the value of exp2 is returned, but case to the same data type as that of exp1. With the NVL2(exp1, exp2, exp3) function, if exp1 is not null, then exp2 is returned; otherwise, the value of exp3 is returned."

        />
       <Question 
        question="What does this query says? GRANT privilege_name ON object_name TO {user_name|PUBLIC|role_name} [WITH GRANT OPTION];" 
        answer="The given syntax indicates that the user can grant access to another user too."

        />
       <Question 
        question="What does myisamchk do?" 
        answer="It compresses the MyISAM tables, which reduces their disk or memory usage."

        />
       <Question 
        question="What is ISAM?" 
        answer="ISAM is abbreviated as Indexed Sequential Access Method. It was developed by IBM to store and retrieve data on secondary storage systems like tapes."

        />
       <Question 
        question="What is Database White box testing?" 
        answer="White box testing includes: Database Consistency and ACID properties Database triggers and logical views Decision Coverage, Condition Coverage, and Statement Coverage Database Tables, Data Model, and Database Schema Referential integrity rules."

        />
       <Question 
        question="What is Database Black Box Testing?" 
        answer="This testing involves 1. Data Mapping 2. Data stored and retrieved 3. Use of Black Box testing techniques such as Equivalence Partitioning and Boundary Value Analysis (BVA)."

        />
       <Question 
        question="What is a Subquery?" 
        answer="A SubQuery is a SQL query nested into a larger query. Example: SELECT employeeID, firstName, lastName FROM employees WHERE departmentID IN (SELECT departmentID FROM departments WHERE locationID = 2000) ORDER BY firstName, lastName;"

        />
       <Question 
        question="What is the difference between CHAR and VARCHAR2 datatype in SQL?" 
        answer="CHAR is used to store fixed-length character strings, and VARCHAR2 used to store variable-length character strings"

        />
       <Question 
        question="Write a Query to display employee details along with age?" 
        answer="SELECT * DATEDIFF(yy, dob, getdate()) AS ‘Age’ FROM employee"

        />
       <Question 
        question="Write an SQL query to get the third maximum salary of an employee from a table named employee_table." 
        answer="SELECT TOP 1 salary FROM ( SELECT TOP 3 salary FROM employee_table ORDER BY salary DESC ) AS emp ORDER BY salary ASC;"

        />
       <Question 
        question="What is the usage of NVL() function?" 
        answer="This function is used to convert NULL value to the other value."

        />
       <Question 
        question="Write a Query to display employee details belongs to ECE department?" 
        answer="SELECT EmpNo, EmpName, Salary FROM employee WHERE deptNo in (select deptNo from dept where deptName = ‘ECE’)"

        />
       <Question 
        question="Write an SQL query to show the second highest salary from a table." 
        answer="Select max(Salary) from Worker where Salary not in (Selct max(Salary) from Worker); "

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
export default Sql;