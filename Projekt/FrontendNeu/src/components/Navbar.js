import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Yabe
          </div>
          <div className="links-wrapper">
            
            <button onClick={() => scrollTo("#allarticles")}>Artikel</button>            
            <button onClick={() => scrollTo("#offer")}>Anbieten</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
