import React from "react";
import { NavLink } from "react-router-dom";

function NavBar( { currentUser, setCurrentUser } ){

  function handleLogout(){
    fetch("/logout", { method: "DELETE" })
    .then((r) => {
      if (r.ok) {
        setCurrentUser(null);
      }
    });
  }

  return (
    <nav>
      <NavLink
        to="/"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        Home
      </NavLink>
      <NavLink    
        to="/submit-your-art"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        Submit
      </NavLink>

      <hr></hr>

      {
        currentUser ? 
        <>
          <NavLink    
            to="/my-page"
            exact="true"
            className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
          >
            My Page
          </NavLink>
          <button onClick={handleLogout}>
            Logout
          </button>
        </> :
        <>
          <NavLink
            to="/create-your-profile"
            exact="true"
            className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
          >
            Sign up
          </NavLink>
          <NavLink
            to="/signin"
            exact="true"
            className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
          >
            Log in
          </NavLink>
        </>
      }
      
    </nav>
  )
}

export default NavBar;