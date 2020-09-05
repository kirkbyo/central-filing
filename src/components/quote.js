import PropTypes from "prop-types"
import React from "react"

import styles from "./styles/quote.module.css"

const Quote = ({ author, children, id }) => (
  <div className={styles.container}>
    <a href={"#" + id}>
      <p id={id} className={styles.quote}>
        {children}
      </p>
      {author && <p className={styles.author}>{author}</p>}
    </a>
  </div>
)

Quote.propTypes = {
  author: PropTypes.string,
  link: PropTypes.string,
}

Quote.defaultProps = {
  author: ``,
}

export default Quote
