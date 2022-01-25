import React,{Component} from 'react';
import Question from '../Question/question'
import Answer from '../Answer/answer';
export default class html_q extends Component{

    //  initiate the question and answer object

     state={
        questions:{
            1:'Select the appropriate HTML tag used for the largest heading?',
            2:'Select the property used to create space between the element’s border and inner content?',
            3:'For users that use the tab key to navigate websites, what property represents this way of moving from one element to another?',
            4:'Select the appropriate HTML tag for inserting a line break?',
            5:'Select the correct option to create an e-mail link?',
            6:'Select the correct option to open a link in a new browser window?',
            7:'In CSS, Select the property to set an image in a list instead of a standard bullet?',
            8:'In CSS, Select the appropriate option to style an element so that the next element would appear right next to it not underneath it if both elements widths were collectively smaller than the container element?',
            9:'Select the correct HTML for creating a hyperlink?',
            10:'In CSS,Select the property used to set the spacing in between lines of text?',
            11:'Select the option to make a list that lists the items with numbers?',
            12:'Select the correct HTML tag to make a text italic?',
            13:'In CSS,select the property used to set the background color of an image?',
            14:'Select the property that is used to change the list style to show roman numerals instead of normal numbers?',
            15:'In CSS, what is the correct option to select all the tags on a page?'
            
        },
        answers:{
            1:{
                1:'Heading',
                2:'H6',
                3:'H1',
                4:'Head'
            },
            2:{
                1:'margin',
                2:'spacing',
                3:'padding',
                4:'border'
            },
            3:{
                1:'a:link',
                2:'a:active',
                3:'a:visited',
                4:'a:focus'
            },
            4:{
                1:'lb',
                2:'brbr',
                3:'break',
                4:'br'
            },
            5:{
                1:'A href=mailto:xxx@yyy.com',
                2:'Mail>xxx@yyy.com/mail',
                3:'Mail href="xxx@yyy.com"',
                4:'A href="xxx@yyy.com"'
            },
            6:{
                1:'A href="url" target="_blank"',
                2:'A href="url" new',
                3:'A href="url" target=_window"',
                4:'A href="url" target="new"'
            },
            7:{
                1:'image-list:',
                2:'list-image-src:',
                3:'list-style-image:',
                4:'list-image:'
            },
            8:{
                1:'display:left;',
                2:'display:inline;',
                3:'display:horizontal;',
                4:'None'
            },
            9:{
                1:'A name="http://www.techbeamers.com">techbeamers.com',
                2:'A url="http://www.techbeamers.com">techbeamers.com',
                3:'<A href="http://www.techbeamers.com">techbeamers</A>',
                4:'A>http://www.techbeamers.com'
            },
            10:{
                1:'line-spacing',
                2:'line-height',
                3:'spacing',
                4:'letter-spacing'
            },
            11:{
                1:'Ol',
                2:'List',
                3:'Dl',
                4:'Ul'
            },
            12:{
                1:' I',
                2:'Italic',
                3:'II',
                4:'It'
            },
            13:{
                1:'color:background',
                2:'background:color',
                3:'background-color',
                4:'color'
            },
            14:{
                1:'list-type:roman;',
                2:'list-style-type:upper-roman;',
                3:'list-bullet-type:roman-numerals;',
                4:'list-style:roman;'
            },
            15:{
                1:' p { }',
                2:'#p { }',
                3:'.p { }',
                4:'<p> { }'
            },
        },

        correctAnswers:{
            1:'3',
            2:'3',
            3:'4',
            4:'4',
            5:'1',
            6:'1',
            7:'3',
            8:'2',
            9:'3',
            10:'2',
            11:'1',
            12:'1',
            13:'3',
            14:'2',
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