import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { chunk } from "../utils/array"

import DefaultLayout from "../components/default-layout"
import SEO from "../components/seo"
import { Row, Col } from 'react-simple-flex-grid'

const Guides = () => (
  <DefaultLayout className="article">
    <SEO title="Guides" />
    <h1>Guides</h1>
    <h2>A breakdown of places I have lived / traveled</h2>
    <br />
    <StaticQuery
      query={guidesQuery}
      render={data => {
        const guides = data.allGuidesJson.edges.map(item => item.node)
        return buildGuides(guides)
      }}
    />
  </DefaultLayout>
)

export default Guides

function buildGuides(guides) {
  return guides.map(item => <Link to={item.path}>{item.name}</Link>)
}

const guidesQuery = graphql`
query {
  allGuidesJson {
    edges {
      node {
        name
        path
      }
    }
  }
}
`
