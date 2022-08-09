import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import '../stylesheets/SignupLogin.css'

function Login( { setCurrentUser } ){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
          navigate("/");
        });
      } else {
        r.json().then((err) => setError(err.error));
      }
    });
  }

  return (
    <div id="login">
      <div className="login-signup-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login"/>
        </form>
        <div className="error-div">
          <p>{error}</p>
        </div>
      </div>
    </div>
  )
}

export default Login;