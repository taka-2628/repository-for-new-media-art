import React, { useState } from "react";

import EditComment from "./EditComment";

import anonymousIcon from "../../assets/anonymous-user-icon.png";
import editIcon from "../../assets/edit-icon.png";
import deleteIcon from "../../assets/delete-icon.png";

function Comment( { comment, currentUser, onDeleteComment, onEditComment} ){
  const [ editOn, setEditOn ] = useState(false);

  function handleDelete(id) {   
    fetch(`/comments/${id}`, {
      method: "DELETE"
    });
    onDeleteComment(id);
  }

  function handleEdit(updatedComment) {
    onEditComment(updatedComment);
    setEditOn(false);
  }

  const date = new Date(comment.created_at) // formated_Date - SDK returned date
  const formatedDate = (`${date.getFullYear()}-${date.getMonth() +1 }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
  
  const editDelete = 
    currentUser ? 
    (comment.user.id === currentUser.id ? 
      <div className="edit-delete">
        <img src={editIcon} onClick={() => setEditOn((editOn) => !editOn) }/>
        <img src={deleteIcon} onClick={()=>handleDelete(comment.id)}/>
      </div> : 
    null) : 
    null;

  return(
    <li key={comment.id}>
      <div className="comment-header">
        <img src={comment.user.profile_image ? comment.user.profile_image : anonymousIcon} className="user-icon"></img>
        <span className="username">{comment.user.username}</span>
        <span className="date">{formatedDate}</span>
      </div>
      {editDelete}
      { 
        editOn ? 
        <EditComment comment={comment} handleEdit={handleEdit}/> :
        <p>{comment.body}</p>
      }
      
    </li>
  )
}

export default Comment;