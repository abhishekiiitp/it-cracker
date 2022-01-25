import React from 'react';
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const Note=(props)=>{

    const deleteNote=()=>{
         props.deleteItem(props.id);
    }
    return(
        <>
            <div className="note">
                <h1>{props.name}</h1>
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