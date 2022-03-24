import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="kontakt">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Kontakt</h1>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <h2>{data.kontaktPara}</h2>
    </div>
    </div>
    </div>
  )
}

export default Footer
