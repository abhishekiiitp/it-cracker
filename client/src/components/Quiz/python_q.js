import React,{Component} from 'react';
import Question from '../Question/question'
import Answer from '../Answer/answer';
export default class python_q extends Component{

    //  initiate the question and answer object

     state={
        questions:{
            1:'Is Python case sensitive when dealing with identifiers?',
            2:' Which of the following is an invalid variable?',
            3:'Which of the following is not a keyword?',
            4:'All keywords in Python are in _________',
            5:'Which of the following is an invalid statement?',
            6:'Which one of these is floor division?',
            7:'Which one of the following has the same precedence level?',
            8:'Which of these in not a core data type?',
            9:'Which of the following is not a standard exception in Python?',
            10:'An exception is ____________',
            11:'Which of the following blocks will be executed whether an exception is thrown or not?',
            12:'Select the valid option for the following Output −',
            13:' Which of the following expressions can be used to multiply a given number ‘a’ by 4?',
            14:'Which of the following expressions results in an error?',
            15:'What will be the output of the following Python expression?'
            
        },
        answers:{
            1:{
                1:'Yes',
                2:'No',
                3:'machine dependent',
                4:'none of the mentioned'
            },
            2:{
                1:'foo',
                2:' my_string_1',
                3:'1st_string',
                4:' _'
            },
            3:{
                1:'pass',
                2:'assert',
                3:'nonlocal',
                4:' eval'
            },
            4:{
                1:' UPPER CASE',
                2:'Capitalized',
                3:' lower case',
                4:'None of the mentioned'
            },
            5:{
                1:' a b c = 1000 2000 3000',
                2:'a,b,c = 1000, 2000, 3000',
                3:'abc = 1,000,000',
                4:' a_b_c = 1,000,000'
            },
            6:{
                1:' //',
                2:'/',
                3:'%',
                4:'None'
            },
            7:{
                1:'Multiplication, Division and Addition',
                2:' Multiplication, Division, Addition and Subtraction',
                3:'Addition and Subtraction',
                4:'Addition and Multiplication'
            },
            8:{
                1:' Lists',
                2:' Class',
                3:' Tuples',
                4:'Dictionary'
            },
            9:{
                1:'NameErro',
                2:' AssignmentError',
                3:' IOError',
                4:'ValueError'
            },
            10:{
                1:'a standard module',
                2:'a special function',
                3:'a module',
                4:' an object'
            },
            11:{
                1:'except',
                2:'finally',
                3:'else',
                4:'assert'
            },
            12:{
                1:'Canvas.Create_text(text= ""Hello! ""',
                2:'Canvas.Create_text(30 , 40, text= ""Hello! "" ,filled= ""green ""',
                3:'Canvas.Create_text(text= ""Hello! "" ,textcolor= ""Green""',
                4:'Canvas.Create_text(30 , 40, text= ""Hello!""'
            },
            13:{
                1:'a<<4',
                2:'a>>2',
                3:'a<<2',
                4:'a>>4'
            },
            14:{
                1:' int(‘1011’)',
                2:' int(1011,2)',
                3:' int(‘1011’,23)',
                4:' int(1011)'
            },
            15:{
                1:'‘0b10111’',
                2:' ‘0b11111’',
                3:' ‘0b11011’',
                4:' ‘0b11101’'
            },
        },

        correctAnswers:{
            1:'1',
            2:'3',
            3:'4',
            4:'4',
            5:'1',
            6:'1',
            7:'3',
            8:'2',
            9:'2',
            10:'4',
            11:'2',
            12:'2',
            13:'3',
            14:'2',
            15:'4'
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