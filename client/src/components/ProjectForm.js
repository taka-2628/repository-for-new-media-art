import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ProjectForm( { genres, technologies, projects, setProjects, currentUser } ){
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [github, setGithub] = useState("");
  const [description, setDescription] = useState("");

  const [genreCheckedState, setGenreCheckedState] = useState( new Array(11).fill(false) );
  const [techCheckedState, setTechCheckedState] = useState( new Array(60).fill(false) );

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  
  const handleOnChangeGenre = (position) => {
    const updatedCheckedState = genreCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setGenreCheckedState(updatedCheckedState);
  };

  const handleOnChangeTech = (position) => {
    const updatedCheckedState = techCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setTechCheckedState(updatedCheckedState);
  };

  function handleSubmit(e){
    e.preventDefault();  
    setErrors([]);

    const selectedGenres = genreCheckedState.reduce((returns, genre, index) => {
      if(genre){
        returns.push({id: index + 1})
      }
      return returns
    }, [])
    const selectedTechs = techCheckedState.reduce((returns, tech, index) => {
      if(tech){
        returns.push({id: index + 1})
      }
      return returns
    }, [])
    
    fetch("/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        title,
        subtitle,
        description,
        image,
        url,
        github_url: github,
        genres: selectedGenres,
        technologies: selectedTechs
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((project) => {
          setProjects([...projects, project])
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const genreChoices = genres.map((genre, index) => {
    return (
        <label key={genre.id} className="genre-tech-choices" >{genre.genre}
          <input 
            type="checkbox" 
            checked={genreCheckedState[index]}
            onChange={() => handleOnChangeGenre(index)}
          />
          <span className="custom-checkbox"></span>
        </label> 
    )
  })

  const techLangFramLib = [];
  const techSoftHard = [];
  for (let i = 0; i < technologies.length; i++){
    if (technologies[i].category === "language" ||  technologies[i].category === "library/framework"){
      technologies[i].original_id = i;
      techLangFramLib.push(technologies[i]);
    } else {
      technologies[i].original_id = i;
      techSoftHard.push(technologies[i]);
    }
  }

  const techChoicesOne = techLangFramLib.map((tech) => {
    return (
      <label key={tech.id} className="genre-tech-choices" >{tech.technology}
        <input 
          type="checkbox"
          checked={techCheckedState[tech.original_id]}
          onChange={() => handleOnChangeTech(tech.original_id)}
        />
        <span className="custom-checkbox"></span>
      </label>
    )
  })
  const techChoicesTwo = techSoftHard.map((tech) => {
    return (
      <label key={tech.id} className="genre-tech-choices" >{tech.technology}
        <input 
          type="checkbox"
          checked={techCheckedState[tech.original_id]}
          onChange={() => handleOnChangeTech(tech.original_id)}
        />
        <span className="custom-checkbox"></span>
      </label>
    )
  })

  return (
    <div id="upload-project">
      <h1>Upload Your Project</h1>

      <form onSubmit={handleSubmit}>
        <div className="half-width div-left">
          <label htmlFor="p-title">Title</label>
          <input 
            type="text" 
            id="p-title" 
            name="title"
            value={title}
            placeholder="Title of your project.." 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="half-width div-right">
          <label htmlFor="p-image">Image</label>
          <input 
            type="text" 
            id="p-image" 
            name="image"
            value={image}
            placeholder="URL for an image.."
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        
        <label htmlFor="p-title">Subitle</label>
        <input 
          type="text" 
          id="p-subtitle" 
          name="subtitle"
          value={subtitle}
          placeholder="Subtitle of your project.." 
          onChange={(e) => setSubtitle(e.target.value)}
        />
        
        <div className="half-width div-left">
          <label htmlFor="p-url">URL</label>
          <input 
            type="text" 
            id="p-url" 
            name="url"
            value={url}
            placeholder="URL for the project.."
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="half-width div-right">
          <label htmlFor="p-github">GitHub</label>
          <input 
            type="text" 
            id="p-github" 
            name="github"
            value={github}
            placeholder="GitHub URL for the project.."
            onChange={(e) => setGithub(e.target.value)}
          />
        </div>
        
        <label htmlFor="p-desc">Project Description</label>
        <textarea 
          id="p-desc" 
          name="description"
          value={description}
          placeholder="Describe your project.."
          onChange={(e) => setDescription(e.target.value)}
        >
        </textarea>

        <fieldset id="fs-genres" className="fs-genres-tech">
          <legend>Genres</legend>
          { genreChoices }
        </fieldset>
        
        <fieldset id="fs-tech" className="fs-genres-tech">
          <legend>Technologies</legend>
          <div className="tech-cont">
            <h5>coding language</h5>
            <div className="scrollable-choices-cont cont-left">
              { techChoicesOne }
            </div>
          </div>
          <div className="tech-cont">
            <h5>software/hardware</h5>
            <div className="scrollable-choices-cont cont-right">
              { techChoicesTwo }
            </div>
          </div>
        </fieldset>
      
        <input type="submit" value="Submit"/>
      </form>
      <div className="error-div">
        {errors.map((err) => (
            <p key={err} >{err}</p>
        ))}
      </div>
    </div>
  )
}

export default ProjectForm;