import React from "react";
import "../stylesheets/Submit.css";

import Login from "./Login";
import ProjectForm from "./ProjectForm";

function Submit( { genres, technologies, currentUser, setCurrentUser, users } ) {  
  
  
  return (
    <div id="submit">
      { 
        currentUser ? 
        <ProjectForm genres={genres} technologies={technologies} /> : 
        <div>
          <h1>Before you upload..</h1>
          <Login setCurrentUser={setCurrentUser} users={users} />
        </div>
      }
    </div>
  )
}

export default Submit;
