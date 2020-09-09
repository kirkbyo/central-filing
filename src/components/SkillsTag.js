import * as React from "react"
import PropTypes from "prop-types"
import styles from "./styles/skills-tag.module.css"

const SkillsTag = ({ name, color }) => {
  const colorClassName = color === "blue" ? styles.blue : styles.orange
  return (
    <div className={[styles.container, colorClassName].join(" ")}>
      <span>{name}</span>
    </div>
  )
}

SkillsTag.propTypes = {
  name: PropTypes.string,
  color: PropTypes.oneOf(["blue", "orange"]),
}

export default SkillsTag
