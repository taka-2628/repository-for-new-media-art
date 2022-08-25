import React, { useState} from "react"


function Query (){
  const [ githubUrl, setGithubUrl] = useState("");

  function handleSubmit(e){
    e.preventDefault();  
    fetch("/query-github", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        github_url: githubUrl
      })
    }).then((r) => r.json())
    .then((r) => console.log(r))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Github Url</label>
      <input 
        type="text"
        onChange={ (e) => setGithubUrl(e.target.value)}
      >
      </input>
      <input type="submit"></input>
    </form>
  )
}


export default Query;