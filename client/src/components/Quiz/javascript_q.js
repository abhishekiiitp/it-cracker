import React,{Component} from 'react';
import Question from '../Question/question'
import Answer from '../Answer/answer';
import i1 from './image_q/js1.PNG';
import i2 from './image_q/js2.PNG'
import i3 from './image_q/js3.PNG'
import i4 from './image_q/js4.PNG'
import i5 from './image_q/js5.PNG'
import i6 from './image_q/js6.PNG'
export default class javascript_q extends Component{

    //  initiate the question and answer object

     state={
        questions:{
            1:'Which of the following method of Boolean object returns a string depending upon the value of the object?',
            2:<img src={i1} alt="img1"/>,
            3:'Which of the following methods removes the last element from an array and returns that element?',
            4:<img src={i2} alt="img1"/>,
            5:'Select a String function that finds the match between a regular expression and a string, and to replace the matched substring with a new substring?',
            6:'Is it valid to pass an anonymous function as an argument to another function?',
            7:'Which of the following will return the type of the arguments passed to a function?',
            8:'Which of the following function of String object returns the capitalized string while respecting the current locale?',
            9:<img src={i3} alt="img1"/>,
            10:'Which of the following functions of Number object would return a string version of the number that may change according to the browser’s locale settings?',
            11:<img src={i4} alt="img1"/>,
            12:'What is the function of Array object that adds and/or removes elements from an array?',
            13:<img src={i5} alt="img1"/>,
            14:<img src={i6} alt="img1"/>,
            15:'Which of the following function of String object produces an HTML hypertext link for requesting another URL?'
            
        },
        answers:{
            1:{
                1:'valueOf()',
                2:'toSource()',
                3:'toString()',
                4:'None'
            },
            2:{
                1:"object",
                2: "undefined",
                3: "string",
                4:"number"
            },
            3:{
                1:'last()',
                2:'get()',
                3:'pop()',
                4:'None'
            },
            4:{
                1:'The typeof is a unary operator. It should occur before the single operand, which can be of any type.',
                2:'Its value is a string indicating the data type of the operand.',
                3:'None',
                4:'Both of the above.'
            },
            5:{
                1:'match()',
                2:'concat()',
                3:'replace()',
                4:'search()'
            },
            6:{
                1:'true',
                2:'false'
                
            },
            7:{
                1:'using getType function',
                2:'using typeof operator',
                3:'Both of the above.',
                4:'None'
            },
            8:{
                1:'toLocaleUpperCase()',
                2:'substring()',
                3:'toUpperCase()',
                4:'toString()'
            },
            9:{
                1:'7',
                2:'12',
                3:'5',
                4:'undefined',
                5:"NULL"
            },
            10:{
                1:' toExponential()',
                2:'toString()',
                3:' toLocaleString()',
                4:'toFixed()'
            },
            11:{
                1:'6; 7; 8',
                2:'7; 6; 8',
                3:'8; 7; 6',
                4:'8; 6; 7'
            },
            12:{
                1:'toSource()',
                2:'sort()',
                3:'splice()',
                4:'unshift()'
            },
            13:{
                1:'0',
                2:'5',
                3:'undefined',
                4:'6',
                5:'Null'
            },
            14:{
                1:'0',
                2:'undefined',
                3:'5',
                4:'Null'
            },
            15:{
                1:'link()',
                2:'sub()',
                3:'sup()',
                4:'small()'
            },
        },

        correctAnswers:{
            1:'3',
            2:'3',
            3:'3',
            4:'4',
            5:'1',
            6:'1',
            7:'2',
            8:'1',
            9:'2',
            10:'3',
            11:'3',
            12:'3',
            13:'4',
            14:'3',
            15:'1'
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