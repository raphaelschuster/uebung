import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Willkommen bei Yabe!
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
         
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
