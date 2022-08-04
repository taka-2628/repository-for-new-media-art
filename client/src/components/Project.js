import React from "react";
import "../stylesheets/Project.css";

import CommentSection from "./CommentSection.js";

import webLogo from "../assets/website-icon.png";
import githubLogo from "../assets/github-logo.png";

function Project( { selected, currentUser, setCurrentUser, users, projects, setProjects } ){
  
  const techBadges = selected.technologies.map((tech) => {
    return(<li key={tech.id}>{tech.technology}</li>)
  })

  const comments = selected.comments;

  return (
    <div id="project">
      <section id="top-section">
        <div id="image-container">
          <img id="img-project" src={selected.image} alt={selected.title}></img>
        </div>

        <CommentSection 
          selected={selected} 
          comments={comments} 
          currentUser={currentUser} 
          setCurrentUser={setCurrentUser} 
          users={users} 
          projects={projects} 
          setProjects={setProjects}
        />
      </section>
      
      <hr/>
      
      <section id="bottom-section">
        <div id="bottom-left">
          <h3>{selected.title}</h3>
          <h4>{selected.subtitle}</h4>
          <div className="website-logo-wrapper">
              {selected.url ? 
              <a href={selected.url} target="_blank" rel="noopener noreferrer"> 
                <span>website</span>
                <img className="website-logo" src={webLogo}></img>
              </a> : 
              null }
              {selected.github_url ? 
              <a href={selected.github_url} target="_blank" rel="noopener noreferrer">
                <span>github</span>
                <img className="website-logo" src={githubLogo}></img>
              </a> : 
              null }
          </div>
          <ul>
            {techBadges}
          </ul>
        </div>

        <div id="bottom-center">
          <p>{selected.description}</p>
        </div>

        <div id="bottom-right">
          <div>
            <img src={selected.user.profile_image}></img>
            <span>{selected.user.username}</span>
          </div>
          <p>{selected.user.intro}</p>
          <div className="website-logo-wrapper">
              {selected.user.website ? 
              <a href={selected.user.website} target="_blank" rel="noopener noreferrer"> 
                <span>website</span>
                <img className="website-logo" src={webLogo}></img>
              </a> : 
              null }
              {selected.user.github ? 
              <a href={selected.user.github} target="_blank" rel="noopener noreferrer">
                <span>github</span>
                <img className="website-logo" src={githubLogo}></img>
              </a> : 
              null }
          </div>
        </div>
      </section>

    </div>
  )
}

export default Project;