import React,{Component} from 'react';
import Question from '../Question/question'
import Answer from '../Answer/answer';
export default class node_q extends Component{

    //  initiate the question and answer object

     state={
        questions:{
            1:' how node.js modules are available externally',
            2:' what is callback in node js ?',
            3:'Which module is used to serve static resources in Node.js?',
            4:'Which of the followings is valid languages for Node.js?',
            5:'What is Node.js?',
            6:'Which of the following statement is valid to use a Node module http in a Node based application?',
            7:' Which of the following API creates a client?',
            8:'REPL stands for ___.',
            9:'Which of the following is not REPL Commands in Node.js?',
            10:'EventEmitter provides on property which is used to bind a function with the event.',
            11:'The Node.js modules can be exposed using ___.',
            12:'Which statement executes the code of sample.js file?',
            13:'The ___ global function is used to stop a timer that was previously created with ___.',
            14:'What should you do in your code to improve your application’s performance?',
            15:'Which of the following tool automates various tasks of Node.js application?'
            
        },
        answers:{
            1:{
                1:'module.spread',
                2:'module.exports',
                3:'module.expose',
                4:'None of the Above'
            },
            2:{
                1:'Callback is an asynchronous equivalent for a function',
                2:'Callback is a technique in which a method call back the caller method.',
                3:'Both A & B',
                4:'None of the Above'
            },
            3:{
                1:'http',
                2:'static',
                3:'node-static',
                4:' node-resource'
            },
            4:{
                1:'C#',
                2:'C++',
                3:'java',
                4:'javascript'
            },
            5:{
                1:' a platform built on Chromes JavaScript runtime for easily building fast and scalable network applications',
                2:'a language built on Chromes JavaScript runtime for easily building fast and scalable network applications',
                3:'JavaScript runtime for easily building fast and scalable network applications',
                4:'None of the above'
            },
            6:{
                1:'var http = require("http");',
                2:'var http = import("http");',
                3:'package http;',
                4:'import http;'
            },
            7:{
                1:'net.createServer([options][, connectionListener])',
                2:' net.connect(options[, connectionListener])',
                3:'net.createConnection(port[, host][, connectListener])',
                4:'None of the above'
            },
            8:{
                1:'Read Eval Print Loop',
                2:' Read Event Print Loop',
                3:'Read Eval Printed Loop',
                4:'None of the above'
            },
            9:{
                1:'.help',
                2:' .break',
                3:' .clear',
                4:'None of the above'
            },
            10:{
                1:'True',
                2:'false'
            },
            11:{
                1:'module.expose',
                2:'module',
                3:'module.exports',
                4:'All of the above'
            },
            12:{
                1:'nodejs sample.js',
                2:' node sample.js',
                3:' sample.js',
                4:' None of the above'
            },
            13:{
                1:' clearTimeout(t), setTimeout()',
                2:'setTimeout(), clearTimeout(t)',
                3:'Both A and B',
                4:'None of the above'
            },
            14:{
                1:' Don’t use synchronous functions',
                2:' Use gzip compression',
                3:' Do logging correctly',
                4:' Handle exceptions properly'
            },
            15:{
                1:'Express.js',
                2:'GruntJS',
                3:'NPM',
                4:' None of the above'
            },
        },

        correctAnswers:{
            1:'2',
            2:'3',
            3:'3',
            4:'4',
            5:'1',
            6:'1',
            7:'1',
            8:'1',
            9:'4',
            10:'1',
            11:'3',
            12:'2',
            13:'1',
            14:'2',
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