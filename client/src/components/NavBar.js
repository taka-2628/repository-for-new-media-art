import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <nav>
      <NavLink
        to="/"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        Home
      </NavLink>
      {/*
      <NavLink
        to="/about"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        About
      </NavLink>
      */}
      {/*
      <NavLink    
        to="/my-page"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        My Page
      </NavLink>
      */}
      <NavLink    
        to="/submit-your-art"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        Submit
      </NavLink>
    </nav>
  )
}

export default NavBar;