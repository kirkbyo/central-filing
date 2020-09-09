import * as React from "react"
import styles from "./styles/internship.module.css"
import PropTypes from "prop-types"

const Internship = ({ name, jobTitle, term, children }) => (
  <div className={styles.container}>
    <div className={styles.heading}>
      <h4>{name}</h4>
      <i>{jobTitle}</i>
    </div>
    <p>{term}</p>
    <ul>{children}</ul>
  </div>
)

Internship.propTypes = {
  children: PropTypes.node,
  jobTitle: PropTypes.string,
  name: PropTypes.string,
  term: PropTypes.string,
}

export default Internship
