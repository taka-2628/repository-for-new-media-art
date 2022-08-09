import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import '../stylesheets/SignupLogin.css'

function Signup( { setCurrentUser } ){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [intro, setIntro] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();  
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        profile_image: imageUrl,
        intro,
        website: websiteUrl,
        github: githubUrl
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div id="signup">
      <div className="login-signup-container">
        <h1>Sign Up</h1>
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
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            placeholder="Type your password again"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          <label htmlFor="imageUrl">Profile Image</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            placeholder="URL for a profile image"
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <label htmlFor="intro">Introduction</label>
          <textarea 
            rows="3"
            id="intro"
            value={intro}
            placeholder="Brief intro about yourself.."
            onChange={(e) => setIntro(e.target.value)}
          />
          <label htmlFor="websiteUrl">Website Url</label>
          <input
            type="text"
            id="websiteUrl"
            value={websiteUrl}
            placeholder="URL for your website"
            onChange={(e) => setWebsiteUrl(e.target.value)}
          />
          <label htmlFor="githubUrl">GitHub Url</label>
          <input
            type="text"
            id="githubUrl"
            value={githubUrl}
            placeholder="URL for your GitHub"
            onChange={(e) => setGithubUrl(e.target.value)}
          />
          <input type="submit" value="Signup"/>
        </form>
        <div className="error-div">
          {errors.map((err) => (
              <p key={err} >{err}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Signup;