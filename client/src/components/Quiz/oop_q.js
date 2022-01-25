import React,{Component} from 'react';
import Question from '../Question/question'
import Answer from '../Answer/answer';
export default class oop_q extends Component{

    //  initiate the question and answer object

     state={
        questions:{
            1:'OOPs stands for __.',
            2:'Which concept of Java is achieved by combining methods and attribute into a class?',
            3:'Which of the following is not a type of constructor?',
            4:'Which of the following concepts determining at runtime what method to invoke?',
            5:'___ refers to the ability of a variable, function or object to take on multiple forms.',
            6:'Which of the following language supports polymorphism but not the classes?',
            7:'Which function best describe the concept of polymorphism in programming languages?',
            8:'What is the extra feature in classes which was not in the structures?',
            9:'Which of the following class is known as the generic class?',
            10:'Which feature allows open recursion, among the following?',
            11:' __ keyword is used to inherit a class or abstract class.',
            12:' An Abstract Method does not have a body.',
            13:'Which of the following is Access Modifiers in OOPs?',
            14:'Which of the following is not related to OOPS?',
            15:' Is Constructor can return a value?l'
            
        },
        answers:{
            1:{
                1:' Object Oriented Programming System',
                2:' Object Oriented Program System',
                3:'Object Orienting Programming System',
                4:' None of the above'
            },
            2:{
                1:'Encapsulation',
                2:'Inheritance',
                3:'Polymorphism',
                4:'Abstraction'
            },
            3:{
                1:'Default constructor',
                2:'Friend constructor',
                3:'Copy constructor',
                4:'Parameterized constructor'
            },
            4:{
                1:' Data hiding',
                2:'Dynamic Typing',
                3:'Dynamic binding',
                4:'Dynamic loading'
            },
            5:{
                1:' Polymorphism',
                2:' Inheritance',
                3:'Abstraction',
                4:'Encapsulation'
            },
            6:{
                1:' C++ programming language',
                2:'Java programming language',
                3:'Ada programming language',
                4:' C# programming language'
            },
            7:{
                1:'Class member function',
                2:'Virtual function',
                3:'Inline function',
                4:' Undefined function'
            },
            8:{
                1:'Member functions',
                2:'Static Data allowed',
                3:'Data members',
                4:' Public access specifier'
            },
            9:{
                1:' Final class',
                2:'Template class',
                3:'Abstract class',
                4:' Efficient code'
            },
            10:{
                1:'Use of this pointer',
                2:'Use of pointers',
                3:'Use of pass by value',
                4:'Use of parameterized constructor'
            },
            11:{
                1:'extends',
                2:'implement',
                3:'super',
                4:'None '
            },
            12:{
                1:'True',
                2:'False',
                
            },
            13:{
                1:'private',
                2:'public',
                3:'protected',
                4:'All'
            },
            14:{
                1:' Structure and Union',
                2:'Class and Object',
                3:'Constructor and Destructor',
                4:'Inheritance and Polymorphism'
            },
            15:{
                1:'Yes',
                2:'No',
                
            },
        },

        correctAnswers:{
            1:'1',
            2:'1',
            3:'2',
            4:'3',
            5:'1',
            6:'3',
            7:'2',
            8:'1',
            9:'2',
            10:'1',
            11:'1',
            12:'2',
            13:'4',
            14:'1',
            15:'2'
        },
        correctAnswer:0,
        clickedAnswer:0,
        step:1,
        score:0

    }

    checkAnswer=answer=>{
        const {correctAnswers,step,score}=this.state;
        if(answer===correctAnswers[step])
        {
            this.setState({
                score:score+1,
                correctAnswer:correctAnswers[step],
                clickedAnswer:answer
            })
        }
        else{
            this.setState({
            
                correctAnswer:0,
                clickedAnswer:answer
            })
        }
    }
    nextStep=step=>{
        this.setState({
            step:step+1,
            correctAnswer:0,
            clickedAnswer:0
        })
    }
    render()
    {
        let {questions,answers,correctAnswer,clickedAnswer,step,score}=this.state;
    return (
        <div className="quiz">
        <div className="content">
        
       { step<=Object.keys(questions).length?
       (
           <>
           <Question 
            ques={questions[step]}
        />
        <Answer
            answer={answers[step]}
            step={step}
            checkAnswer={this.checkAnswer}
            correctAnswer={correctAnswer}
            clickedAnswer={clickedAnswer}
        />

        <button 
        className="Nextstep"
        disabled={
            clickedAnswer&& Object.keys(questions).length >=step
            ?false : true
        }
           onClick={()=>this.nextStep(step)}
        >
            Next
        </button>
        </>
        ):(
            <div className="finalPage">

              <h1> You have completed the quiz !! </h1>
              <p>Your score is :{score} of {Object.keys(questions).length }</p>
              <p> Thank you !!  </p>
            </div>
        )
        }
        </div>
        </div>
    )
    }
}

// export default QuizMain;