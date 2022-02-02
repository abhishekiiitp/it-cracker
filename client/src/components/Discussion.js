import React, { useState,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Comment from "./Comment";
import Note from "./Note";
const Card=(props)=>
{
    // fetching username from database

    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);
            setShow(true);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);


    const[addItem,setAddItem]=useState([]);
    const addNote=(comment)=>
    {
        //alert('i m clicked');
        setAddItem((prevData)=>
        {
            return [...prevData,comment];
        })
        console.log(comment);
    }

    const onDelete=(id)=>{
        setAddItem((oldData)=>oldData.filter((currdata,indx)=>
        {
            return indx!==id;
        }))
    }
    
    return(
        <>
        <Comment passComment={addNote} />
       
       {
           addItem.map((val,index)=>{
               return(
                   <Note 
                   key={index}
                   id={index}
                   content={val.content}
                   deleteItem={onDelete}
                   />
               )
           })
       }

        </>    
    )
}

export default Card;