import PropTypes from "prop-types"
import React from "react"
import { Apple, Github } from './social-icons'
import styles from "./styles/project.module.css"

const Project = ({ title, description, github, apple }) => (
   <div className={ styles.project }>
    <div className={ styles.project_title }>
      <h4>{title}</h4>
      {github && <Github url={github}/>}
      {apple && <Apple url={apple}/>}
    </div>
    <p className={ styles.project_description }>{description}</p>
   </div>
)

Project.propTypes = {
  title:  PropTypes.string,
  description: PropTypes.string,
  github: PropTypes.string,
  apple: PropTypes.string
}

Project.defaultProps = {
  title: ``,
  description: ``,
  github: null,
  apple: null
}


export default Project
