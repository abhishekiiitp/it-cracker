import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Ai=()=>{

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
        <div id="heading">Interview Question for Artificial Intelligence
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What do you understand by Artificial Intelligence?" 
        answer="Artificial intelligence is computer science technology that emphasizes creating intelligent machine that can mimic human behavior. Here Intelligent machines can be defined as the machine that can behave like a human, think like a human, and also capable of decision making. It is made up of two words, Artificial and Intelligence, which means the man-made thinking ability."

        />

       <Question 
        question="Why do we need Artificial Intelligence?" 
        answer="The goal of Artificial intelligence is to create intelligent machines that can mimic human behavior. We need AI for today's world to solve complex problems, make our lives more smoothly by automating the routine work, saving the manpower, and to perform many more other tasks."

        />
        
       <Question 
        question="Give some real-world applications of AI." 
        answer="-> Google Search Engine: When we start writing something on the google search engine, we immediately get the relevant recommendations from google, and this is because of different AI technologies."
        answer1="Ridesharing Applications: Different ride-sharing applications such as Uber uses AI and machine learning to determine the type of ride, minimize the time once the car is hailed by the user, price of the ride, etc."
        answer2="Spam Filters in Email: The AI is also used for email spam filtering so that you can get the important and relevant emails only in your inbox. As per the studies, Gmail successfully filters 99.9% of spam mails."
        flag="1"

        />
        
       <Question 
        question="How Artificial intelligence, Machine Learning, and Deep Learning differ from each other?" 
        answer="AI-> It is a technology that is used to create intelligent machines that can mimic human behavior.AI completely deals with structured, semi-structured data."
        answer1="ML-> It is a subset of AI that learns from past data and experiences.ML deals with structured and semi-structured data."
        answer2="DL-> It is the subset of machine learning and AI that is inspired by the human brain cells, called neurons, and imitates the working of the human brain.Deep learning deals with structured and unstructured data."
        flag="1"

        />
        
       <Question 
        question="What are the different domains/Subsets of AI?" 
        answer="Machine Learning"
        answer1="Deep Learning"
        answer2="Neural Network"
        answer3="Expert System"
        answer4="Fuzzy Logic"
        flag="1"
        />
        
       <Question 
        question="What are the types of Machine Learning?" 
        answer="->Supervised Learning: Supervised learning is a type of Machine learning in which the machine needs external supervision to learn from data. The supervised learning models are trained using the labeled dataset. Regression and Classification are the two main problems that can be solved with Supervised Machine Learning."
        answer1="->Unsupervised Learning: It is a type of machine learning in which the machine does not need any external supervision to learn from the data, hence called unsupervised learning. The unsupervised models can be trained using the unlabelled dataset. These are used to solve the Association and Clustering problems."
        answer2="->Reinforcement Learning: In Reinforcement learning, an agent interacts with its environment by producing actions, and learn with the help of feedback. The feedback is given to the agent in the form of rewards, such as for each good action, he gets a positive reward, and for each bad action, he gets a negative reward. There is no supervision provided to the agent. Q-Learning algorithm is used in reinforcement learning."
        flag="1"

        />
        
       <Question 
        question="Explain the term Q-Learning." 
        answer="Q-learning is a popular algorithm used in reinforcement learning. It is based on the Bellman equation. In this algorithm, the agent tries to learn the policies that can provide the best actions to perform for maximining the rewards under particular circumstances. The agent learns these optimal policies from past experiences."

        />
        
       <Question 
        question="What is Deep Learning?" 
        answer="Deep learning is a subset of Machine learning that mimics the working of the human brain. It is inspired by the human brain cells, called neurons, and works on the concept of neural networks to solve complex real-world problems. It is also known as the deep neural network or deep neural learning."

        />
        
       <Question 
        question="Which programming language is used for AI?" 
        answer="Below are the top five programming languages that are widely used for the development of Artificial Intelligence:"
        answer1="->Python,Java,Lisp,R,Prolog"
        answer2="Among the above five languages, Python is the most used language for AI development due to its simplicity and availability of lots of libraries, such as Numpy, Pandas, etc."
        flag="1"

        />
        
       <Question 
        question="What is the intelligent agent in AI" 
        answer="The intelligent agent can be any autonomous entity that perceives its environment through the sensors and act on it using the actuators for achieving its goal."

        />
        
       <Question 
        question="Where are intelligent agent used?" 
        answer="->Information Access and Navigations such as Search Engine"
        answer1="->Repetitive Activities"
        answer2="->Domain Experts"
        answer3="->Chatbots, etc."
        flag="1"

        />
        
       <Question 
        question="How is machine learning related to AI?" 
        answer="Machine learning is a subset or subfield of Artificial intelligence. It is a way of achieving AI. As both are the two different concepts and the relation between both can be understood as AI uses different Machine learning algorithms and concepts to solve the complex problems."

        />
        
       <Question 
        question="What is Markov's Decision process?" 
        answer="The solution for a reinforcement learning problem can be achieved using the Markov decision process or MDP. Hence, MDP is used to formalize the RL problem. It can be said as the mathematical approach to solve a reinforcement learning problem. The main aim of this process is to gain maximum positive rewards by choosing the optimum policy."

        />
        
       <Question 
        question="What do you understand by the reward maximization?" 
        answer="Reward maximization term is used in reinforcement learning, and which is a goal of the reinforcement learning agent. In RL, a reward is a positive feedback by taking action for a transition from one state to another. If the agent performs a good action by applying optimal policies, he gets a reward, and if he performs a bad action, one reward is subtracted. The goal of the agent is to maximize these rewards by applying optimal policies, which is termed as reward maximization"

        />
        
       <Question 
        question="What are parametric and non-parametric model?" 
        answer="In machine learning, there are mainly two types of models, Parametric and Non-parametric. Here parameters are the predictor variables that are used to build the machine learning model. The explanation of these models is given below:"
        answer1="Parametric Model: The parametric models use a fixed number of the parameters to create the ML model. It considers strong assumptions about the data. The examples of the parametric models are Linear regression, Logistic Regression, Naïve Bayes, Perceptron, etc."
        answer2="Non-Parametric Model: The non-parametric model uses flexible numbers of parameters. It considers a few assumptions about the data. These models are good for higher data and no prior knowledge. The examples of the non-parametric models are Decision Tree, K-Nearest Neighbour, SVM with Gaussian kernels, etc."
        flag="1"
        />
        
       <Question 
        question="What do you understand by the hyperparameter?" 
        answer="In machine learning, hyperparameter is the parameters that determine and control the complete training process. The examples of these parameters are Learning rate, Hidden Layers, Hidden units, Activation functions, etc. These parameters are external from the model. The selection of good hyperparameters makes a better algorithm."

        />
        
       <Question 
        question="Explain the Hidden Markov model." 
        answer="Hidden Markov model is a statistical model used for representing the probability distributions over a chain of observations. In the hidden markov model, hidden defines a property that it assumes that the state of a process generated at a particular time is hidden from the observer, and Markov defines that it assumes that the process satisfies the Markov property. The HMM models are mostly used for temporal data."

        />
        
       <Question 
        question=" What is Strong AI, and how is it different from the Weak AI?" 
        answer="->Strong AI: Strong AI is about creating real intelligence artificially, which means a human-made intelligence that has sentiments, self-awareness, and emotions similar to humans. It is still an assumption that has a concept of building AI agents with thinking, reasoning, and decision-making capabilities similar to humans."
        answer1="Weak AI: Weak AI is the current development stage of artificial intelligence that deals with the creation of intelligent agents and machines that can help humans and solve real-world complex problems. Siri and Alexa are examples of Weak AI programs."
        flag="1"

        />
        
       <Question 
        question="Give a brief introduction to the Turing test in AI?" 
        answer="Turing test is one of the popular intelligence tests in Artificial intelligence. The Turing test was introduced by Alan Turing in the year 1950. It is a test to determine that if a machine can think like a human or not. According to this test, a computer can only be said to be intelligent if it can mimic human responses under some particular conditions."
        answer1="In this test, three players are involved, the first player is a computer, the second player is a human responder, and the third player is the human interrogator, and the interrogator needs to find which response is from the machine on the basis of questions and answers."
        flag="1"

        />
        
       <Question 
        question="Which assessment is used to test the intelligence of the machine?" 
        answer="Turing Test."

        />
        
       <Question 
        question="What is overfitting?" 
        answer="When the machine learning algorithm tries to capture all the data points, and hence, as a result, captures noise also, then overfitting occurs in the model. Due to this overfitting issue, the algorithm shows the low bias, but the high variance in the output. Overfitting is one of the main issues in machine learning."

        />
        
       <Question 
        question="How can overcome overfitting  in Machine Learning" 
        answer="Methods to avoid Overfitting in ML:"
        answer1="->Cross-Validation"
        answer2="->Training With more data"
        answer3="->Regularization"
        answer4="->Ensembling"
        answer5="->Removing Unnecessary Features"
        flag="1"

        />
        
       <Question 
        question="Tell one technique to avoid overfitting in neural networks?" 
        answer="->Dropout Technique: The dropout technique is one of the popular techniques to avoid overfitting in the neural network models. It is the regularization technique, in which the randomly selected neurons are dropped during training."

        />
        
       <Question 
        question="What is NLP?" 
        answer="NLP stands for Natural Language Processing, which is a branch of artificial intelligence. It enables machines to understand, interpret, and manipulate the human language."

        />
        
       <Question 
        question="What are the various components of NLP?" 
        answer="There are mainly two components of Natural Language processing, which are given below:"
        answer1="-> a.Natural Language Understanding (NLU)"
        answer2="To map the input to useful representations, To analyze the different aspects of the language."
        answer3="-> b.Natural Language Generation (NLG)"
        answer4="Text Planning,Sentence Planning,Text Realization"
        flag="1"

        />
        
       <Question 
        question="What are the different components of the Expert System?" 
        answer="->User Interface: It enables a user to interact or communicate with the expert system to find the solution for a problem."
        answer1="->Inference Engine: It is called the main processing unit or brain of the expert system. It applies different inference rules to the knowledge base to draw a conclusion from it. The system extracts the information from the KB with the help of an inference engine."
        answer2="->Knowledge Base: The knowledge base is a type of storage area that stores the domain-specific and high-quality knowledge."
        flag="1"

        />
        
       <Question 
        question="What is the use of computer vision in AI?" 
        answer="Computer vision is a field of Artificial Intelligence that is used to train the computers so that they can interpret and obtain information from the visual world such as images. Hence, computer vision uses AI technology to solve complex problems such as image processing, object detections, etc."

        />
        
       <Question 
        question="Explain the minimax algorithm" 
        answer="Minimax algorithm is a backtracking algorithm used for decision making in game theory. This algorithm provides the optimal moves for a player by assuming that another player is also playing optimally."

        />
        
       <Question 
        question="What is game theory? " 
        answer="Game theory is the logical and scientific study that forms a model of the possible interactions between two or more rational players. Here rational means that each player thinks that others are just as rational and have the same level of knowledge and understanding. In the game theory, players deal with the given set of options in a multi-agent situation, it means the choice of one player affects the choice of the other or opponent players."

        />
        
       <Question 
        question="How is game theory important in AI" 
        answer="Game theory and AI are much related and useful to each other. In AI, the game theory is widely used to enable some of the key capabilities required in the multi-agent environment, in which multiple agents try to interact with each other to achieve a goal."
        answer1="Different popular games such as Poker, Chess, etc., are the logical games with the specified rules. To play these games online or digitally, such as on Mobile, laptop, etc., one has to create algorithms for such games. And these algorithms are applied with the help of artificial intelligence."
        flag="1"

        />
        
       <Question 
        question="What are some misconceptions about AI?" 
        answer="There are lots of misconceptions about artificial intelligence since starting its evolution. Some of these misconceptions are given below:" 
        answer1="->AI does not require humans: The first misconception about AI is that it does not require human. But in reality, each AI-based system is somewhere dependent on humans and will remain. Such as it requires human gathered data to learn about the data."
        answer2="->AI is dangerous for humans: AI is not inherently dangerous for humans, and still, it has not reached the super AI or strong AI, which is more intelligent than humans. Any powerful technology cannot be harmful if it is not misused."
        answer3="-AI has reached its peak stage: Still, we are so far away from the peak stage of the AI. It will take a very long journey to reach its peak.>"
        answer4="->AI will take your job: It is one of the biggest confusions that AI will take most of the jobs, but in reality, it is giving us more opportunities for new jobs."
        answer5="->AI is new technology: Although some people think that it is a new technology, this technology actually first thought in the year 1840 through an English newspaper."

        />
        
       <Question 
        question="What are the eigenvalues and eigenvectors?" 
        answer="Eigenvectors and eigenvalues are the two main concepts of Linear algebra."
        answer1="Eigenvectors are unit vectors that have a magnitude equal to 1.0."
        answer2="Eigenvalues are the coefficients that are applied to the eigenvectors, or these are the magnitude by which the eigenvector is scaled."
        flag="1"

        />
        
       <Question 
        question="What is an Artificial neural network?" 
        answer="Artificial neural networks are the statistical model inspired by the functioning of human brain cells called neurons. These neural networks include various AI technologies such as deep learning and machine learning."

        />
        
       <Question 
        question="Give a brief introduction of partial, alternate, artificial, and compound keys?" 
        answer="->Partial Keys: A set of attributes that uniquely identifies weak entities, which are related to the same owner entity."
        answer1="->Alternate Keys: All candidate keys except the primary key are known as alternate keys."
        answer2="->Compound Key: It has multiple fields that enable the user to uniquely recognize a specific record."
        answer3="->Artificial Key: It is the extra attribute added to the table when there are no stands alone or compounds key is available. It is created by assigning a number to each record in the table."
        flag="1"

        />
        
       <Question 
        question="What is a Chatbot?" 
        answer="A chatbot is Artificial intelligence software or agent that can simulate a conversation with humans or users using Natural language processing. The conversation can be achieved through an application, website, or messaging apps. These chatbots are also called as the digital assistants and can interact with humans in the form of text or through voice."

        />
        
       <Question 
        question="What is knowledge representation in AI?" 
        answer="Knowledge representation is the part of AI, which is concerned with the thinking of AI agents. It is used to represent the knowledge about the real world to the AI agents so that they can understand and utilize this information for solving the complex problems in AI."
        answer1="Following elements of Knowledge that are represented to the agent in the AI system:"
        answer2="->Objects,Events,Performance,Meta-Knowledge,Facts,Knowledge-base"
        flag="1"

        />
        
       <Question 
        question="Which programming language is not generally used in AI, and why?" 
        answer="Perl Programming language is not commonly used language for AI, as it is the scripting language."

        />
        
       <Question 
        question="What is reinforcement learning?" 
        answer="Reinforcement learning is a type of machine learning. In this, an agent interacts with its environment by producing actions, and learn with the help of feedback. The feedback is given to the agent in the form of rewards, such as for each good action, he gets a positive reward, and for each bad action, he gets a negative reward. There is no any labeled data or supervision is provided to the agent. In RL, the agent continuously does three things(performing actions, changing state, and getting the feedback) to explore the environment."
        answer1="The popular reinforcement learning algorithms are:"
        answer2="->Q-Learning"
        answer3="->SARSA(State Action Reward State Action)"
        answer4="->Deep Q Neural Network"
        flag="1"

        />
        
       <Question 
        question="Kindly explain different ways to evaluate the performance of the ML model." 
        answer="Confusion Matrix: It is N*N table with different sets of value that is used to determine the performance of the classification model in machine learning."
        answer1="F1 score: It is the harmonic mean of precision and recall, which is used as one of the best metrics to evaluate the ML model"
        answer2="Gain and lift charts: Gain & Lift charts are used to determine the rank ordering of the probabilities."
        answer3="AUC-ROC curve: The AUC-ROC is another performance metric. The ROC is the plot between the sensitivity."
        flag="1"

        />
        
       <Question 
        question=" Explain rational agents and rationality?" 
        answer="->A rational agent is an agent that has clear preferences, model uncertainty, and that performs the right actions always. A rational agent is able to take the best possible action in any situation."
        answer1="->Rationality is a status of being reasonable and sensible with a good sense of judgment."
        flag="1"

        />
        
       <Question 
        question="What is tensor flow, and how it is used in AI?" 
        answer="Tensor flow is the open-source library platform developed by the Google Brain team. It is a math library used for several machine learning applications. With the help of tensor flow, we can easily train and deploy the machine learning models in the cloud."

        />
        
       <Question 
        question="What is a market-basket analysis?" 
        answer="The market-basket analysis is a popular technique to find the associations between the items. It is frequently used by big retailers in order to get maximum profit. In this approach, we need to find combinations of items that are frequently bought together."
        answer1="For example, if a person buys bread, there are most of the chances that he will buy butter also. Hence, understanding such correlations can help retailers to grow their business by providing relevant offers to their customers."
        flag="1"

        />
        
       <Question 
        question="How can AI be used in fraud detection?" 
        answer="The artificial intelligence can be broadly helpful in fraud detection using different machine learning algorithms, such as supervised and unsupervised learning algorithms. The rule-based algorithms of Machine learning helps to analyze the patterns for any transaction and block the fraudulent transactions. Below are the steps used in fraud detection using machine learning:"
        answer1="->Data extraction: The first step is data extraction. Data is gathered through a survey or with the help of web scraping tools. The data collection depends on the type of model, and we want to create. It generally includes the transaction details, personal details, shopping, etc."
        answer2="->Data Cleaning: The irrelevant or redundant data is removed in this step. The inconsistency present in the data may lead to wrong predictions."
        answer3="->Data exploration & analysis: This is one of the most crucial steps in which we need to find out the relation between different predictor variables."
        answer4="->Building Models: Now, the final step is to build the model using different machine learning algorithms depending on the business requirement. Such as Regression or classification."
        flag="1"

        />
        
       <Question 
        question="What is the inference engine, and why it is used in AI?" 
        answer="In artificial intelligence, the inference engine is the part of an intelligent system that derives new information from the knowledge base by applying some logical rules."
        answer1="It mainly works in two modes:"
        answer2="Backward Chaining: It begins with the goal and proceeds backward to deduce the facts that support the goal."
        answer3="Forward Chaining: It starts with known facts, and asserts new facts."

        />
        
       <Question 
        question="What do you understand by the fuzzy logic?" 
        answer="Fuzzy logic is a method of reasoning applied to the AI, which resembles human reasoning. Here the word fuzzy defines things that are not clear, it means the situations where it is difficult to decide if the state is True or False. It involves all the possibilities that occur between Yes and NO."

        />
        
       <Question 
        question=" What is a Bayesian network, and why is it important in AI?" 
        answer="Bayesian networks are the graphical models that are used to show the probabilistic relationship between a set of variables. It is a directed cycle graph that contains multiple edges, and each edge represents a conditional dependency."
        answer1="Bayesian networks are probabilistic, because these networks are built from a probability distribution, and also use probability theory for prediction and anomaly detection. It is important in AI as it is based on Bayes theorem and can be used to answer the probabilistic questions."
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
export default Ai;