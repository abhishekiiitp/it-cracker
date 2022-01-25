import React,{Component} from 'react';
import Question from '../Question/question'
import Answer from '../Answer/answer';
export default class appdev_q extends Component{

    //  initiate the question and answer object

     state={
        questions:{
            1:'Which of the following is the subclass in Android?',
            2:'How to stop the services in android?',
            3:'How many broadcast receivers are available in android?',
            4:'Which permissions are required to get a location in android?',
            5:'What is a GCM in android?',
            6:'Is it mandatory to call onCreate() and onStart() in android?',
            7:'What is an interface in android?',
            8:'What is the name of the program that converts Java byte code into Dalvik byte code?',
            9:'Which among the following are part of "Application" layer of Android Architecture',
            10:' A ___________ makes a specific set of the application data available to other applications',
            11:'Which among these are NOT a part of Android’s native libraries?',
            12:'What Activity method you use to retrieve a reference to an Android view by using the id attribute of a resource XML?',
            13:'What are the indirect Direct subclasses of Services?',
            14:'Which are the screen densities in Android?',
            15:' If the UI begins to behave sluggishly or crash while making network calls, this is likely due to…'
            
        },
        answers:{
            1:{
                1:' Tab & Action Bar Activity',
                2:' Preference Activity',
                3:'Launcher Activity',
                4:' All are Correct'
            },
            2:{
                1:'finish()',
                2:'system.exit().',
                3:'By manually',
                4:'StopSelf() and stopService()'
            },
            3:{
                1:'2',
                2:'3',
                3:'4',
                4:'5'
            },
            4:{
                1:'GPRS permission',
                2:'WIFI permission',
                3:'ACCESS_FINE and ACCESS_COARSE',
                4:'Internet permission'
            },
            5:{
                1:'Goggle Message pack',
                2:' Goggle Count Messaging',
                3:'Goggle Could Messaging for chrome',
                4:'None of the Above'
            },
            6:{
                1:'yes',
                2:'No',
                
            },
            7:{
                1:'Class',
                2:'Layout file',
                3:' Bridge between class & the outside world',
                4:'All are Correct'
            },
            8:{
                1:'Dex compiler',
                2:' Dalvik Converter',
                3:'Android Interpretive Compiler (AIC)',
                4:' Mobile Interpretive Compiler (MIC)'
            },
            9:{
                1:'Contacts',
                2:'Browser',
                3:'Phone',
                4:'All'
            },
            10:{
                1:' Intent',
                2:'Content provider',
                3:' Broadcast receivers',
                4:' None of the Above'
            },
            11:{
                1:'Webkit',
                2:' OpenGL',
                3:'SQLite',
                4:'Dalvik'
            },
            12:{
                1:'retrieveResourceById(int id)',
                2:'findViewById(String id)',
                3:' findViewById(int id)',
                4:' findViewByReference(int id);'
            },
            13:{
                1:' RecognitionService',
                2:' SpellCheckerService',
                3:' InputMethodService',
                4:'RemoteViewsService'
            },
            14:{
                1:' low density',
                2:'medium density',
                3:'extra high density',
                4:' All are Correct'
            },
            15:{
                1:'Network latency',
                2:'Virus on the Server',
                3:' Hardware malfunctions',
                4:' Activity manager contains too much.'
            },
        },

        correctAnswers:{
            1:'4',
            2:'4',
            3:'2',
            4:'3',
            5:'3',
            6:'1',
            7:'3',
            8:'1',
            9:'4',
            10:'2',
            11:'4',
            12:'3',
            13:'3',
            14:'4',
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