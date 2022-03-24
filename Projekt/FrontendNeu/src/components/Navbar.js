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
            <button onClick={() => scrollTo("#login")}>Login</button>
            <button onClick={() => scrollTo("#artikel")}>Kaufen</button>
            <button onClick={() => scrollTo("#anbieten")}>Anbieten</button>
            <button onClick={() => scrollTo("#about")}>Über Uns</button>
            <button onClick={() => scrollTo("#kontakt")}>Kontakt</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
