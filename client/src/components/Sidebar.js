import React from "react";

import NavBar from "./sidebar/NavBar";
import Filter from "./sidebar/Filter";

function Sidebar( { genres, technologies, currentUser } ){
  return (
    <div className="sidebar">
      <div id="sidebar-top">
        <h1>Repostory for New Media Art</h1>
        <hr></hr>
        <NavBar currentUser={currentUser} />
      </div>
      
      <div id="sidebar-bottom">
        {<Filter genres={genres} technologies={technologies} />}
      </div>
      
    </div>
  )
}

export default Sidebar;