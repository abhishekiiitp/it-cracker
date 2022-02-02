import React, {useState, useEffect} from 'react'
import Button from "@material-ui/core/Button";
// import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
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

    // reply content

    const replyComment=()=>{

    }

    const[like,setlike]=useState(0);
    const[dislike,setdislike]=useState(0);

    const[likeactive,setlikeactive]=useState(false);
    const[dislikeactive,setdislikeactive]=useState(false);



    function likef()
    {
        if(likeactive)
        {
            setlikeactive(false)
            setlike(like-1)
        }
        else
        {
            setlikeactive(true)
            setlike(like+1)
            if(dislikeactive)
            {
                setdislikeactive(false)
                setlike(like+1)
                setdislike(dislike-1)
            }
        }

    }

    function dislikef()
    {
        if(dislikeactive)
        {
            setdislikeactive(false)
            setdislike(dislike-1)
        }
        else
        {
            setdislikeactive(true)
            setdislike(dislike+1)
            if(likeactive)
            {
                setlikeactive(false)
                setdislike(dislike+1)
                setlike(like-1)
            }

        }

    }
    return(
        <>
            <div className="note">
                <h1>{userData.name}</h1>
                <br/>
                <p>{props.content}</p>
                <button className="note_btn" onClick={replyComment}>
                    <ReplyOutlinedIcon className="deleteIcon"/>
                    
                </button>

                <button className="note_btn" onClick={dislikef}>
                    <ThumbDownAltOutlinedIcon className="deleteIcon"/> {dislike}
                    
                </button>

                <button className="note_btn" onClick={likef}>
                    <ThumbUpAltOutlinedIcon className="deleteIcon"/> {like}
                    
                </button>

               

            </div>
        </>
    )
}
export default Note;