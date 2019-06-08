import PropTypes from "prop-types"
import React from "react"

import styles from "./styles/vintage-quote.module.css"

const VintageQuote = ({ author, children }) => (
   <div className={ styles.vintage_quote }>
      <p>{ children }</p>
      <p>{ author }</p>
   </div>
)

VintageQuote.propTypes = {
  author:  PropTypes.string
}

VintageQuote.defaultProps = {
  author: ``
}


export default VintageQuote
