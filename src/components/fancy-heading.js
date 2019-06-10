import PropTypes from "prop-types"
import React from "react"
import styles from "./styles/fancy-heading.module.css"

const FancyHeading = ({ children }) => (
  <header className={ styles.fancy_heading }>
    { children }
  </header>
)

FancyHeading.propTypes = {
  children: PropTypes.node.isRequired,
}

FancyHeading.defaultProps = {
  children: <div></div>,
}


export default FancyHeading
