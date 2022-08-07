import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../stylesheets/App.css';

import Sidebar from './Sidebar';
import Grid from './Grid';
import Project from './Project';
import Submit from "./Submit";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [ projects, setProjects ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  const [ technologies, setTechnologies ] = useState([]);

  const [ currentUser, setCurrentUser ] = useState(null);
  const [ selected, setSelected ] = useState("");

  useEffect(() => {
    Promise.all([
      fetch('/projects'),
      fetch('/users'),
      fetch('/genres'),
      fetch('/technologies')
    ]).then(function(responses){
      return Promise.all(responses.map(function (response) {
        return response.json();
      }))
    }).then(function(data){
      const projects = data[0];
      const users = data[1];
      const genres = data[2];
      const technologies = data[3];
      
      setProjects(projects);
      setUsers(users);
      setGenres(genres);
      setTechnologies(technologies);
    })
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar genres={genres} technologies={technologies} />
        <main>
          <Routes>
            <Route exact path="/" element={
              <Grid data={projects} setSelected={setSelected}/>
            } />
            <Route path="/project" element={
              <Project selected={selected} currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} projects={projects} setProjects={setProjects}/>
            } />
            <Route exact path="/submit-your-art" element={
              <Submit genres={genres} technologies={technologies} currentUser={currentUser} setCurrentUser={setCurrentUser} users={users}/>
            } />
            <Route exact path="/create-your-profile" element={
              <Signup />
            } />
            <Route exact path="/signin" element={
              <Login />
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
