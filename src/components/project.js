import PropTypes from "prop-types"
import React from "react"
import { Apple, Github, Web } from "./social-icons"
import styles from "./styles/project.module.css"

const Project = ({
  title,
  description,
  github,
  apple,
  website,
  discontinued,
}) => {
  const [isHover, setHovered] = React.useState(false)

  return (
    <div className={styles.project}>
      <div className={styles.project_title}>
        <h4>{title}</h4>
        {discontinued && (
          <span
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={styles.discontinued}
          >
            <span role="img" aria-label="dead">
              💀
            </span>{" "}
            {isHover && <span>discontinued</span>}
          </span>
        )}
        {github && <Github url={github} />}
        {apple && <Apple url={apple} />}
        {website && <Web url={website} />}
      </div>
      <p className={styles.project_description}>{description}</p>
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  github: PropTypes.string,
  apple: PropTypes.string,
  website: PropTypes.string,
  discontinued: PropTypes.bool,
}

Project.defaultProps = {
  title: ``,
  description: ``,
  github: null,
  apple: null,
  website: null,
}

export default Project
