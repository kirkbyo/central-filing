import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../../components/default-layout"
import SEO from "../../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <DefaultLayout className="article">
      <SEO title="Quotes" />
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        className="books-summary-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
