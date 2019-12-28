import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

const DefaultLayout = ({ children, className, showHeader }) => (
  <StaticQuery
  query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          headerTitle
        }
      }
    }
  `}
  render={ data => (
    <>
      { showHeader && <Header siteTitle={ data.site.siteMetadata.headerTitle } /> }
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
       }} className={ className }>
        <main>{ children }</main>
      </div>
    </>
  )}
/>
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showHeader: PropTypes.bool
}

DefaultLayout.defaultProps = {
   children: <div></div>,
   className: '',
   showHeader: true
}

export default DefaultLayout
