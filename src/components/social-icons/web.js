import React from "react"
import styles from "../styles/project.module.css"

const WebIcon = props => {
  return (
    <div className={styles.social_icon}>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <svg
          height={props.height}
          viewBox="0 0 16 16"
          enable-background="new 0 0 16 16"
        >
          <title>Website icon</title>
          <g>
            <path
              fill="#d3d3d3"
              d="M7.6,7.6V4.1H4.9c-0.3,1-0.5,2.2-0.5,3.5H7.6z"
            />
            <path
              fill="#d3d3d3"
              d="M0.4,7.6h3c0-1.3,0.2-2.4,0.5-3.5H1.5C0.9,5.1,0.5,6.3,0.4,7.6z"
            />
            <path fill="#d3d3d3" d="M7.6,3.2V0.5c-1,0.2-1.8,1.2-2.4,2.7H7.6z" />
            <path
              fill="#d3d3d3"
              d="M7.6,8.4H4.3c0,1.3,0.2,2.4,0.5,3.5h2.7L7.6,8.4L7.6,8.4z"
            />
            <path
              fill="#d3d3d3"
              d="M3.9,11.9c-0.3-1-0.5-2.2-0.5-3.5h-3c0.1,1.3,0.5,2.5,1.1,3.5H3.9z"
            />
            <path
              fill="#d3d3d3"
              d="M11.8,3.2h2.1c-0.9-1.1-2.1-1.9-3.5-2.4C11,1.4,11.4,2.2,11.8,3.2z"
            />
            <path
              fill="#d3d3d3"
              d="M8.4,0.5v2.7h2.4C10.2,1.7,9.4,0.7,8.4,0.5z"
            />
            <path
              fill="#d3d3d3"
              d="M11.7,7.6c0-1.3-0.2-2.4-0.5-3.5H8.4v3.5H11.7z"
            />
            <path
              fill="#d3d3d3"
              d="M4.2,3.2c0.4-1,0.8-1.8,1.4-2.4C4.2,1.2,3,2.1,2.1,3.2H4.2z"
            />
            <path
              fill="#d3d3d3"
              d="M12.1,4.1c0.3,1,0.5,2.2,0.5,3.5h3c-0.1-1.3-0.5-2.5-1.1-3.5H12.1z"
            />
            <path
              fill="#d3d3d3"
              d="M4.2,12.8H2.1c0.9,1.1,2.1,1.9,3.5,2.4C5,14.6,4.6,13.8,4.2,12.8z"
            />
            <path
              fill="#d3d3d3"
              d="M11.8,12.8c-0.4,1-0.8,1.8-1.4,2.4c1.4-0.5,2.6-1.3,3.5-2.4C13.9,12.8,11.8,12.8,11.8,12.8z"
            />
            <path
              fill="#d3d3d3"
              d="M15.6,8.4h-3c0,1.3-0.2,2.4-0.5,3.5h2.4C15.1,10.9,15.5,9.7,15.6,8.4z"
            />
            <path
              fill="#d3d3d3"
              d="M7.6,15.5v-2.7H5.2C5.8,14.3,6.6,15.3,7.6,15.5z"
            />
            <path
              fill="#d3d3d3"
              d="M8.4,12.8v2.7c0.9-0.2,1.8-1.2,2.4-2.7H8.4z"
            />
            <path
              fill="#d3d3d3"
              d="M8.4,8.4v3.5h2.7c0.3-1,0.5-2.2,0.5-3.5H8.4z"
            />
          </g>
        </svg>
      </a>
    </div>
  )
}

export default WebIcon
