import React, { useState ,useEffect} from 'react';
import { StylesProvider } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
const Comment=(props)=>{

    const [userData, setUserData] = useState({name:"",email:"",phone:"",message:""});

    const getuserData = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
           // console.log(data);
            setUserData({ ...userData,name:data.name,email:data.email,phone:data.phone,message:data.message});

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        getuserData();
    }, []);

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
                <form method="POST" className="comment_form">
                    <input className="comment_input" type="text" name="name" value={userData.name} onChange={inputEvent} placeholder="Enter your name" autoComplete="off" />

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