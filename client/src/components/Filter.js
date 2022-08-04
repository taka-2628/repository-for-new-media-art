import React from "react";

function Filter( { genres, technologies } ){
  
  const genreList = genres.map((genre) => {
    return <p key={genre.id} className="genre-item">{genre.genre}</p>
  })

  const techLang = technologies.filter(tech => tech.category == "language");
  const techLibFrame = technologies.filter(tech => tech.category == "library/framework");
  const techAppSoftware = technologies.filter(tech => tech.category == "app software");
  const techHardware = technologies.filter(tech => tech.category == "hardware");

  const techLangList = techLang.map((tech) => {
    return <p key={tech.id} className="genre-item">{tech.technology}</p>
  })
  const techLibFrameList = techLibFrame.map((tech) => {
    return <p key={tech.id} className="genre-item">{tech.technology}</p>
  })
  const techAppSoftwareList = techAppSoftware.map((tech) => {
    return <p key={tech.id} className="genre-item">{tech.technology}</p>
  })
  const techHardwareList = techHardware.map((tech) => {
    return <p key={tech.id} className="genre-item">{tech.technology}</p>
  })

  return (
    <div id="filter">
      <h3>Filter</h3>
      <ul>
        <li>
          <input type="checkbox" defaultChecked/>
          <i className="arrow"></i>
          <h4>genre</h4>
          {genreList}
        </li>

        <li id="tech-filter-cont">
          <input type="checkbox" defaultChecked/>
          <i className="arrow"></i>
          <h4>technology</h4>

          <div className="tech-categories">
            <input type="checkbox" defaultChecked/>
            <i className="arrow"></i>
            <h5>language</h5>
            {techLangList}
          </div>
          <div className="tech-categories">
            <input type="checkbox" defaultChecked/>
            <i className="arrow"></i>
            <h5>library/framework</h5>
            {techLibFrameList}
          </div>
          <div className="tech-categories">
            <input type="checkbox" defaultChecked/>
            <i className="arrow"></i>
            <h5>library/framework</h5>
            {techAppSoftwareList}
          </div>
          <div className="tech-categories">
            <input type="checkbox" defaultChecked/>
            <i className="arrow"></i>
            <h5>hardware</h5>
            {techHardwareList}
          </div>

        </li>
      </ul>
    </div>
  )
}

export default Filter;