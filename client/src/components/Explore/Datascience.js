import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Datascience=()=>{

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
        <div id="heading">Interview Question for Data Science
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What do you understand by linear regression?" 
        answer="Linear regression helps in understanding the linear relationship between the dependent and the independent variables. Linear regression is a supervised learning algorithm, which helps in finding the linear relationship between two variables. One is the predictor or the independent variable and the other is the response or the dependent variable. In Linear Regression, we try to understand how the dependent variable changes w.r.t the independent variable. If there is only one independent variable, then it is called simple linear regression, and if there is more than one independent variable then it is known as multiple linear regression."

        />

       <Question 
        question=" What do you understand by logistic regression?" 
        answer="Logistic regression is a classification algorithm that can be used when the dependent variable is binary. Let’s take an example. Here, we are trying to determine whether it will rain or not on the basis of temperature and humidity."
        answer1="Temperature and humidity are the independent variables, and rain would be our dependent variable. So, the logistic regression algorithm actually produces an S shape curve. Now, let us look at another scenario: Let’s suppose that x-axis represents the runs scored by Virat Kohli and the y-axis represents the probability of the team India winning the match. From this graph, we can say that if Virat Kohli scores more than 50 runs, then there is a greater probability for team India to win the match. Similarly, if he scores less than 50 runs then the probability of team India winning the match is less than 50 percent."
        answer2="So, basically in logistic regression, the y value lies within the range of 0 and 1. This is how logistic regression works."
        flag="1"

        />
        
       <Question 
        question="What is a confusion matrix?" 
        answer="The confusion matrix is a table that is used to estimate the performance of a model. It tabulates the actual values and the predicted values in a 2×2 matrix."

        />
        
       <Question 
        question="What do you understand by true positive rate and false positive rate?" 
        answer="->True positive rate: In Machine Learning, true positives rates, which are also referred to as sensitivity or recall, are used to measure the percentage of actual positives which are correctly indentified. Formula: True Positive Rate = True Positives/Positives "
        answer1="->False positive rate: False positive rate is basically the probability of falsely rejecting the null hypothesis for a particular test. The false positive rate is calculated as the ratio between the number of negative events wrongly categorized as positive (false positive) upon the total number of actual events. Formula: False Positive Rate = False Positives/Negatives."
        flag="1"

        />
        
       <Question 
        question="What is Data Science?" 
        answer="Data Science is a field of computer science that explicitly deals with turning data into information and extracting meaningful insights out of it. The reason why Data Science is so popular is that the kind of insights it allows us to draw from the available data has led to some major innovations in several products and companies. Using these insights, we are able to determine the taste of a particular customer, the likelihood of a product succeeding in a particular market, etc."

        />
        
       <Question 
        question="How is Data Science different from traditional application programming?" 
        answer="Data Science takes a fundamentally different approach to building systems that provide value than traditional application development.In traditional programming paradigms, we used to analyze the input, figure out the expected output, and write code, which contains rules and statements needed to transform the provided input into the expected output. As we can imagine, these rules were not easy to write, especially for those data that even computers had a hard time understanding, e.g., images, videos, etc."
        answer1="Data Science shifts this process a little bit. In it, we need access to large volumes of data that contain the necessary inputs and their mappings to the expected outputs. Then, we use Data Science algorithms, which use mathematical analysis to generate rules to map the given inputs to outputs. This process of rule generation is called training. After training, we use some data that was set aside before the training phase to test and check the system’s accuracy. The generated rules are a kind of a black box, and we cannot understand how the inputs are being transformed into outputs. However. if the accuracy is good enough, then we can use the system (also called a model)."
        answer2="As described above, in traditional programming, we had to write the rules to map the input to the output, but in Data Science, the rules are automatically generated or learned from the given data. This helped solve some really difficult challenges that were being faced by several companies."
        flag="1"

        />
        
       <Question 
        question="What is the work of supervised learnig?" 
        answer="Works on the data that contains both inputs and the expected output, i.e., the labeled data"

        />
        
       <Question 
        question="Where Unsupervised learning is used?" 
        answer="It is Used to extract meaningful information out of large volumes of data."

        />
        
       <Question 
        question="What is dimensionality reduction?" 
        answer="Dimensionality reduction is the process of converting a dataset with a high number of dimensions (fields) to a dataset with a lower number of dimensions. This is done by dropping some fields or columns from the dataset. However, this is not done haphazardly. In this process, the dimensions or fields are dropped only after making sure that the remaining information will still be enough to succinctly describe similar information."

        />
        
       <Question 
        question="What is bias in Data Science?" 
        answer="Bias is a type of error that occurs in a Data Science model because of using an algorithm that is not strong enough to capture the underlying patterns or trends that exist in the data. In other words, this error occurs when the data is too complicated for the algorithm to understand, so it ends up building a model that makes simple assumptions. This leads to lower accuracy because of underfitting. Algorithms that can lead to high bias are linear regression, logistic regression, etc."

        />
        
       <Question 
        question="Why Python is used for Data Cleaning in DS?" 
        answer="Data Scientists have to clean and transform the huge data sets in a form that they can work with. It’s is important to deal with the redundant data for better results by removing nonsensical outliers, malformed records, missing values, inconsistent formatting, etc. "
        answer1="Python libraries such as  Matplotlib, Pandas, Numpy, Keras, and SciPy are extensively used for Data cleaning and analysis. These libraries are used to load and clean the data doe effective analysis. For example, a CSV file named “Student” has information about the students of an institute like their names, standard, address, phone number, grades, marks, etc."
        flag="1"

        />
        
       <Question 
        question="Why R is used in Data Visualization?" 
        answer="R provides the best ecosystem for data analysis and visualization with more than 12,000 packages in Open-source repositories. It has huge community support, which means you can easily find the solution to your problems on various platforms like StackOverflow. "
        answer1="It has better data management and supports distributed computing by splitting the operations between multiple tasks and nodes, which eventually decreases the complexity and execution time of large datasets."
        flag="1"

        />
        
       <Question 
        question="What are the popular libraries used in Data Science?" 
        answer="Below are the popular libraries used for data extraction, cleaning, visualization, and deploying DS models:"
        answer1="->TensorFlow: Supports parallel computing with impeccable library management backed by Google."
        answer2="->SciPy: Mainly used for solving differential equations, multidimensional programming, data manipulation, and visualization through graphs and charts."
        answer3="->Pandas: Used to implement the ETL(Extracting, Transforming, and Loading the datasets) capabilities in business applications."
        answer4="->Matplotlib: Being free and open-source, it can be used as a replacement for MATLAB, which results in better performance and low memory consumption. "
        flag="1"

        />
        
       <Question 
        question="In which field PyTorch library is best?" 
        answer="It is best for projects which involve Machine Learning algorithms and Deep Neural Networks. "

        />
        
       <Question 
        question="What is variance in Data Science?" 
        answer="Variance is a type of error that occurs in a Data Science model when the model ends up being too complex and learns features from data, along with the noise that exists in it. This kind of error can occur if the algorithm used to train the model has high complexity, even though the data and the underlying patterns and trends are quite easy to discover. This makes the model a very sensitive one that performs well on the training dataset but poorly on the testing dataset, and on any kind of data that the model has not yet seen. Variance generally leads to poor accuracy in testing and results in overfitting."

        />
        
       <Question 
        question="What is pruning in a decision tree algorithm?" 
        answer="Pruning a decision tree is the process of removing the sections of the tree that are not necessary or are redundant. Pruning leads to a smaller decision tree, which performs better and gives higher accuracy and speed."

        />
        
       <Question 
        question="What is entropy in a decision tree algorithm?" 
        answer="In a decision tree algorithm, entropy is the measure of impurity or randomness. The entropy of a given dataset tells us how pure or impure the values of the dataset are. In simple terms, it tells us about the variance in the dataset."
        answer1="For example, suppose we are given a box with 10 blue marbles. Then, the entropy of the box is 0 as it contains marbles of the same color, i.e., there is no impurity. If we need to draw a marble from the box, the probability of it being blue will be 1.0. However, if we replace 4 of the blue marbles with 4 red marbles in the box, then the entropy increases to 0.4 for drawing blue marbles."
        flag="1"

        />
        
       <Question 
        question=" What is information gain in a decision tree algorithm?" 
        answer="When building a decision tree, at each step, we have to create a node that decides which feature we should use to split data, i.e., which feature would best separate our data so that we can make predictions. This decision is made using information gain, which is a measure of how much entropy is reduced when a particular feature is used to split the data. The feature that gives the highest information gain is the one that is chosen to split the data."

        />
        
       <Question 
        question="What is k-fold cross-validation?" 
        answer="In k-fold cross-validation, we divide the dataset into k equal parts. After this, we loop over the entire dataset k times. In each iteration of the loop, one of the k parts is used for testing, and the other k − 1 parts are used for training. Using k-fold cross-validation, each one of the k parts of the dataset ends up being used for training and testing purposes."

        />
        
       <Question 
        question="Explain how a recommender system works." 
        answer="A recommender system is a system that many consumer-facing, content-driven, online platforms employ to generate recommendations for users from a library of available content. These systems generate recommendations based on what they know about the users’ tastes from their activities on the platform."
        answer1="For example, imagine that we have a movie streaming platform, similar to Netflix or Amazon Prime. If a user has previously watched and liked movies from action and horror genres, then it means that the user likes watching the movies of these genres. In that case, it would be better to recommend such movies to this particular user. These recommendations can also be generated based on what users with a similar taste like watching."
        flag="1"

        />
        
       <Question 
        question="What is a normal distribution?" 
        answer="Data distribution is a visualization tool to analyze how data is spread out or distributed. Data can be distributed in various ways. For instance, it could be with a bias to the left or to the right, or it could all be jumbled up. Data may also be distributed around a central value, i.e., mean, median, etc. This kind of distribution has no bias either to the left or to the right and is in the form of a bell-shaped curve. This distribution also has its mean equal to the median. This kind of distribution is called a normal distribution."

        />
        
       <Question 
        question="What is Deep Learning?" 
        answer="Deep Learning is a kind of Machine Learning, in which neural networks are used to imitate the structure of the human brain, and just like how a brain learns from information, machines are also made to learn from the information that is provided to them. Deep Learning is an advanced version of neural networks to make machines learn from data. In Deep Learning, the neural networks comprise many hidden layers (which is why it is called ‘deep’ learning) that are connected to each other, and the output of the previous layer is the input of the current layer."

        />
        
       <Question 
        question="What is an RNN (recurrent neural network)?" 
        answer="A recurrent neural network, or RNN for short, is a kind of Machine Learning algorithm that makes use of the artificial neural network. RNNs are used to find patterns from a sequence of data, such as time series, stock market, temperature, etc. RNNs are a kind of feedforward network, in which information from one layer passes to another layer, and each node in the network performs mathematical operations on the data. These operations are temporal, i.e., RNNs store contextual information about previous computations in the network. It is called recurrent because it performs the same operations on some data every time it is passed. However, the output may be different based on past computations and their results."

        />
        
       <Question 
        question="Explain selection bias." 
        answer="Selection bias is the bias that occurs during the sampling of data. This kind of bias occurs when a sample is not representative of the population, which is going to be analyzed in a statistical study."

        />
        
       <Question 
        question="What is ROC curve?" 
        answer="It stands for Receiver Operating Characteristic. It is basically a plot between a true positive rate and a false positive rate, and it helps us to find out the right tradeoff between the true positive rate and the false positive rate for different probability thresholds of the predicted values. So, the closer the curve to the upper left corner, the better the model is. In other words, whichever curve has greater area under it that would be the better model."

        />
        
       <Question 
        question=" What do you understand by a decision tree?" 
        answer="A decision tree is a supervised learning algorithm that is used for both classification and regression. Hence, in this case, the dependent variable can be both a numerical value and a categorical value. Here, each node denotes the test on an attribute, and each edge denotes the outcome of that attribute, and each leaf node holds the class label. So, in this case, we have a series of test conditions which gives the final decision according to the condition."

        />
        
       <Question 
        question="What do you understand by a random forest model?" 
        answer="It combines multiple models together to get the final output or, to be more precise, it combines multiple decision trees together to get the final output. So, decision trees are the building blocks of the random forest model."

        />
        
       <Question 
        question="How is Data modeling different from Database design?" 
        answer="=>Data Modeling: It can be considered as the first step towards the design of a database. Data modeling creates a conceptual model based on the relationship between various data models. The process involves moving from the conceptual stage to the logical model to the physical schema. It involves the systematic method of applying data modeling techniques."
        answer1="=>Database Design: This is the process of designing the database. The database design creates an output which is a detailed data model of the database. Strictly speaking, database design includes the detailed logical model of a database but it can also include physical design choices and storage parameters."
        flag="1"

        />
        
       <Question 
        question="What are precision?" 
        answer="Precision: When we are implementing algorithms for the classification of data or the retrieval of information, precision helps us get a portion of positive class values that are positively predicted. Basically, it measures the accuracy of correct positive predictions. "

        />
        
       <Question 
        question="What is recall?" 
        answer="Recall: It is the set of all positive predictions out of the total number of positive instances. Recall helps us identify the misclassified positive predictions"

        />
        
       <Question 
        question=" What is the F1 score" 
        answer="F1 score helps us calculate the harmonic mean of precision and recall that gives us the test’s accuracy. If F1 = 1, then precision and recall are accurate. If F1 < 1 or equal to 0, then precision or recall is less accurate, or they are completely inaccurate."

        />
        
       <Question 
        question="What is p-value?" 
        answer="P-value is the measure of the statistical importance of an observation. It is the probability that shows the significance of output to the data. We compute the p-value to know the test statistics of a model. Typically, it helps us choose whether we can accept or reject the null hypothesis"

        />
        
       <Question 
        question="Why do we use p-value?" 
        answer="We use the p-value to understand whether the given data really describe the observed effect or not."

        />
        
       <Question 
        question="What is the difference between an error and a residual error?" 
        answer="An error occurs in values while the prediction gives us the difference between the observed values and the true values of a dataset. Whereas, the residual error is the difference between the observed values and the predicted values. The reason we use the residual error to evaluate the performance of an algorithm is that the true values are never known. Hence, we use the observed values to measure the error using residuals. It helps us get an accurate estimate of the error."

        />
        
       <Question 
        question="Why do we use the summary function?" 
        answer="The summary function in R gives us the statistics of the implemented algorithm on a particular dataset. It consists of various objects, variables, data attributes, etc. It provides summary statistics for individual objects when fed into the function. We use a summary function when we want information about the values present in the dataset."

        />
        
       <Question 
        question="How are Data Science and Machine Learning related to each other?" 
        answer="Data Science and Machine Learning are two terms that are closely related but are often misunderstood. Both of them deal with data. However, there are some fundamental distinctions that show us how they are different from each other."
        answer1="Data Science is a broad field that deals with large volumes of data and allows us to draw insights out of this voluminous data. The entire process of Data Science takes care of multiple steps that are involved in drawing insights out of the available data. This process includes crucial steps such as data gathering, data analysis, data manipulation, data visualization, etc."
        answer2="Machine Learning, on the other hand, can be thought of as a sub-field of Data Science. It also deals with data, but here, we are solely focused on learning how to convert the processed data into a functional model, which can be used to map inputs to outputs, e.g., a model that can expect an image as an input and tell us if that image contains a flower as an output."
        answer3="In short, Data Science deals with gathering data, processing it, and finally, drawing insights from it. The field of Data Science that deals with building models using algorithms is called Machine Learning. Therefore, Machine Learning is an integral part of Data Science."
        flag="1"

        />
        
       <Question 
        question=" Explain univariate, bivariate, and multivariate analyses." 
        answer="When we are dealing with data analysis, we often come across terms such as univariate, bivariate, and multivariate. Let’s try and understand what these mean."
        answer1="->Univariate analysis: Univariate analysis involves analysing data with only one variable or, in other words, a single column or a vector of the data. This analysis allows us to understand the data and extract patterns and trends out of it. Example: Analyzing the weight of a group of people."
        answer2="->Bivariate analysis: Bivariate analysis involves analyzing the data with exactly two variables or, in other words, the data can be put into a two-column table. This kind of analysis allows us to figure out the relationship between the variables. Example: Analyzing the data that contains temperature and altitude."
        answer3="->Multivariate analysis: Multivariate analysis involves analyzing the data with more than two variables. The number of columns of the data can be anything more than two. This kind of analysis allows us to figure out the effects of all other variables (input variables) on a single variable (the output variable). Example: Analyzing data about house prices, which contains information about the houses, such as locality, crime rate, area, the number of floors, etc."
        flag="1"

        />
        
       <Question 
        question="How can we handle missing data?" 
        answer="To be able to handle missing data, we first need to know the percentage of data missing in a particular column so that we can choose an appropriate strategy to handle the situation. For example, if in a column the majority of the data is missing, then dropping the column is the best option, unless we have some means to make educated guesses about the missing values. However, if the amount of missing data is low, then we have several strategies to fill them up."
        answer1="One way would be to fill them all up with a default value or a value that has the highest frequency in that column, such as 0 or 1, etc. This may be useful if the majority of the data in that column contain these values."
        answer2="Another way is to fill up the missing values in the column with the mean of all the values in that column. This technique is usually preferred as the missing values have a higher chance of being closer to the mean than to the mode."
        answer3="Finally, if we have a huge dataset and a few rows have values missing in some columns, then the easiest and fastest way is to drop those columns. Since the dataset is large, dropping a few columns should not be a problem in any way."

        />
        
       <Question 
        question="What is the benefit of dimensionality reduction?" 
        answer="Dimensionality reduction reduces the dimensions and size of the entire dataset. It drops unnecessary features while retaining the overall information in the data intact. Reduction in dimensions leads to faster processing of the data. The reason why data with high dimensions is considered so difficult to deal with is that it leads to high time-consumption while processing the data and training a model on it. Reducing dimensions speeds up this process, removes noise, and also leads to better model accuracy."

        />
        
       <Question 
        question="What is bias–variance trade-off in Data Science?" 
        answer="When building a model using Data Science or Machine Learning, our goal is to build one that has low bias and variance. We know that bias and variance are both errors that occur due to either an overly simplistic model or an overly complicated model. Therefore, when we are building a model, the goal of getting high accuracy is only going to be accomplished if we are aware of the tradeoff between bias and variance."
        answer1="Bias is an error that occurs when a model is too simple to capture the patterns in a dataset. To reduce bias, we need to make our model more complex. Although making our model more complex can lead to reducing bias, if we make our model too complex, it may end up becoming too rigid, leading to high variance. So, the tradeoff between bias and variance is that if we increase the complexity, we reduce bias and increase variance, and if we reduce complexity, then we increase bias and reduce variance. Our goal is to find a point at which our model is complex enough to give low bias but not so complex to end up having high variance."
        flag="1"

        />
        
       <Question 
        question="What is RMSE?" 
        answer="RMSE stands for the root mean square error. It is a measure of accuracy in regression. RMSE allows us to calculate the magnitude of error produced by a regression model. The way RMSE is calculated is as follows:"
        answer1="First, we calculate the errors in the predictions made by the regression model. For this, we calculate the differences between the actual and the predicted values. Then, we square the errors. After this step, we calculate the mean of the squared errors, and finally, we take the square root of the mean of these squared errors. This number is the RMSE, and a model with a lower value of RMSE is considered to produce lower errors, i.e., the model will be more accurate."
        flag="1"

        />
        
       <Question 
        question="What is a kernel function in SVM?" 
        answer="In the SVM algorithm, a kernel function is a special mathematical function. In simple terms, a kernel function takes data as input and converts it into a required form. This transformation of the data is based on something called a kernel trick, which is what gives the kernel function its name. Using the kernel function, we can transform the data that is not linearly separable (cannot be separated using a straight line) into one that is linearly separable."

        />
        
       <Question 
        question="How can we select an appropriate value of k in k-means?" 
        answer="Selecting the correct value of k is an important aspect of k-means clustering. We can make use of the elbow method to pick the appropriate k value. To do this, we run the k-means algorithm on a range of values, e.g., 1 to 15. For each value of k, we compute an average score. This score is also called inertia or the inter-cluster variance."
        answer1="This is calculated as the sum of squares of the distances of all values in a cluster. As k starts from a low value and goes up to a high value, we start seeing a sharp decrease in the inertia value. After a certain value of k, in the range, the drop in the inertia value becomes quite small. This is the value of k that we need to choose for the k-means clustering algorithm."
        flag="1"

        />
        
       <Question 
        question="What is ensemble learning?" 
        answer="When we are building models using Data Science and Machine Learning, our goal is to get a model that can understand the underlying trends in the training data and can make predictions or classifications with a high level of accuracy. However, sometimes some datasets are very complex, and it is difficult for one model to be able to grasp the underlying trends in these datasets. In such situations, we combine several individual models together to improve performance. This is what is called ensemble learning."

        />
        
       <Question 
        question="Explain collaborative filtering in recommender systems." 
        answer="Collaborative filtering is a technique used to build recommender systems. In this technique, to generate recommendations, we make use of data about the likes and dislikes of users similar to other users. This similarity is estimated based on several varying factors, such as age, gender, locality, etc. If User A, similar to User B, watched and liked a movie, then that movie will be recommended to User B, and similarly, if User B watched and liked a movie, then that would be recommended to User A. In other words, the content of the movie does not matter much. When recommending it to a user what matters is if other users similar to that particular user liked the content of the movie or not."

        />
        
       <Question 
        question="Explain content-based filtering in recommender systems." 
        answer="Content-based filtering is one of the techniques used to build recommender systems. In this technique, recommendations are generated by making use of the properties of the content that a user is interested in. For example, if a user is watching movies belonging to the action and mystery genre and giving them good ratings, it is a clear indication that the user likes movies of this kind. If shown movies of a similar genre as recommendations, there is a higher probability that the user would like those recommendations as well. In other words, here, the content of the movie is taken into consideration when generating recommendations for users."

        />
       <Question 
        question="What does root cause analysis mean?" 
        answer="Root cause analysis is the process of figuring out the root causes that lead to certain faults or failures. A factor is considered to be a root cause if, after eliminating it, a sequence of operations, leading to a fault, error, or undesirable result, ends up working correctly. Root cause analysis is a technique that was initially developed and used in the analysis of industrial accidents, but now, it is used in a wide variety of areas."

        />
       <Question 
        question="Out of collaborative filtering and content-based filtering, which one is considered better, and why?" 
        answer="Content-based filtering is considered to be better than collaborative filtering for generating recommendations. It does not mean that collaborative filtering generates bad recommendations. However, as collaborative filtering is based on the likes and dislikes of other users we cannot rely on it much. Also, users’ likes and dislikes may change in the future. For example, there may be a movie that a user likes right now but did not like 10 years ago. Moreover, users who are similar in some features may not have the same taste in the kind of content that the platform provides."
        answer1="In the case of content-based filtering, we make use of users’ own likes and dislikes that are much more reliable and yield more positive results. This is why platforms such as Netflix, Amazon Prime, Spotify, etc. make use of content-based filtering for generating recommendations for their users."
        flag="1"

        />
       <Question 
        question="Explain TF/IDF vectorization." 
        answer="The expression ‘TF/IDF’ stands for Term Frequency–Inverse Document Frequency. It is a numerical measure that allows us to determine how important a word is to a document in a collection of documents called a corpus. TF/IDF is used often in text mining and information retrieval."

        />
       <Question 
        question="What happens when some of the assumptions required for linear regression are violated?" 
        answer="These assumptions may be violated lightly (i.e., some minor violations) or strongly (i.e., the majority of the data has violations). Both of these violations will have different effects on a linear regression model."
        answer1="Strong violations of these assumptions make the results entirely redundant. Light violations of these assumptions make the results have greater bias or variance."
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
export default Datascience;