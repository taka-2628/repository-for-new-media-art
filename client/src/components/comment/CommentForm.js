import React, { useState } from "react";

function CommentForm( { selected, currentUser, comments, projects, setProjects }){
  const [ commentBody, setCommentBody ] = useState("");
  
  /* POST NEW COMMENT */
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        project_id: selected.id,
        body: commentBody,
      }),
    })
    .then((r) => r.json())
    .then((comment) => {
      onAddNewComment(comment);
      setCommentBody("");
    });
    function onAddNewComment(comment){
      const newComment = {...comment, user: currentUser};
      const updatedComments = ([...comments, newComment]);
      const updatedProjects = projects.map((project) => {
        if(project.id === selected.id){
          project.comments = updatedComments
          return project
        } else {
          return project
        }
      });
      setProjects(updatedProjects);
    }
  }

  return (
    <form id="comment-form" onSubmit={handleSubmit}>
      <textarea 
        type="text"
        name="body"
        autoComplete="off"
        placeholder="Write your comment.."
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      >
      </textarea>
      <input type="submit"></input>
    </form>
  )
}

export default CommentForm;