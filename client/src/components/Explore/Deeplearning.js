import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Deeplearning=()=>{

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
        <div id="heading">Interview Question for Deep Learning
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is deep learning?" 
        answer="Deep learning is a part of machine learning with an algorithm inspired by the structure and function of the brain, which is called an artificial neural network. In the mid-1960s, Alexey Grigorevich Ivakhnenko published the first general, while working on deep learning network. Deep learning is suited over a range of fields such as computer vision, speech recognition, natural language processing, etc."

        />

       <Question 
        question="What are the main differences between AI, Machine Learning, and Deep Learning?" 
        answer="AI stands for Artificial Intelligence. It is a technique which enables machines to mimic human behavior."
        answer1="Machine Learning is a subset of AI which uses statistical methods to enable machines to improve with experiences."
        answer2="Deep learning is a part of Machine learning, which makes the computation of multi-layer neural networks feasible. It takes advantage of neural networks to simulate human-like decision making."
        flag="1"

        />
        
       <Question 
        question="Differentiate supervised and unsupervised deep learning procedures." 
        answer="Supervised learning is a system in which both input and desired output data are provided. Input and output data are labeled to provide a learning basis for future data processing."
        answer1="Unsupervised procedure does not need labeling information explicitly, and the operations can be carried out without the same. The common unsupervised learning method is cluster analysis. It is used for exploratory data analysis to find hidden patterns or grouping in data."
        flag="1"

        />
        
       <Question 
        question="What are the applications of deep learning?" 
        answer="->Computer vision"
        answer1="->Natural language processing and pattern recognition"
        answer2="->Image recognition and processing"
        answer3="->Machine translation"
        answer4="->Sentiment analysis"
        answer5="->Question Answering system"
        flag="1"

        />
        
       <Question 
        question="Do you think that deep network is better than a shallow one?" 
        answer="Both shallow and deep networks are good enough and capable of approximating any function. But for the same level of accuracy, deeper networks can be much more efficient in terms of computation and number of parameters. Deeper networks can create deep representations. At every layer, the network learns a new, more abstract representation of the input."

        />
        
       <Question 
        question="What do you mean by 'overfitting'?" 
        answer="Overfitting is the most common issue which occurs in deep learning. It usually occurs when a deep learning algorithm apprehends the sound of specific data. It also appears when the particular algorithm is well suitable for the data and shows up when the algorithm or model represents high variance and low bias."

        />
        
       <Question 
        question="What is Backpropagation?" 
        answer="Backpropagation is a training algorithm which is used for multilayer neural networks. It transfers the error information from the end of the network to all the weights inside the network. It allows the efficient computation of the gradient."

        />
        
       <Question 
        question="What is the function of the Fourier Transform in Deep Learning?" 
        answer="Fourier transform package is highly efficient for analyzing, maintaining, and managing a large databases. The software is created with a high-quality feature known as the special portrayal. One can effectively utilize it to generate real-time array data, which is extremely helpful for processing all categories of signals."

        />
        
       <Question 
        question="Describe the theory of autonomous form of deep learning in a few words." 
        answer="There are several forms and categories available for the particular subject, but the autonomous pattern represents independent or unspecified mathematical bases which are free from any specific categorizer or formula."

        />
        
       <Question 
        question="What is the use of Deep learning in today's age, and how is it adding data scientists?" 
        answer="Deep learning has brought significant changes or revolution in the field of machine learning and data science. The concept of a complex neural network (CNN) is the main center of attention for data scientists. It is widely taken because of its advantages in performing next-level machine learning operations. The advantages of deep learning also include the process of clarifying and simplifying issues based on an algorithm due to its utmost flexible and adaptable nature. It is one of the rare procedures which allow the movement of data in independent pathways. Most of the data scientists are viewing this particular medium as an advanced additive and extended way to the existing process of machine learning and utilizing the same for solving complex day to day issues."

        />
        
       <Question 
        question="What are the deep learning frameworks or tools?" 
        answer="Deep learning frameworks or tools are:"
        answer1="Tensorflow, Keras, Chainer, Pytorch, Theano & Ecosystem, Caffe2, CNTK, DyNetGensim, DSSTNE, Gluon, Paddle, Mxnet, BigDL"
        flag="1"

        />
        
       <Question 
        question="What are the disadvantages of deep learning?" 
        answer="There are some disadvantages of deep learning, which are:"
        answer1="->Deep learning model takes longer time to execute the model. In some cases, it even takes several days to execute a single model depends on complexity."
        answer2="->The deep learning model is not good for small data sets, and it fails here."
        flag="1"

        />
        
       <Question 
        question="What is the meaning of term weight initialization in neural networks?" 
        answer="In neural networking, weight initialization is one of the essential factors. A bad weight initialization prevents a network from learning. On the other side, a good weight initialization helps in giving a quicker convergence and a better overall error. Biases can be initialized to zero. The standard rule for setting the weights is to be close to zero without being too small."

        />
        
       <Question 
        question="Explain Data Normalization." 
        answer="Data normalization is an essential preprocessing step, which is used to rescale values to fit in a specific range. It assures better convergence during backpropagation. In general, data normalization boils down to subtracting the mean of each data point and dividing by its standard deviation."

        />
        
       <Question 
        question="Why is zero initialization not a good weight initialization process?" 
        answer="If the set of weights in the network is put to a zero, then all the neurons at each layer will start producing the same output and the same gradients during backpropagation."
        answer1="As a result, the network cannot learn at all because there is no source of asymmetry between neurons. That is the reason why we need to add randomness to the weight initialization process."
        flag="1"

        />
        
       <Question 
        question=" What are the prerequisites for starting in Deep Learning?" 
        answer="There are some basic requirements for starting in Deep Learning, which are:"
        answer1="Machine Learning"
        answer2="Mathematics"
        answer3="Python Programming"
        flag="1"

        />
        
       <Question 
        question="What are the supervised learning algorithms in Deep learning?" 
        answer="Artificial neural network"
        answer1="Convolution neural network"
        answer2="Recurrent neural network"
        flag="1"

        />
        
       <Question 
        question="What are the unsupervised learning algorithms in Deep learning?" 
        answer="Self Organizing Maps"
        answer1="Deep belief networks (Boltzmann Machine)"
        answer2="Auto Encoders"
        flag="1"

        />
        
       <Question 
        question="How many layers in the neural network?" 
        answer="Input Layer
         The input layer contains input neurons which send information to the hidden layer."
        answer1="Hidden Layer
        The hidden layer is used to send data to the output layer."
        answer2="Output Layer
        The data is made available at the output layer."
        flag="1"

        />
        
       <Question 
        question=" What is the use of the Activation function?" 
        answer="The activation function is used to introduce nonlinearity into the neural network so that it can learn more complex function. Without the Activation function, the neural network would be only able to learn function, which is a linear combination of its input data."
        answer1="Activation function translates the inputs into outputs. The activation function is responsible for deciding whether a neuron should be activated or not. It makes the decision by calculating the weighted sum and further adding bias with it. The basic purpose of the activation function is to introduce non-linearity into the output of a neuron."
        flag="1"

        />
        
       <Question 
        question="What is a binary step function?" 
        answer="The binary step function is an activation function, which is usually based on a threshold. If the input value is above or below a particular threshold limit, the neuron is activated, then it sends the same signal to the next layer. This function does not allow multi-value outputs."

        />
        
       <Question 
        question="What is the sigmoid function?" 
        answer="The sigmoid activation function is also called the logistic function. It is traditionally a trendy activation function for neural networks. The input data to the function is transformed into a value between 0.0 and 1.0. Input values that are much larger than 1.0 are transformed to the value 1.0. Similarly, values that are much smaller than 0.0 are transformed into 0.0. The shape of the function for all possible inputs is an S-shape from zero up through 0.5 to 1.0. It was the default activation used on neural networks, in the early 1990s."

        />
        
       <Question 
        question="What is Tanh function?" 
        answer="The hyperbolic tangent function, also known as tanh for short, is a similar shaped nonlinear activation function. It provides output values between -1.0 and 1.0. Later in the 1990s and through the 2000s, this function was preferred over the sigmoid activation function as models. It was easier to train and often had better predictive performance."

        />
        
       <Question 
        question="What is ReLU function?" 
        answer="A node or unit which implements the activation function is referred to as a rectified linear activation unit or ReLU for short. Generally, networks that use the rectifier function for the hidden layers are referred to as rectified networks."
        answer1="Adoption of ReLU may easily be considered one of the few milestones in the deep learning revolution."
        flag="1"

        />
        
       <Question 
        question="What is the use of leaky ReLU function?" 
        answer="The Leaky ReLU (LReLU or LReL) manages the function to allow small negative values when the input is less than zero."

        />
        
       <Question 
        question="What is the softmax function?" 
        answer="The softmax function is used to calculate the probability distribution of the event over 'n' different events. One of the main advantages of using softmax is the output probabilities range. The range will be between 0 to 1, and the sum of all the probabilities will be equal to one. When the softmax function is used for multi-classification model, it returns the probabilities of each class, and the target class will have a high probability."

        />
        
       <Question 
        question="What is a Swish function?" 
        answer="Swish is a new, self-gated activation function. Researchers at Google discovered the Swish function. According to their paper, it performs better than ReLU with a similar level of computational efficiency."

        />
        
       <Question 
        question="What is the most used activation function?" 
        answer="Relu function is the most used activation function. It helps us to solve vanishing gradient problems."

        />
        
       <Question 
        question="Can Relu function be used in output layer?" 
        answer="No, Relu function has to be used in hidden layers."

        />
        
       <Question 
        question="In which layer softmax activation function used?" 
        answer="Softmax activation function has to be used in the output layer."

        />
        
       <Question 
        question="What do you understand by Autoencoder?" 
        answer="Autoencoder is an artificial neural network. It can learn representation for a set of data without any supervision. The network automatically learns by copying its input to the output; typically,internet representation consists of smaller dimensions than the input vector. As a result, they can learn efficient ways of representing the data. Autoencoder consists of two parts; an encoder tries to fit the inputs to the internal representation, and a decoder converts the internal state to the outputs."

        />
        
       <Question 
        question="What do you mean by Dropout?" 
        answer="Dropout is a cheap regulation technique used for reducing overfitting in neural networks. We randomly drop out a set of nodes at each training step. As a result, we create a different model for each training case, and all of these models share weights. It's a form of model averaging."

        />
        
       <Question 
        question="What do you understand by Tensors?" 
        answer="Tensors are nothing but a de facto for representing the data in deep learning. They are just multidimensional arrays, which allows us to represent the data having higher dimensions. In general, we deal with high dimensional data sets where dimensions refer to different features present in the data set."

        />
        
       <Question 
        question="What do you understand by Boltzmann Machine?" 
        answer="A Boltzmann machine (also known as stochastic Hopfield network with hidden units) is a type of recurrent neural network. In a Boltzmann machine, nodes make binary decisions with some bias. Boltzmann machines can be strung together to create more sophisticated systems such as deep belief networks. Boltzmann Machines can be used to optimize the solution to a problem."

        />
        
       <Question 
        question="What is Model Capacity?" 
        answer="The capacity of a deep learning neural network controls the scope of the types of mapping functions that it can learn. Model capacity can approximate any given function. When there is a higher model capacity, it means that the larger amount of information can be stored in the network."

        />
        
       <Question 
        question="What is the cost function?" 
        answer="A cost function describes us how well the neural network is performing with respect to its given training sample and the expected output. It may depend on variables such as weights and biases.It provides the performance of a neural network as a whole. In deep learning, our priority is to minimize the cost function. That's why we prefer to use the concept of gradient descent."

        />
        
       <Question 
        question="Explain the following variant of Gradient Descent: Stochastic, Batch, and Mini-batch?" 
        answer="Stochastic Gradient Descent=> Stochastic gradient descent is used to calculate the gradient and update the parameters by using only a single training example."
        answer1="Batch Gradient Descent=> Batch gradient descent is used to calculate the gradients for the whole dataset and perform just one update at each iteration."
        answer2="Mini-batch Gradient Descent=> Mini-batch gradient descent is a variation of stochastic gradient descent. Instead of a single training example, mini-batch of samples is used. Mini-batch gradient descent is one of the most popular optimization algorithms."
        flag="1"

        />
        
       <Question 
        question="What are the main benefits of Mini-batch Gradient Descent?" 
        answer="->It is computationally efficient compared to stochastic gradient descent."
        answer1="->It improves generalization by finding flat minima."
        answer2="->It improves convergence by using mini-batches. We can approximate the gradient of the entire training set, which might help to avoid local minima."
        flag="1"

        />
        
       <Question 
        question="What do you understand by a convolutional neural network?" 
        answer="A convolutional neural network, often called CNN, is a feedforward neural network. It uses convolution in at least one of its layers. The convolutional layer contains a set of filter (kernels). This filter is sliding across the entire input image, computing the dot product between the weights of the filter and the input image. As a result of training, the network automatically learns filters that can detect specific features."

        />
        
       <Question 
        question="Explain the different layers of CNN." 
        answer="Convolution=> This layer comprises of a set of independent filters. All these filters are initialized randomly. These filters then become our parameters which will be learned by the network subsequently."
        answer1="ReLU=> The ReLu layer is used with the convolutional layer."
        answer2="Pooling=> It reduces the spatial size of the representation to lower the number of parameters and computation in the network. This layer operates on each feature map independently."
        answer3="Full Collectedness=> Neurons in a completely connected layer have complete connections to all activations in the previous layer, as seen in regular Neural Networks. Their activations can be easily computed with a matrix multiplication followed by a bias offset."
        flag="1"
        />
        
       <Question 
        question="What is an RNN?" 
        answer="RNN stands for Recurrent Neural Networks. These are the artificial neural networks which are designed to recognize patterns in sequences of data such as handwriting, text, the spoken word, genomes, and numerical time series data. RNN use backpropagation algorithm for training because of their internal memory. RNN can remember important things about the input they received, which enables them to be very precise in predicting what's coming next."

        />
        
       <Question 
        question="What are the issues faced while training in Recurrent Networks?" 
        answer="Recurrent Neural Network uses backpropagation algorithm for training, but it is applied on every timestamp. It is usually known as Back-propagation Through Time (BTT)."
        answer1="There are two significant issues with Back-propagation, such as:"
        answer2="Vanishing Gradient=> When we perform Back-propagation, the gradients tend to get smaller and smaller because we keep on moving backward in the Network. As a result, the neurons in the earlier layer learn very slowly if we compare it with the neurons in the later layers.Earlier layers are more valuable because they are responsible for learning and detecting simple patterns. They are the building blocks of the network."
        answer3="If they provide improper or inaccurate results, then how can we expect the next layers and complete network to perform nicely and provide accurate results. The training procedure tales long, and the prediction accuracy of the model decreases."
        answer4="Exploding Gradient=> Exploding gradients are the main problem when large error gradients accumulate. They provide result in very large updates to neural network model weights during training."
        answer5="Gradient Descent process works best when updates are small and controlled. When the magnitudes of the gradient accumulate, an unstable network is likely to occur. It can cause poor prediction of results or even a model that reports nothing useful."
        flag="1"

        />
        
       <Question 
        question="Explain the importance of LSTM." 
        answer="LSTM stands for Long short-term memory. It is an artificial RNN (Recurrent Neural Network) architecture, which is used in the field of deep learning. LSTM has feedback connections which makes it a 'general purpose computer.'' It can process not only a single data point but also entire sequences of data."
        answer1="They are a special kind of RNN which are capable of learning long-term dependencies."
        flag="1"

        />
        
       <Question 
        question="What do you understand by Deep Autoencoders?" 
        answer="Deep Autoencoder is the extension of the simple Autoencoder. The first layer present in DeepAutoencoder is responsible for first-order functions in the raw input. The second layer is responsible for second-order functions corresponding to patterns in the appearance of first-order functions. Deeper layers which are available in the Deep Autoencoder tend to learn even high-order features."

        />
        
       <Question 
        question="What are the three steps to developing the necessary assumption structure in Deep learning?" 
        answer="The procedure of developing an assumption structure involves three specific actions."
        answer1="->The first step contains algorithm development. This particular process is lengthy."
        answer2="->The second step contains algorithm analyzing, which represents the in-process methodology."
        answer3="->The third step is about implementing the general algorithm in the final procedure. The entire framework is interlinked and required for throughout the process."

        />
        
       <Question 
        question="What do you understand by Perceptron? Also, explain its type." 
        answer="A perceptron is a neural network unit (an artificial neuron) that does certain computations to detect features. It is an algorithm for supervised learning of binary classifiers. This algorithm is used to enable neurons to learn and processes elements in the training set one at a time."
        answer1="There are two types of perceptrons:"
        answer2="Single-Layer Perceptron"
        answer3="Single layer perceptrons can learn only linearly separable patterns."
        answer4="Multilayer Perceptrons"
        answer5="Multilayer perceptrons or feedforward neural networks with two or more layers have the higher processing power."
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
export default Deeplearning;