import React, { useRef, useEffect } from "react";
import "../stylesheets/Comment.css";

import Comment from "./comment/Comment";
import LoginSignup from "./LoginSignup";
import CommentForm from "./comment/CommentForm";

function CommentSection( { selected, comments, currentUser, setCurrentUser, users, projects, setProjects } ){

  /* SCROLLABLE COMMENT LIST - scrolling always starts from bottom */
  const scrollable = useRef(null);
  useEffect(() => {
    const scrollableUl = scrollable.current;
    scrollableUl.scrollTop = scrollableUl.scrollHeight;
  }, []);

  /* DELETE COMMENT */
  function onDeleteComment(id){
    const updatedComments = comments.filter(comment => comment.id !== id);
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
 
  /* UPDATE COMMENT */
  function onEditComment(updatedComment){
    const updatedComments = comments.map(comment => {
      if(comment.id === updatedComment.id){
        comment.body = updatedComment.body
        return comment
      } else {
        return comment
      }
    });
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

  const commentlist = comments.map((comment) => {
    return (
      <Comment 
      key={comment.id}
      comment={comment}
      currentUser={currentUser}
      onDeleteComment={onDeleteComment}
      onEditComment={onEditComment}
    />
    )
  })

  return (
    <div id="comment-section">
      <div id="comment-list" className={ currentUser ? "h-90" : "h-80" }>
        <ul ref={scrollable}>
          {commentlist}
        </ul>
      </div>
      { 
        currentUser ? 
        <CommentForm selected={selected} currentUser={currentUser} comments={comments} projects={projects} setProjects={setProjects}/> : 
        <LoginSignup setCurrentUser={setCurrentUser} users={users} />
      }
    </div>
  )
}

export default CommentSection;