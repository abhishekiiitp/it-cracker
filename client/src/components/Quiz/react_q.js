import React,{Component} from 'react';
import Question from '../Question/question'
import Answer from '../Answer/answer';
export default class react_q extends Component{

    //  initiate the question and answer object

     state={
        questions:{
            1:' What is React Js?',
            2:'What does ReactJS use to increase performance?',
            3:'A valid react component can return ...... number of elements.',
            4:'For controlled components in react',
            5:'Which of the following API is a MUST for every ReactJS component?',
            6:'How can you access the state of a component from inside of a member function?',
            7:'What is a good use case for using a function while rendering a dynamic list of items',
            8:'What is the second argument for setState useful for?',
            9:'What is the default port for webpack dev server?',
            10:'What are two ways data gets handled in react?',
            11:'What are the limitations of ReactJS?',
            12:'How many stages are there in React js life cycle',
            13:'In relation to React js component lifecycle, which statement is true',
            14:'Keys are given to a list of elements in react. These keys should be',
            15:'To update state in react forcefully, which method is used'
            
        },
        answers:{
            1:{
                1:'Javascript framework',
                2:'Javascript library',
                3:'Javascript file',
                4:' None of the Above'
            },
            2:{
                1:' Virtual DOM',
                2:'Original DOM',
                3:'Local DOM',
                4:'None of the Above'
            },
            3:{
                1:'2',
                2:'1',
                3:'3',
                4:'4'
            },
            4:{
                1:'Source of truth is DOM',
                2:' Source of truth can be anything',
                3:'Source of truth is component state',
                4:'None'
            },
            5:{
                1:' getInitialState',
                2:'render',
                3:'renderComponent',
                4:'None'
            },
            6:{
                1:'this.getState()',
                2:'this.state',
                3:'this.prototype.stateValue',
                4:' this.values'
            },
            7:{
                1:'If we need to compute a value based on properties of items in the loop.',
                2:'None. Functions should not be used while rendering a dynamic list.',
                3:'To make the code shorter',
                4:'None of the above'
            },
            8:{
                1:'To replace the state completely instead of the default merge action',
                2:' To invoke code after the setState operation is done',
                3:'To access the previous state before the setState operation',
                4:'None of the above'
            },
            9:{
                1:'3000',
                2:'8080',
                3:'3306',
                4:'8809'
            },
            10:{
                1:' state & props',
                2:'services & components',
                3:'state & services',
                4:'state & component'
            },
            11:{
                1:' React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development',
                2:' React is using inline templating and JSX. This can seem awkward to some developers',
                3:'The library of react is too large',
                4:'All of the above'
            },
            12:{
                1:'1',
                2:'2',
                3:'3',
                4:'4'
            },
            13:{
                1:'only function component can have life cycle',
                2:'Only class components can have life cycle',
                3:'Both type of components can have life cycle',
                4:'None of above'
            },
            14:{
                1:'Unique in the DOM',
                2:'Unique among the siblings only',
                3:'Do not requires to be unique',
                4:'None of above'
            },
            15:{
                1:'setState',
                2:' forceUpdate',
                3:' Both of above',
                4:' None of above'
            },
        },

        correctAnswers:{
            1:'2',
            2:'1',
            3:'2',
            4:'3',
            5:'3',
            6:'4',
            7:'1',
            8:'2',
            9:'2',
            10:'1',
            11:'4',
            12:'3',
            13:'2',
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