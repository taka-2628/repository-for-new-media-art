import React, { useState } from "react";

function EditComment( { comment, handleEdit }){
  const [commentBody, setCommentBody] = useState(comment.body);
  
  function handleEditFormSubmit(e, id){
    e.preventDefault();

    fetch(`/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: commentBody
      }),
    })
    .then((r) => r.json())
    .then((updatedComment) => handleEdit(updatedComment));
  }
  
  return (
    <form className="edit-message" onSubmit={(e) => handleEditFormSubmit(e, comment.id)}>
      <textarea
        type="text"
        name="body"
        autoComplete="off"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditComment;