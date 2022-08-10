import React, { useState } from "react";

function ProjectForm( { genres, technologies} ){

  const genreChoices = genres.map((genre) => {
    return (
        <label key={genre.id} className="genre-tech-choices" >{genre.genre}
          <input type="checkbox" /><span className="custom-checkbox"></span>
        </label> 
    )
  })

  const techLangFramLib = [];
  const techSoftHard = [];
  for (let tech of technologies){
    if (tech.category === "language" ||  tech.category === "library/framework"){
      techLangFramLib.push(tech);
    } else {
      techSoftHard.push(tech);
    }
  }
  
  const techChoicesOne = techLangFramLib.map((tech) => {
    return (
      <label key={tech.id} className="genre-tech-choices" >{tech.technology}
          <input type="checkbox" /><span className="custom-checkbox"></span>
      </label>
    )
  })

  const techChoicesTwo = techSoftHard.map((tech) => {
    return (
      <label key={tech.id} className="genre-tech-choices" >{tech.technology}
          <input type="checkbox" /><span className="custom-checkbox"></span>
      </label>
    )
  })

  return (
    <div id="upload-project">
      <h1>Upload Your Project</h1>

      <form>
        <label htmlFor="p-title">Title</label>
        <input type="text" id="p-title" name="title" placeholder="Title of your project.."/>

        <label htmlFor="p-image">Image</label>
        <input type="text" id="p-image" name="image" placeholder="URL for an image.."/>

        <label htmlFor="p-url">URL</label>
        <input type="text" id="p-url" name="url" placeholder="URL for the project.."/>

        <label htmlFor="p-github">GitHub</label>
        <input type="text" id="p-github" name="github" placeholder="GitHub URL for the project.."/>

        <label htmlFor="p-desc">Project Description</label>
        <textarea type="text" id="p-desc" name="description" placeholder="Describe your project.."></textarea>

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
    </div>
  )
}

export default ProjectForm;