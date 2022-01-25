import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Dataanalysis=()=>{

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
        <div id="heading">Interview Question for Data Analysyst
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is data mining?" 
        answer="Data mining is the process of discovering relevant information that has not yet been identified before.In data mining, raw data is converted into valuable information."

        />

       <Question 
        question="Define the term 'Data Wrangling in Data Analytics." 
        answer="Data Wrangling is the process wherein raw data is cleaned, structured, and enriched into a desired usable format for better decision making. It involves discovering, structuring, cleaning, enriching, validating, and analyzing data. This process can turn and map out large amounts of data extracted from various sources into a more useful format. Techniques such as merging, grouping, concatenating, joining, and sorting are used to analyze the data. Thereafter it gets ready to be used with another dataset."

        />
        
       <Question 
        question="What is the process of Data Analysis?" 
        answer="Data analysis is the process of collecting, cleansing, interpreting, transforming and modeling data to gather insights and generate reports to gain business profits. Refer to the image below to know the various steps involved in the process."
        answer1="->Collect Data: The data gets collected from various sources and is stored so that it can be cleaned and prepared. In this step, all the missing values and outliers are removed."
        answer2="->Analyse Data: Once the data is ready, the next step is to analyze the data. A model is run repeatedly for improvements. Then, the mode is validated to check whether it meets the business requirements."
        answer3="->Create Reports: Finally, the model is implemented and then reports thus generated are passed onto the stakeholders."
        flag="1"

        />
        
       <Question 
        question="What is data profiling?" 
        answer="Data profiling is done to evaluate a dataset for its uniqueness, logic, and consistency. It cannot identify inaccurate or incorrect data values."

        />
        
       <Question 
        question="What is data cleansing?" 
        answer="Data Cleansing or Wrangling or Data Cleaning. All mean the same thing. It is the process of identifying and removing errors to enhance the quality of data."

        />
        
       <Question 
        question="What are the important steps in the data validation process?" 
        answer="As the name suggests Data Validation is the process of validating data. This step mainly has two processes involved in it. These are Data Screening and Data Verification."
        answer1="->Data Screening: Different kinds of algorithms are used in this step to screen the entire data to find out any inaccurate values."
        answer2="->Data Verification: Each and every suspected value is evaluated on various use-cases, and then a final decision is taken on whether the value has to be included in the data or not."
        flag="1"

        />
        
       <Question 
        question="What do you think are the criteria to say whether a developed data model is good or not?" 
        answer="Well, the answer to this question may vary from person to person. But below are a few criteria which I think are a must to be considered to decide whether a developed data model is good or not:"
        answer1="->A model developed for the dataset should have predictable performance. This is required to predict the future."
        answer2="->A model is said to be a good model if it can easily adapt to changes according to business requirements."
        answer3="->If the data gets changed, the model should be able to scale according to the data."
        answer4="->The model developed should also be able to easily consumed by the clients for actionable and profitable results."
        flag="1"

        />
        
       <Question 
        question="When do you think you should retrain a model? Is it dependent on the data?" 
        answer="Business data keeps changing on a day-to-day basis, but the format doesn’t change. As and when a business operation enters a new market, sees a sudden rise of opposition or sees its own position rising or falling, it is recommended to retrain the model. So, as and when the business dynamics change, it is recommended to retrain the model with the changing behaviors of customers."

        />
        
       <Question 
        question="Can you mention a few problems that data analyst usually encounter while performing the analysis?" 
        answer="Presence of Duplicate entries and spelling mistakes, reduce data quality."
        answer1="If you are extracting data from a poor source, then this could be a problem as you would have to spend a lot of time cleaning the data."
        answer2="When you extract data from sources, the data may vary in representation. Now, when you combine data from these sources, it may happen that the variation in representation could result in a delay."
        answer3="Lastly, if there is incomplete data, then that could be a problem to perform analysis of data."
        flag="1"

        />
        
       <Question 
        question="What is the KNN imputation method?" 
        answer="This method is used to impute the missing attribute values which are imputed by the attribute values that are most similar to the attribute whose values are missing. The similarity of the two attributes is determined by using the distance functions."

        />
        
       <Question 
        question="Can you tell what is a waterfall chart and when do we use it?" 
        answer="The waterfall chart shows both positive and negative values which lead to the final result value. For example, if you are analyzing a company’s net income, then you can have all the cost values in this chart. With such kind of a chart, you can visually, see how the value from revenue to the net income is obtained when all the costs are deducted."

        />
        
       <Question 
        question="How can you highlight cells with negative values in Excel?" 
        answer="You can highlight cells with negative values in Excel by using the conditional formatting. Below are the steps that you can follow:"
        answer1="->Select the cells which you want to highlight with the negative values."
        answer2="->Go to the Home tab and click on the Conditional Formatting option"
        answer3="->Go to the Highlight Cell Rules and click on the Less Than option."
        answer4="->In the dialog box of Less Than, specify the value as 0."
        flag="1"

        />
        
       <Question 
        question="How can you clear all the formatting without actually removing the cell contents?" 
        answer="Sometimes you may want to remove all the formatting and just want to have the basic/simple data. To do this, you can use the ‘Clear Formats’ options found in the Home Tab. You can evidently see the option when you click on the ‘Clear’ drop down."

        />
        
       <Question 
        question="What is a Pivot Table?" 
        answer="A Pivot Table is a simple feature in Microsoft Excel which allows you to quickly summarize huge datasets. It is really easy to use as it requires dragging and dropping rows/columns headers to create reports."

        />
        
       <Question 
        question="Can you make a Pivot Table from multiple tables?" 
        answer="Yes, we can create one Pivot Table from multiple different tables when there is a connection between these tables."

        />
        
       <Question 
        question=" How can we select all blank cells in Excel?" 
        answer="If you wish to select all the blank cells in Excel, then you can use the Go To Special Dialog Box in Excel. Below are the steps that you can follow to select all the blank cells in Excel."
        answer1="->First, select the entire dataset and press F5. This will open a Go To Dialog Box."
        answer2="->Click the ‘Special‘ button which will open a Go To special Dialog box."
        answer3="->After that, select the Blanks and click on OK."
        flag="1"

        />
        
       <Question 
        question="What are the most common questions you should ask a client before creating a dashboard?" 
        answer="Well, the answer to this question varies on a case-to-case basis. But, here are a few common questions that you can ask while creating a dashboard in Excel."
        answer1="->Purpose of the Dashboards"
        answer2="->Different data sources"
        answer3="->Usage of the Excel Dashboard"
        answer4="->The frequency at which the dashboard needs to be updated"
        flag="1"

        />
        
       <Question 
        question=" What is a Print Area?" 
        answer="A Print Area in Excel is a range of cells that you designate to print whenever you print that worksheet. For example, if you just want to print the first 20 rows from the entire worksheet, then you can set the first 20 rows as the Print Area."

        />
        
       <Question 
        question="How can you set it in Excel?" 
        answer="Now, to set the Print Area in Excel, you can follow the below steps:"
        answer1="->Select the cells for which you want to set the Print Area."
        answer2="->Then, click on the Page Layout Tab."
        answer3="->Click on Print Area."
        answer4="->Click on Set Print Area."
        flag="1"

        />
        
       <Question 
        question="What steps can you take to handle slow Excel workbooks?" 
        answer="Well, there are various ways to handle slow Excel workbooks. But, here are a few ways in which you can handle workbooks."
        answer1="->Try using manual calculation mode."
        answer2="->Maintain all the referenced data in a single sheet."
        answer3="->Often use excel tables and named ranges."
        answer4="->Use Helper columns instead of array formulas."
        answer5="->Convert all the unused formulas to values."
        flag="1"

        />
        
       <Question 
        question="Can you sort multiple columns at one time?" 
        answer="Multiple sorting refers to the sorting of a column and then sorting the other column by keeping the first column intact. In Excel, you can definitely sort multiple columns at a one time."
        answer1="To do multiple sorting, you need to use the Sort Dialog Box. Now, to get this, you can select the data that you want to sort and then click on the Data Tab. After that, click on the Sort icon."
        answer2="In this Dialog box, you can specify the details for one column, and then sort to another column, by clicking on the Add Level button."
        flag="1"

        />
        
       <Question 
        question=" What do you understand by the term Normal Distribution?" 
        answer="This is one of the most important and widely used distributions in statistics. Commonly known as the Bell Curve or Gaussian curve, normal distributions, measure how much values can differ in their means and in their standard deviations."

        />
        
       <Question 
        question="What is A/B Testing?" 
        answer="A/B testing is the statistical hypothesis testing for a randomized experiment with two variables A and B. Also known as the split testing, it is an analytical method that estimates population parameters based on sample statistics. This test compares two web pages by showing two variants A and B, to a similar number of visitors, and the variant which gives better conversion rate wins."
        answer1="The goal of A/B Testing is to identify if there are any changes to the web page. For example, if you have a banner ad on which you have spent an ample amount of money. Then, you can find out the return of investment i.e. the click rate through the banner ad.  "
        flag="1"

        />
        
       <Question 
        question="What is the statistical power of sensitivity?" 
        answer="The statistical power of sensitivity is used to validate the accuracy of a classifier. This classifier can be either Logistic Regression, Support Vector Machine, Random Forest etc."
        answer1="If I have to define sensitivity, then sensitivity is nothing but the ratio of Predicted True Events to Total Events. Now, True Events are the events which were true and the model also predicts them as true."
        answer2="=>seasonality=true positives/positive in actual dependent variable"

        />
        
       <Question 
        question=" What is the Alternative Hypothesis?" 
        answer="To explain the Alternative Hypothesis, you can first explain what the null hypothesis is. Null Hypothesis is a statistical phenomenon that is used to test for possible rejection under the assumption that result of chance would be true."
        answer1="After this, you can say that the alternative hypothesis is again a statistical phenomenon which is contrary to the Null Hypothesis. Usually, it is considered that the observations are a result of an effect with some chance of variation."
        flag="1"

        />
        
       <Question 
        question="What is the difference between univariate, bivariate and multivariate analysis?" 
        answer="->Univariate: A descriptive statistical technique that can be differentiated based on the count of variables involved at a given instance of time."
        answer2="->Bivariate: This analysis is used to find the difference between two variables at a time."
        answer3="->Multivariate: The study of more than two variables is nothing but multivariate analysis. This analysis is used to understand the effect of variables on the responses."
        flag="1"

        />
        
       <Question 
        question="Can you tell me what are Eigenvectors and Eigenvalues?" 
        answer="=>Eigenvectors are basically used to understand linear transformations. These are calculated for a correlation or a covariance matrix.For definition purposes, you can say that Eigenvectors are the directions along which a specific linear transformation acts either by flipping, compressing or stretching."
        answer1="=>Eigenvalue: Eigenvalues can be referred to as the strength of the transformation or the factor by which the compression occurs in the direction of eigenvectors."
        flag="1"

        />
        
       <Question 
        question="What are different types of Hypothesis Testing?" 
        answer="->T-test: T-test is used when the standard deviation is unknown and the sample size is comparatively small."
        answer1="->Chi-Square Test for Independence: These tests are used to find out the significance of the association between categorical variables in the population sample."
        answer2="->Analysis of Variance (ANOVA): This kind of hypothesis testing is used to analyze differences between the means in various groups. This test is often used similarly to a T-test but, is used for more than two groups."
        answer3="->Welch’s T-test: This test is used to find out the test for equality of means between two population samples."
        flag="1"

        />
        
       <Question 
        question="What is the difference between variance and covariance?" 
        answer="Variance and Covariance are two mathematical terms which are used frequently in statistics. Variance basically refers to how apart numbers are in relation to the mean. Covariance, on the other hand, refers to how two random variables will change together. This is basically used to calculate the correlation between variables."
       

        />
        
       <Question 
        question="What is interleaving in SAS?" 
        answer="Interleaving in SAS means combining individual sorted SAS data sets into one sorted data set. You can interleave data sets using a SET statement along with a BY statement."

        />
        
       <Question 
        question=" What is the basic syntax style of writing code in SAS?" 
        answer="->Write the DATA statement which will basically name the dataset."
        answer1="->Write the INPUT statement to name the variables in the data set."
        answer2="->All the statements should end with a semi-colon."
        answer3="->There should be a proper space between word and a statement."
        flag="1"

        />
        
       <Question 
        question="What is the difference between the Do Index, Do While and the Do Until loop?" 
        answer="=>Do Index loop: We use an index variable as a start and stop value for Do Index loop. The SAS statements get executed repeatedly till the index variable reaches its final value."
        answer1="=>Do While Loop: The Do While loop uses a WHILE condition. This Loop executes the block of code when the condition is true and keeps executing it, till the condition becomes false. Once the condition becomes false, the loop is terminated."
        answer2="=>Do Until Loop: The Do Until loop uses an Until condition. This Loop executes the block of code when the condition is false and keeps executing it, till the condition becomes true. Once the condition becomes true, the loop is terminated."
        flag="1"

        />
        
       <Question 
        question="What is the ANYDIGIT function in SAS?" 
        answer="The ANYDIGIT function is used to search for a character string. After the string is found it will simply return the desired string."

        />
        
       <Question 
        question=" Can you tell the difference between VAR X1 – X3 and VAR X1 — X3?" 
        answer="When you specify sing dash between the variables, then that specifies consecutively numbered variables. Similarly, if you specify the Double Dash between the variables, then that would specify all the variables available within the dataset."
        answer1="Consider the following data set: Data Set: ID NAME X1 X2 Y1 X3"
        answer2="Then, X1 – X3 would return X1 X2 X3 and X1 — X3 would return  X1 X2 Y1 X3"
        flag="1"

        />
        
       <Question 
        question="What is the purpose of trailing @ and @@? How do you use them?" 
        answer="The trailing @ is commonly known as the column pointer. So, when we use the trailing @, in the Input statement, it gives you the ability to read a part of the raw data line, test it and decide how can the additional data be read from the same record."
        answer1="->The single trailing @ tells the SAS system to “hold the line”"
        answer2="->The double trailing @@ tells the SAS system to “hold the line more strongly”."
        answer3="An Input statement ending with @@ instructs the program to release the current raw data line only when there are no data values left to be read from that line. The @@, therefore, holds the input record even across multiple iterations of the data step."
        flag="1"

        />
        
       <Question 
        question="What are the differences between the sum function and using “+” operator?" 
        answer="The SUM function returns the sum of non-missing arguments whereas “+” operator returns a missing value if any of the arguments are missing. "

        />
        
       <Question 
        question="What is the default port for SQL?" 
        answer="The default TCP port assigned by the official Internet Number Authority(IANA) for SQL server is 1433."

        />
        
       <Question 
        question=" What is Normalization?" 
        answer="Normalization is the process of organizing data to avoid duplication and redundancy. There are many successive levels of normalization. These are called normal forms. Each consecutive normal form depends on the previous one. "

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question=" Suppose you have a table of employee details consisting of columns names (employeeId, employeeName), and you want to fetch alternate records from a table. How do you think you can perform this task?" 
        answer="Select employeeId from (Select rownumber, employeeId from employee) where mod(rownumber,2)=0"

        />
        
       <Question 
        question="What is the difference between NVL and NVL2 functions in SQL?" 
        answer="NVL(exp1, exp2) and NVL2(exp1, exp2, exp3) are functions which check whether the value of exp1 is null or not."
        answer1="If we use NVL(exp1,exp2) function, then if exp1 is not null, then the value of exp1 will be returned; else the value of exp2 will be returned. But, exp2 must be of the same data type of exp1."
        answer2="Similarly, if we use NVL2(exp1, exp2, exp3) function, then if exp1 is not null, exp2 will be returned, else the value of exp3 will be returned."
        flag="1"

        />
        
       <Question 
        question="What is a dual axis?" 
        answer="Dual Axis is a phenomenon provided by Tableau. This helps the users to view two scales of two measures in the same graph. Websites such as Indeed.com make use of dual axis to show the comparison between two measures and the growth of these two measures in a septic set of years. Dual axes let you compare multiple measures at once, having two independent axes layered on top of one another. Refer to the below image to see how it looks. 

"

        />
        
       <Question 
        question="What is the difference between joining and blending in Tableau?" 
        answer="The Joining term is used when you are combining data from the same source, for example, worksheet in an Excel file or tables in an Oracle database. While blending requires two completely defined data sources in your report."

        />
        
       <Question 
        question="What is the difference between heat map and tree map?" 
        answer="A heat map is used for comparing categories with color and size. With heat maps, you can compare two different measures together. A treemap is a powerful visualization that does the same as that of the heat map. Apart from that, it is also used for illustrating hierarchical data and part-to-whole relationships."

        />
        
       <Question 
        question="There are 3 mislabeled jars with Black and White balls in the first and the second jar respectively. The third jar contains a mixture of white and black balls. Now, you can pick as many balls as required to label each jar correctly." 
        answer="If you notice the condition in the question, you will observe that there is a circular misplacement. By which I mean that, if Black is wrongly labeled as Black, Black cannot be labeled as White. So, it must be named as Back + White. If you consider that all the 3 jars are wrongly placed, that is, Black + White jar contains either the Black balls or the White balls, but not the both. Now, just assume you pick one ball from the Black + White jar and let us assume it to be a Black ball. So, obviously, you will name the jar as Black. However, the jar labeled Black cannot have Black + White. Thus, the third jar left in the process should be labeled Black + White. So, if you just pick up one ball, you can correctly label the jars."

        />
        
       <Question 
        question="Pumpkin must be equally divided into 8 equal pieces. You can have only 3 cuts.How do you think, will you make this possible?" 
        answer="The approach to answering this question is simple. You just must cut the pumpkin horizontally down the center, followed by making 2 other cuts vertically intersecting each other. So, this would give you your 8 equal pieces."

        />
       <Question 
        question="There are 5 lanes on a race track. One needs to find out the 3 fastest horses among the total of 25.
        Determine the minimum number of races to be conducted in order to find the fastest three cars." 
        answer="Now, you can start solving the problem by considering the number of cars racing. Since there are 25 cars racing with 5 lanes, there would be initially 5 races conducted, with each group having 5 cars. Next, a sixth race will be conducted between the winners of the first 5 races to determine the 3 fastest cars(let us say X1, Y1, and Z1)."
        answer1="Now, suppose X1 is the fastest among the three, then that means A1 is the fastest car among the 25 cars racing. But the question is how to find the 2nd and the 3rd fastest? We cannot assume that Y1 and Z1 are 2nd and 3rd since it may happen that the rest cars from the group of X1s’ cars could be faster than Y1 and Z1. So, to determine this a 7th race is conducted between cars Y1, Z1, and the cars from X1’s group(X2, X3), and the second car from Y1’s group Y2."
        answer2="So, the cars that finish the 1st and 2nd is the 7th race are actually the 2nd and the 3rd fastest cars among all cars."
        flag="1"

        />
       <Question 
        question="Consider 10 stacks of 10 coins each, where each coin weighs 10 grams. But, one of the 10 stacks is defective, and this defective stack contains the coins of 9 grams each.
        Find the minimum number of weights needed to identify the defective stack." 
        answer="The solution to this puzzle is very simple. You just must pick 1 coin from the 1st stack, 2 coins from the 2nd stack, 3 coins from the 3rd stack and so on till 10 coins from the 10th stack. So, if you add the number of coins then it would be equal to 55."
        answer1="So, if none of the coins are defective then the weight would 55*10 = 550 grams."
        answer2="Yet, if stack 1 turns out to be defective, then the total weight would be 1 less then 550 grams, that is 549 grams. Similarly, if stack 2 was defective then the total weight would be equal to 2 less than 50 grams, that is 548 grams. Similarly, you can find for the other 8 cases."
        answer3="So, just one measurement is needed to identify the defective stack."
        flag="1"

        />
       <Question 
        question="Two buses running towards each other on the same track are moving at a speed of 40km/hr and are separated by 80km. A bird takes it flight from the bus A and flies towards bus B at a constant speed of 100km/hr. Once it reaches bus Y, it turns and starts flying back towards bus X. The bird keeps flying to and forth till both the buses collide.
        Find the distance traveled by the bird." 
        answer="The solution to the above problem can be as follows:"
        answer1="->The velocity of the two buses approaching towards each other = (40 + 40)km/hr"
        answer2="->The time taken for the buses to collide = 80km/hr = 1 hour."
        answer3="->The total distance traveled by the bird = 100km/hr * 1 hr = 100 km."
        
        flag="1"

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
export default Dataanalysis;