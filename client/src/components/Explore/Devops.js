import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Devops=()=>{

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
        <div id="heading">Interview Question for DevOps
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />

       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

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
export default Devops;