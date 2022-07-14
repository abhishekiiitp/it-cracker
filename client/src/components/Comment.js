import React, { useState ,useEffect} from 'react';
import { StylesProvider } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
const Comment=(props)=>{

    const [userData, setUserData] = useState({name:"",content:""});

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
            setUserData({ ...userData,name:data.name,content:data.content});

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

    // we are storing data in states 

    // const handleInputs = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setUserData({ ...userData, [name]:value });
    // }   
    //  send the data to backend 

    const comment_form = async (e) => {
        e.preventDefault();

        const { name, content } = userData;

        const res = await fetch('/discuss', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, content
            })
        });

        const data = await res.json();

        if (!data) {
            console.log("message not send ");
        } else {
            alert("Message Send");
            setUserData({ ...userData, comment: "" });
        }

    }

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