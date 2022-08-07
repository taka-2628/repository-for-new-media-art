import React, { useState } from "react";

function ProjectForm( { genres, technologies} ){
  const genreChoices = genres.map((genre) => {
    return (
        <div key={genre.id}>
          <input type="checkbox" name="genre" value={genre.genre}/><span>{genre.genre}</span><br></br>
        </div>
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

        <label htmlFor="p-github">URL</label>
        <input type="text" id="p-github" name="github" placeholder="GitHub URL for the project.."/>

        <label htmlFor="p-desc">Project Description</label>
        <textarea type="text" id="p-desc" name="description" placeholder="Describe your project.."></textarea>

        {genreChoices}

        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default ProjectForm;