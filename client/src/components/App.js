import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../stylesheets/App.css';

import Sidebar from './Sidebar';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  const [ projects, setProjects ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  const [ technologies, setTechnologies ] = useState([]);

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
        <Sidebar genres={genres} technologies={technologies}/>
        <Routes>
          <Route path="/testing" element={<h1>Test Route</h1>} />
          <Route path="/" element={<h1>Page Count: {count}</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
