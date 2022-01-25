import React, { useState } from 'react';
import { StylesProvider } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
const Comment=(props)=>{

    const[comment,setComment]=useState({
        name:"",
        content:""

    });

    const inputEvent=(event)=>{
         
        const{name,value}=event.target;
        setComment((prevData)=>{
             return{
                 ...prevData,
                 [name]:value
             }
        })
        //console.log(comment);
    }
    const addComment=()=>{
           props.passComment(comment);
           setComment({
            name:"",
            content:""
           })
    }
    return(
        <>
        <StylesProvider injectFirst>
            <div className="main_note">
                <form className="comment_form">
                    <input className="comment_input" type="text" name="name" value={comment.name} onChange={inputEvent} placeholder="Enter your name" autoComplete="off" />

                    <textarea className="comment_textarea" rows='' column='' name="content" value={comment.content} onChange={inputEvent} placeholder="write ur query here...."/>
                    <Button onClick={addComment} >
                         <SendIcon className="plus_sign"/>
                    </Button>
                </form>
            </div>
            </StylesProvider>
        </>
    )
}
export default Comment;