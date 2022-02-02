import React, {useState, useEffect} from 'react'
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const Note=(props)=>
{
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
            console.log(data);
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

    const deleteNote=()=>{
         props.deleteItem(props.id);
    }
    return(
        <>
            <div className="note">
                <h1>{userData.name}</h1>
                <br/>
                <p>{props.content}</p>
                <button className="note_btn" onClick={deleteNote}>
                    <DeleteOutlineIcon className="deleteIcon"/>
                </button>
            </div>
        </>
    )
}
export default Note;