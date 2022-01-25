import React,{Component} from 'react';
import Question from '../Question/question'
import Answer from '../Answer/answer';
export default class software_q extends Component{

    //  initiate the question and answer object

     state={
        questions:{
            1:'Question Number 1 software',
            2:'Question Number 2 sql',
            3:'Question Number 3 sql',
            4:'Question Number 4 sql',
            5:'Question Number 5 sql',
            6:'Question Number 6 sql',
            7:'Question Number 7 sql',
            8:'Question Number 8 sql',
            9:'Question Number 9 sql',
            10:'Question Number 10 sql',
            11:'Question Number 11 sql',
            12:'Question Number 12 sql',
            13:'Question Number 13 sql',
            14:'Question Number 14 sql',
            15:'Question Number 15 sql'
            
        },
        answers:{
            1:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            2:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            3:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            4:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            5:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            6:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            7:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            8:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            9:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            10:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            11:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            12:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            13:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            14:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
            15:{
                1:'answer1',
                2:'answer2',
                3:'answer3',
                4:'answer4'
            },
        },

        correctAnswers:{
            1:'1',
            2:'2',
            3:'3',
            4:'4',
            5:'1',
            6:'2',
            7:'3',
            8:'4',
            9:'1',
            10:'2',
            11:'3',
            12:'4',
            13:'1',
            14:'2',
            15:'3'
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