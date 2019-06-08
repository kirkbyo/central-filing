import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
   <div id="header-content">
      <Link to="/" id="home-icon">
         <img src={'/home-icon.svg'} alt="Home Icon" id="home-icon"/>
      </Link>
      <div id="header-title"><p>{siteTitle}</p></div>
   </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
